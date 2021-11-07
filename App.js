import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: '#E0E5DF' },
  veri: {fontSize: 40, fontWeight: 'bold'},
  smalltext: { fontSize: 25,  fontWeight: 'bold'},
  button1: {
    width: 150,
    height: 50,
    marginRight: 5,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#1C8C06'
  },
  button2: {
    width: 150,
    height: 50,
    marginLeft: 5,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#F30606'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }
});

class Counter extends React.Component {
  state = { count: 0 };

  Increment = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  Decrement = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count - 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={{ height: 60 }}>
          <Text style={styles.veri}>Hello Veri</Text>
        </View>
        <View style={{ height: 60 }}>
          <Text style={styles.smalltext}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 60, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button1} onPress={this.Increment}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={this.Decrement}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const App = () => (
  <Counter />
);

export default App;

