/**
 * @flow
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';

class Login extends Component {
  constructor(props){
    super(props);
  }

  login(){
    console.log('login to challengr');
  }

  render() {
    return (
      <View style={styles.container}>
       <Image style={styles.logo} source={require('image!hackages')}/>
       <TouchableHighlight style={styles.button} onPress={this.login}>
        <Text style={styles.buttonText}>Login Button</Text>
       </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 70,
  },
  button: {
    borderColor: '#F5FCCC',
    backgroundColor: '#A0CFEF',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default Login;
