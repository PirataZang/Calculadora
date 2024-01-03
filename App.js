import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botoes from './src/components/Botoes';
import Display from './src/components/Display';
import { Component } from 'react';

const initialValue = {
  displayValue: '0',
  clearMemory: false,
  setOperation: null,
  values: [0, 0],
  current: 0,
}


export default class App extends Component {
  state = { ...initialValue }

  AddNumber = n => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  }

  clearMemory = () => { this.setState({ ...initialValue }) }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    }
    else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${Value[0]} ${this.state.operation} ${values[1]}`);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Botoes label={'AC'} Triple Operador onClick={this.clearMemory} />
          <Botoes label={'/'} Operador onClick={() => this.setOperation('/')} />
          <Botoes label={'7'} onClick={() => this.AddNumber('7')} />
          <Botoes label={'8'} onClick={() => this.AddNumber('8')} />
          <Botoes label={'9'} onClick={() => this.AddNumber('9')} />
          <Botoes label={'*'} Operador onClick={() => this.setOperation('*')} />
          <Botoes label={'4'} onClick={() => this.AddNumber('4')} />
          <Botoes label={'5'} onClick={() => this.AddNumber('5')} />
          <Botoes label={'6'} onClick={() => this.AddNumber('6')} />
          <Botoes label={'-'} Operador onClick={() => this.setOperation('-')} />
          <Botoes label={'1'} onClick={() => this.AddNumber('1')} />
          <Botoes label={'2'} onClick={() => this.AddNumber('2')} />
          <Botoes label={'3'} onClick={() => this.AddNumber('3')} />
          <Botoes label={'+'} Operador onClick={() => this.setOperation('+')} />
          <Botoes label={'0'} Double onClick={() => this.AddNumber('0')} />
          <Botoes label={'.'} onClick={() => this.AddNumber('.')} />
          <Botoes label={'='} Operador onClick={() => this.setOperation('=')} />
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
