import React,{Component, AppRegistry} from 'react'
import {
  ,StyleSheet
  ,View
} from 'react-native'

import TextFit from 'react-native-textfit'

class Example extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TextFit
          height={200}
          width={150}
          style={{color: 'red'}}
          onPress={event => console.log(event)}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </TextFit>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  }
})
AppRegistry.registerComponent('Example', () => Example)