import './gr-zuul-summary-status-view-tab-header-view.js';
import './gr-zuul-summary-status-view.js';

function installZuulSummaryStatus(plugin) {

    plugin.registerDynamicCustomComponent(
        'change-view-tab-header',
        'gr-zuul-summary-status-view-tab-header-view'
    );

    plugin.registerDynamicCustomComponent(
        'change-view-tab-content',
        'gr-zuul-summary-status-view'
    );
}

// Install the plugin
Gerrit.install(plugin => {
    installZuulSummaryStatus(plugin);
});
