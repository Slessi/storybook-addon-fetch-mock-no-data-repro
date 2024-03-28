Steps:
```
npm i
npm run storybook
```

Expected error on first story:
```
TypeError: Cannot read properties of undefined (reading 'mocks')
    at wrapper (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/storybook-addon-fetch-mock_preview.js?v=703e1074:2793:86)
    at http://localhost:6006/sb-preview/runtime.js:86:3164
    at http://localhost:6006/sb-preview/runtime.js:86:3277
    at hookified (http://localhost:6006/sb-preview/runtime.js:84:10607)
    at http://localhost:6006/sb-preview/runtime.js:100:3256
    at http://localhost:6006/sb-preview/runtime.js:100:3918
    at http://localhost:6006/sb-preview/runtime.js:84:11410
    at unboundStoryFn (http://localhost:6006/sb-preview/runtime.js:100:5353)
    at renderWithHooks (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-AC6QIUQG.js?v=5fad7723:12171:26)
    at mountIndeterminateComponent (http://localhost:6006/node_modules/.cache/storybook/1c3385a5d25e538d10b518b310c74d3ca2690b6aaffeadccd74da79736171f86/sb-vite/deps/chunk-AC6QIUQG.js?v=5fad7723:14921:21)
```