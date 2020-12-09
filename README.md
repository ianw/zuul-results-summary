# Zuul Results Summary

Polygerrit plugin to show a summary of Zuul results in a change tab

## UI tests

To run UI tests here will need install dependencies from both npm and bower.

`npm run wct-test` should take care both for you, read more in `package.json`.

## Test plugin on Gerrit

1. Clone gerrit `git clone https://gerrit.googlesource.com/gerrit`
1. Clone plugin to `plugins/zuul-results-summary` `cd plugins; git clone https://github.com/ianw/gerrit-zuul-results-summary zuul-results-summary`
1. Run build `cd ..; bazel build plugins/zuul-results-summary:zuul_summary_status`
1. Copy resulting plugin `bazel-bin/plugins/zuul-results-summary/zuul-results-summary-bundle.js` to Gerrit plugins directory

