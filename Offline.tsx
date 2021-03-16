import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NetworkConsumer } from 'react-native-offline';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';

const Offline = () => {
  return (
    <View>
        <NetworkConsumer>
            {({ isConnected }) =>
                isConnected ? (
                <Text>Vous êtes en ligne !</Text>
                ) : (
                <Text>Offline, Reconnecting... <ActivityIndicator size="small" /></Text>
                )
            }
        </NetworkConsumer>      
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
  },
});
