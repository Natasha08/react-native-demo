# react-native-demo

# Getting Started

  ## clone the app
  `git clone git@github.com:Natasha08/react-native-demo.git`

  ## install global packages

  [install yarn](https://yarnpkg.com/lang/en/docs/install/)

  `yarn global add react-native-cli`

  `yarn` to install node modules

# App configuration

  cp example.environment.js environment.js

# Running the project -- Android
  - set up your [Android development environment](https://facebook.github.io/react-native/docs/getting-started.html#java-development-kit)
  - Make sure your testing device is connected `adb devices`
  - In one terminal tab enter `react-native start`
  - In another tab, run `react-native run-android`

# Running the project -- IOS
  - Install XCode
  - In one terminal tab enter `react-native start`
  - In another tab, run `react-native run-ios`

# Testing

### Running JS tests:
  `yarn test`

# Debugging

`react-native log-ios`
`react-native log-android`

# Errors

#### duplication statement when running `react-native start`
 This is a caching issue. If this occurs, run `react-native start reset-cache` instead.

#### SyntaxError: Strict mode does not allow function declarations in a lexically nested statement on a newly created app

https://github.com/facebook/react-native/issues/11389
