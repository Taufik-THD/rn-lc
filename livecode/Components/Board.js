import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

class Board extends Component<Props> {

  constructor (props) {
    super (props)
    this.state = {
      boardDisplay: [['?','?','?'],
                    ['?','?','?'],
                    ['?','?','?']],
      touchrow: '',
      touchcol: '',
      random: ''
    }

    this.coordinate = this.coordinate.bind(this)
  }

  coordinate (row, col) {
    this.setState({ touchrow: String(row) })
    this.setState({ touchcol: String(col) })

    const tmp = []

    for (let i = 0; i < this.state.boardDisplay.length; i++) {
      if (i == row) {
        this.state.boardDisplay[i][col] = 'X'
        tmp.push(this.state.boardDisplay[i])
      } else {
        tmp.push(this.state.boardDisplay[i])
      }
    }

    const randomizeRow = Math.floor(Math.random() * 3)
    const randomizeCol = Math.floor(Math.random() * 3)

    for (let i = 0; i < tmp.length; i++) {
      for (let j = 0; j < tmp[i].length; j++) {
        if (tmp[i][j] == '?') {
          tmp[i][j] = 'O'
          return ''
        }
      }
    }

    this.setState({ random: randomizeRow })

    this.setState({ boardDisplay: tmp })

  }

  componentDidMount () {
    this.props.generateBoard
  }

  board () {
    return this.props.board
  }

  board_one () {
    return (
      this.state.boardDisplay[0].map((col, i) => {
        return (
            <TouchableOpacity onPress={() => this.coordinate(0, i)} style={styles.newButton} key={i}>
              <Text style={{color: 'white'}}>{col}</Text>
            </TouchableOpacity>
          )
        })
      )
  }

  board_two () {
    return (
      this.state.boardDisplay[1].map((col, i) => {
        return (
            <TouchableOpacity onPress={() => this.coordinate(1, i)} style={styles.newButton} key={i}>
              <Text style={{color: 'white'}}>{col}</Text>
            </TouchableOpacity>
          )
        })
      )
  }

  board_three () {
    return (
      this.state.boardDisplay[2].map((col, i) => {
        return (
            <TouchableOpacity onPress={() => this.coordinate(2, i)} style={styles.newButton} key={i}>
              <Text style={{color: 'white'}}>{col}</Text>
            </TouchableOpacity>
          )
        })
      )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.touchrow}</Text>
        <Text>{this.state.touchcol}</Text>
        <Text>{this.state.random}</Text>
        <View style={[styles.rowAlpha, styles.topOne]}>
          { this.board_one() }
        </View>
        <View style={[styles.rowAlpha, styles.topTwo]}>
          { this.board_two() }
        </View>
        <View style={[styles.rowAlpha, styles.topThree]}>
          { this.board_three() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 100,
  },
  welcome2: {
    fontSize: 18,
    textAlign: 'center',
    margin: 120,
  },
  liveGame: {
    fontSize: 20,
    textAlign: 'center',
  },
  footer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  startButton: {
    width: 130,
    height: 45,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  newButton: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 20
  },
  flexContainer: {
    height:200,
    width:500,
  },
  btnFlex: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    // backgroundColor: '#1f2041',
  },
  gamestatus: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    // top: 10
  },
  rowAlpha: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    // top: 10
  },
  topOne: {
    // top: 10
    bottom: 260
  },
  topTwo: {
    // top: 60
    bottom: 180
  },
  topThree: {
    // top: 110
    bottom: 100
  },
  topFour: {
    // top: 160
    bottom: 100
  },
  instructions: {
    color: '#225344',
    marginLeft: 24,
    marginRight: 24,
    fontSize: 12,
    lineHeight: 18
  },
  boardicon: {
    alignItems: 'center',
    marginTop: 50
  },
});

function mapStateToProps(state) {
  return {
    board: state.board
  }
}

function mapDispatchToProps(dispatch) {
  return {
    generateBoard: () => dispatch(generateBoard()),
    onTouch: (val) => dispatch(touch(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
