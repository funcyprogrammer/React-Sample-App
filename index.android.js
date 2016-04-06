/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

let english_german = require('./english_german.json');

class qwe extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    };
  }

  showMeaning = () => {
    let meaning = this.state.input in english_german ?
                    english_german[this.state.input] :
                    "Not Found";

    this.setState({ output: meaning });
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text>
          Type something in English:
        </Text>

        <TextInput text={ this.state.input }
          onChange={(e) => this.setState({ input: e })}
        />

        <Text style={ styles.germanLabel} >
          Its German equivalent is:
        </Text>

        <Text style={ styles.germanWord } >
          { this.state.input }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    padding: 16
  },
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  }
});

AppRegistry.registerComponent('qwe', () => qwe);
