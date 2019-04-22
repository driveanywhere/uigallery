# The principle of unit test
Please check react-ui.md

# Frameworks and Libraries for testing
## jest
## Mocha+Chai
### Vue Test Utils 
Vue Test Utils is the official unit testing utility library for Vue.js.
More information is here https://vue-test-utils.vuejs.org/.

# How to add test framework while creating the project

In the command line, use vue-cli to create a Vue project:

```
vue create project_name
```

Then you will see following selection:

```
Vue CLI v3.5.4
┌───────────────────────────┐
│  Update available: 3.5.5  │
└───────────────────────────┘
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)
  Manually select features
```

Select **Manually select features** and press enter.

```
Vue CLI v3.5.4
┌───────────────────────────┐
│  Update available: 3.5.5  │
└───────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

Move the arrow down, select **Unit Testing** and **E2E Testing**, then press enter.
Then follow the steps to the end, the project will be created.

# How to add test into a exising project
## jest
1. Run following command in the root directory of the project.

```
vue add @vue/unit-jest
```

2. Update jest.config.js in the root directory of the project.
```js
    module.exports = {
      moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue'
      ],
      collectCoverage: true,
      collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!src/main.js', // No need to cover bootstrap file
      ],
      transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
      },
      transformIgnorePatterns: [
        '/node_modules/'
      ],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      },
      snapshotSerializers: [
        'jest-serializer-vue'
      ],
      testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
      ],
      testURL: 'http://localhost:8080/',
      watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
      ]
    }
```
With the setting items of collectCoverage and collectCoverageFrom, Jest will generate a coverage report for all the files which name matches collectCoverageFrom.

## Mocha+Chai

Run following command in the root directory of the project.

```
vue add @vue/unit-mocha
```

# Add unit testing files

All the unit testing files should be named as \*.spec.js add located in tests/unit/.

Following is a sample of the unit test file:
## Jest
Write test cases with snapshot
1. Create test file named component.spec.js in tests/unit.
2. Add a unit test into the file as following.

```js
import ComponentName from "@/components/ComponentName.vue"
import { mount } from '@vue/test-utils';
import Vue from 'vue';

describe("SmartBar snapshot test", ()=>{
    it("First render", ()=>{
        const wrapper = mount(SmartBar, {
            propsData:{
                msg: "Hello"
            },
        })
        Vue.nextTick().then(()=>{
            expect(wrapper.html()).toMatchSnapshot()
        })
    }) 
)
```

With the function .toMatchSnapshot(), a snapshot will be created for this component during the first run of the test case, and when you run the test case again, Jest will compare the lastest rendered html with the snapshot.

demo code: https://msasg.visualstudio.com/Shared%20Data/_git/Kensho2/pullrequest/1014865?_a=overview

## Mocha+Chai
```js
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import TuningPanel from '@/components/TuningPanel.vue'
import Hook from '@/views/Hook.vue'

import iView from "iview";
import locale from "iview/dist/locale/en-US";
Vue.use(iView, { locale });

describe('TuningPanel.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Smart detection'
    const wrapper = shallowMount(TuningPanel, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
```

For projects which globally imported iView, do remember to add following code in the top of the unit tesing file

```js
import iView from "iview";
import locale from "iview/dist/locale/en-US";
Vue.use(iView, { locale });
```

For async test, please create a test case as below:

```js
  it('renders props.msg when passed', done => {
      const wrapper = shallowMount(Component)
      setTimeout(()=>{
        expect(wrapper.value).to.equal(15);
        done();
      }, 300);
    })
```
demo code: https://msasg.visualstudio.com/Shared%20Data/_git/Kensho2/pullrequest/1014868?_a=overview
# Run the test

Run the unit testing with following command

```
npm run test:unit
```