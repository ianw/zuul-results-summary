import {htmlTemplate} from './gr-zuul-summary-status-view_html.js';

class GrZuulSummaryStatusView extends Polymer.Element {

    static get is() {
        return 'gr-zuul-summary-status-view';
    }

    static get template() {
        return htmlTemplate;
    }

}

customElements.define(GrZuulSummaryStatusView.is,
                      GrZuulSummaryStatusView)
