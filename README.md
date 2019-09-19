# Instagram Clone

## INTRODUCTION

Instagram clone built using React Native

## APPROACH

In all projects up until now I have developed the logic ahead of implementing styling, however, reading through a number of articles on creating a React Native app suggest it can be good practice to implement styling ahead of working through the features; this is the approach I have decided to take.

To start I've taken a screen shot from the instagram app and am working through the various views.

**SETTING UP THE ENVIRONMENT** :boom:

Setting up the React Native development environment

1. Set up with React Native at [link](https://facebook.github.io/react-native/docs/getting-started).

2. Install Android Studio at [link](https://developer.android.com/studio/install).

3. Setting up the environment variable 'ANDROID_HOME' to it's root 'c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk'.

4. Added the 'platform_tools' path to the environment variable 'PATH'. By default it is downloaded to 'c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools'.

**SETTING UP THE PROJECT** :wrench:

1. Opened remote storage with a `turbo360.co` account. Allows use of CDN for images which is significantly faster than pulling images off the web.

2. Installed the `yarn` package manager.

2. Installed the React Native CLI command line utility with `npm install -g react-native-cli`.

3. Initiated a new project `react-native init instaclone`.

4. Setup and open an android virtual device (AVD) via Android Studio. To avoid errors close Android Studio once you have launched the virtual device.

5. Enter the project and start running it with `react-native run-android`

6. Ran the `npm start`

**CODE FORMATTER** :clipboard:

1. Download Prettier to use in conjunction with ESLint (ESLint is downloaded by default with react-native). Download with: `npm i --save-dev prettier`.

2. Add a script to `package.json`to run Prettier on the project files. Amend the script accordingly to match the project source files.
```
"prettier": "prettier 'src/**/*.js'"
```

3. Add rules to the prettier script. A full breakdown of prettier rules can be found [here](https://prettier.io/docs/en/options.html). Here is an example of what to expect:
```
"prettier": {
  "jsxBracketSameLine": true,
  "semi": false,
  "singleQuote": true
}
```
4. Finally configure with ESLint by running `npm i --save-dev eslint-plugin-prettier eslint-config-prettier`

**IMAGES** :camera:

Using a Content Delivery Network (CDN) for images. Uploads content faster.

**NAVIGATOR** :arrows_clockwise:

1. Installed the dependencies with:

`npm install react-navigation`

The next step is to install a few libraries to be used in conjunction to react-navigation. Here is where the docs are a little ambiguous. They state you must install `react-native-screens`, however, it then states this is now incorporated with `react-navigation` which we already have installed. If screens is installed the program will crash.

2. Install the following additional libraries:

`npm install react-native-gesture-handler` and `npm install react-native-reanimated`