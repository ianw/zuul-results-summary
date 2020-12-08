class GrZuulSummaryStatusView extends Polymer.Element {

    static get is() {
        return 'gr-zuul-summary-status-view'
    }

    static get properties() {
        return {
            change: Object,
            revision: Object
        }
    }

    static get template() {
        return Polymer.html`
  <style>
    table {
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      text-align: left;
      padding: 10px;
    }

    th {
      background-color: #f7ffff;
    }

    tr:nth-child(even) {
     background-color: #f2f2f2;
    }

    .status-SUCCESS {
      color: green;
    }

    .status-FAILURE {
      color: red;
    }
  </style>

  <template is="dom-repeat" items="[[__table]]">
   <table>
    <tr>
     <th>[[item.author]] in pipeline [[item.pipeline]] ([[item.rechecks]] rechecks)</th>
     <th>[[item.date]]</th>
    </tr>
    <template is="dom-repeat" items="[[item.results]]" as="job">
     <tr>
      <td><a href="[[job.link]]">[[job.job]]</a></td>
      <td><span class$="status-[[job.result]]">[[job.result]]</span> in [[job.time]]</td>
     </tr>
    </template>
   </table>
  </template>
`;
    }

    ready() {
        super.ready();
        /*
         * change-view-tab-content gets passed ChangeInfo object [1],
         * registered in the property "change".  We walk the list of
         * messages with some regexps to extract into a datastructure
         * stored in __table
         *
         * __table is an [] of objects
         *
         *  author: "<string> CI"
         *  date: date message posted
         *  status: one of <succeeded|failed>
         *  pipeline: string of reporting pipeline
         *    (may be undefined for some CI)
         *  results: [] of objects
         *    job: job name
         *    link: raw URL link to logs
         *    result: one of <SUCCESS|FAILURE>
         *    time: duration of run in human string (e.g. 2m 5s)
         *
         * This is then presented by the template
         *
         * [1] https://gerrit-review.googlesource.com/Documentation/rest-api-changes.html#change-info
         */
        this.__table = [];
        this.change.messages.forEach((element) => {
            if (element.author.name) {
                /* First check it looks like Zuul, or a third-party CI
                 * Zuul author */
                let authorRe = /^(?<author>.* CI|Zuul)/;
                var author = authorRe.exec(element.author.name);
                if (author) {

                    /* If we've already seen a comment by this CI,
                     * take note of it and increase the rechecks */
                    let existing = this.__table.findIndex((entry) => {
                        entry.author === author });
                    let rechecks = existing == -1 ? 0 : (this.__table[existing].rechecks + 1);

                    var date = new Date(element.date);
                    /* Look for the build status message, e.g.:
                     *   Build succeeded (check pipeline).
                     */
                    let statusRe = /^Build (?<status>\w+) \((?<pipeline>[\w]+) pipeline\)\./gm
                    let status = statusRe.exec(element.message);
                    if (!status) {
                        /* Match non-pipeline CI comments, e.g.:
                         *   Build succeeded.
                         */
                        let statusRe = /^Build (?<status>\w+)\./gm
                        status = statusRe.exec(element.message)
                    }
                    if (status) {
                        var table = {
                            'author': author.groups.author,
                            'rechecks': rechecks,
                            'date': date.toLocaleString(),
                            'status': status.groups.status,
                            'pipeline': status.groups.pipeline,
                            'results': []
                        }
                        /* Find each result line, e.g. :
                         *   - openstack-tox-py35 http://... : SUCCESS in 2m 45
                         */
                        let lines = element.message.split("\n");
                        let resultRe = /^- (?<job>[^ ]+) (?<link>[^ ]+) : (?<result>[^ ]+) in (?<time>.*)/
                        lines.forEach((line) => {
                            var result = resultRe.exec(line);
                            if (result) {
                                table.results.push(result.groups);
                            }
                        });
                        if (existing == -1) {
                            this.__table.push(table);
                        } else {
                            this.__table[existing] = table;
                        }
                        console.debug("Zuul Summary table now:");
                        console.debug(this.__table);
                    }
                }
            }
        });
    }


}

customElements.define(GrZuulSummaryStatusView.is,
                      GrZuulSummaryStatusView)
