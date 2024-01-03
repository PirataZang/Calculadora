import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botoes from './src/components/Botoes';
import Display from './src/components/Display';
import { Component } from 'react';


export default class App extends Component {

  state = {
    displayValue: '0',
  }

  AddNumber = n => { this.setState({ displayValue: n }) }

  clearMemory = () => { this.setState({ displayValue: '0' }) }

  setOperation = operation => { }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Botoes label={'AC'} Triple Operador onClick={this.clearMemory} />
          <Botoes label={'/'} Operador  onClick={() => this.setOperation('/')}/>
          <Botoes label={'7'} onClick={() => this.AddNumber('7')}/>
          <Botoes label={'8'} onClick={() => this.AddNumber('8')}/>
          <Botoes label={'9'} onClick={() => this.AddNumber('9')}/>
          <Botoes label={'*'} Operador onClick={() => this.setOperation('*')}/>
          <Botoes label={'4'} onClick={() => this.AddNumber('4')}/>
          <Botoes label={'5'} onClick={() => this.AddNumber('5')}/>
          <Botoes label={'6'} onClick={() => this.AddNumber('6')}/>
          <Botoes label={'-'} Operador onClick={() => this.setOperation('-')}/>
          <Botoes label={'1'} onClick={() => this.AddNumber('1')}/>
          <Botoes label={'2'} onClick={() => this.AddNumber('2')}/>
          <Botoes label={'3'} onClick={() => this.AddNumber('3')}/>
          <Botoes label={'+'} Operador onClick={() => this.setOperation('+')}/>
          <Botoes label={'0'} Double onClick={() => this.AddNumber('0')}/>
          <Botoes label={'.'} onClick={() => this.AddNumber('.')}/>
          <Botoes label={'='} Operador onClick={() => this.setOperation('=')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
