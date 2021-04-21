import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const CustomInput = ({ placeholder, password }) => {
  return (
    <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={password}/>
  );
}

const CustomButton = ({label})=>
{
    return(
        <Button style={styles.login}><Text style={styles.title}>{label}</Text></Button>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.cardTitle}>
        <Text style={styles.title}>Welcome to STARPORT</Text>
      </Card>
      <Card style={styles.card}>
        <CustomInput placeholder="Mail" password={false}/>
        <CustomInput placeholder="Password" password={true}/>
        <CustomButton label="LOGIN" />
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.condition}>
                Read conditions and Tearms
            </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
  card: {
    padding: 15,
    width: 230,
    height : 300
  },
  cardTitle: {
    padding: 15,
    backgroundColor: 'purple',
    width: 230,
    alignItems: 'center',
    height : 100
  },
  title: {
    color : 'white',
    fontWeight : 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  input: {
    borderStyle : 'solid',
    borderColor: 'black',
    borderWidth: 1,
    textAlign:'center',
    borderRadius: 3,
    marginBottom : 10,
    width: 200,
  },
  condition: {
    color : 'lightgrey',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  touchable: {
    marginTop: 70,
  },
  login: {
    color: 'white',
    backgroundColor: 'purple',
    borderStyle : 'solid',
    borderColor: 'black',
    marginTop : 30,
    width: 200
  }
});
