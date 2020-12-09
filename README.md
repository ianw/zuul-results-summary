# Zuul Results Summary

Polygerrit plugin to show a summary of Zuul results in a change tab

Results are show in reverse chronological order, additionally sorted
by CI userid's in ZUUL_PRIORITY (earlier entry in the list means
sorted first in the output table).  i.e. if you consider one of your
CI reporters to be the main one, you should place it first in this
list.

## UI tests

To run UI tests here will need install dependencies from both npm and bower.

`npm run wct-test` should take care both for you, read more in `package.json`.

## Test plugin on Gerrit

1. Clone gerrit `git clone https://gerrit.googlesource.com/gerrit`
1. Clone plugin to `plugins/zuul-results-summary` `cd plugins; git clone https://github.com/ianw/gerrit-zuul-results-summary zuul-results-summary`
1. Run build `cd ..; bazel build plugins/zuul-results-summary:zuul_summary_status`
1. Copy resulting plugin `bazel-bin/plugins/zuul-results-summary/zuul-results-summary-bundle.js` to Gerrit plugins directory

