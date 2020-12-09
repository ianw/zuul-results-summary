load("@npm//@bazel/rollup:index.bzl", "rollup_bundle")
load("//tools/bzl:js.bzl", "bundle_assets", "polygerrit_plugin")
load("//tools/js:eslint.bzl", "eslint")

polygerrit_plugin(
    name = "zuul_results_summary",
    app = "zuul-results-summary-bundle.js",
    plugin_name = "zuul-results-summary",
)


rollup_bundle(
    name = "zuul-results-summary-bundle",
    srcs = glob(["zuul-results-summary/*.js"]),
    entry_point = "zuul-results-summary/zuul-results-summary.js",
    format = "iife",
    rollup_bin = "//tools/node_tools:rollup-bin",
    sourcemap = "hidden",
    deps = [
      "@tools_npm//rollup-plugin-node-resolve",
    ],
)

# Define the eslinter for the plugin
# The eslint macro creates 2 rules: lint_test and lint_bin
eslint(
    name = "lint",
    srcs = glob([
        "zuul-results-summary/**/*.js",
    ]),
    config = ".eslintrc.json",
    data = [],
    extensions = [
        ".js",
    ],
    ignore = ".eslintignore",
    plugins = [
        "@npm//eslint-config-google",
        "@npm//eslint-plugin-html",
        "@npm//eslint-plugin-import",
        "@npm//eslint-plugin-jsdoc",
    ],
)
