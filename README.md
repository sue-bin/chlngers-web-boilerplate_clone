`yarn dev` for local testing
`yarn storybook` to open storybook

### Libraries used

for dev

- commitlint + husky: lint commit msgs
- storybook: manage design system

for project

- styled-components: styling
- redux toolkit: managing state
- swr: cached data-fetching
- react-ab-test: running a/b testing in React

### Tip for development

Download [Redux devtool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for debugging redux

### Project structure

- pages: where page components reside
- components: home for UI components
- store: where reducer files go
- api: where data fetching happens
- stories: keep storybook files separate from components
- utils: keep global util funcs + files here
