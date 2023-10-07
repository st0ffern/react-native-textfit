# react-native-textfit [![version](https://img.shields.io/npm/v/react-native-textfit.svg)](https://www.npmjs.org/package/react-native-textfit)
Auto size text to fit inside a box 

***This repo will be discontinued as `adjustsFontSizeToFit` was added to react-native Text elements https://github.com/facebook/react-native/pull/4026 .. Finally! :wink:***


## Props

- `children`: ***required*** Text input that should be resized
- `width`: Maximum width of the box. (Default: auto)
- `height`: Maximum height of the box. (Default: auto)
- [Other React props](https://facebook.github.io/react-native/docs/text.html#props) 

## Installation

```js
npm i -S react-native-textfit
```

## Usage Exampless

```js
import TextFit from "react-native-textfit"
```

```html
<TextFit
  height={200}
  width={150}
  style={{color: 'red'}}
  onPress={event => console.log(event)}>
  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
</TextFit>
```

## Try example

```
- git clone https://github.com/stoffern/react-native-textfit.git
- cd react-native-textfit/example
- npm start
```
