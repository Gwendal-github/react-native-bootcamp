import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { NetworkProvider } from 'react-native-offline';

interface Props {
  title: string;
  children?: ReactElement;
}

const AppLayout = (props: Props) => {
  return (
    <NetworkProvider>
        <View style={styles.container}>
            <Headline>{props.title}</Headline>
            {props.children}
        </View>
    </NetworkProvider>
    
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
  },
});