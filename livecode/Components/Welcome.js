import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button'
import { connect } from 'react-redux';
import { generateBoard } from '../Store/action';


class Welcome extends Component<Props> {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>TICTACTOE</Text>
          <TouchableOpacity style={ styles.startButton }>
            <Text
              onPress = { () => {this.props.navigation.navigate('Board')} }
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
            >Start</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  startButton: {
    width: 100,
    height: 45,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
});

function mapStateToProps(state) {
  return {
    data: state.board
  }
}

function mapDispatchToProps(dispatch) {
  return {
    generateBoard: () => dispatch(generateBoard())
  }
}

export default connect(mapStateToProps, null)(Welcome)
