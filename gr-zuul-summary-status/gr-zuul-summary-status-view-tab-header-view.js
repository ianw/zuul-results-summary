class GrZuulSummaryStatusChangeViewTabHeaderView extends Polymer.Element {

    static get is() {
        return 'gr-zuul-summary-status-view-tab-header-view';
    }

   static get template() {
     return Polymer.html`Zuul Summary`;
   }
 }

customElements.define(GrZuulSummaryStatusChangeViewTabHeaderView.is,
                      GrZuulSummaryStatusChangeViewTabHeaderView);

