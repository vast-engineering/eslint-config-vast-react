'use strict';

module.exports = {
    plugins: [
        'react',
        'jsx-a11y'
    ],
    extends: ['vast', 'plugin:react/recommended'],
    rules: {
        // React rules
        'react/display-name': 0, // This overrides plugin:react/recommended
        'react/forbid-component-props': 2, // Set to 2 for now. Switch to 1 if needed.
        'react/no-children-prop': 2,
        'react/no-did-update-set-state': 2,
        'react/no-danger': 1, // See https://github.com/zeit/hyper/issues/730#issuecomment-249379034 and https://github.com/eslint/eslint/issues/7030
        'react/no-danger-with-children': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unused-prop-types': [1, { // Disable this if it returns false positives.
            customValidators: [],
            skipShapeProps: true
        }],
        'react/prop-types': 1, // This overrides plugin:react/recommended. Only warn for now. We should probably set this to 2.
        'react/style-prop-object': 2,

        // JSX rules
        'react/jsx-boolean-value': 2,
        'react/jsx-closing-bracket-location': [2, 'after-props'],
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-handler-names': 2,
        'react/jsx-no-bind': [2, {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false
        }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': [2, { ignoreCase: true }], // This overrides plugin:react/recommended
        'react/jsx-no-target-blank': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-space-before-closing': 2,
        'react/jsx-wrap-multilines': 2,

        // Accessibility rules
        'jsx-a11y/anchor-has-content': 2,
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/aria-proptypes': 2,
        'jsx-a11y/aria-role': 2,
        'jsx-a11y/aria-unsupported-elements': 2,
        'jsx-a11y/heading-has-content': 2,
        'jsx-a11y/href-no-hash': 2,
        'jsx-a11y/html-has-lang': 2,
        'jsx-a11y/img-has-alt': 2,
        'jsx-a11y/img-redundant-alt': 2,
        'jsx-a11y/label-has-for': 1, // Only warn for now as this rule reports a false positive for wrapping label without `for`.
        'jsx-a11y/lang': 2,
        'jsx-a11y/mouse-events-have-key-events': 1,
        'jsx-a11y/no-access-key': 2,
        'jsx-a11y/no-onchange': 2,
        'jsx-a11y/no-static-element-interactions': 1, // We should probably change this to 2.
        'jsx-a11y/onclick-has-focus': 2, // Maybe covered by the above rule.
        'jsx-a11y/onclick-has-role': 2, // Maybe covered by the above rule.
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'jsx-a11y/tabindex-no-positive': 2
    }
};
