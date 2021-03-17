import React from 'react';
import { StyleSheet, Text, StatusBar, FlatList, TouchableOpacity, View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Card,Modal } from 'react-native-paper';
import {useQuery } from 'react-query'
import fetchAsync from './lib/fetch'
import AppLayout from './AppLayout';


const ModalCard = ({item, children}) => {
  const [visible, setVisible] = React.useState(false);
  const changeModalState = () => {setVisible(!visible)};
  return (
    <TouchableOpacity onPress={changeModalState}>
      {children}
      <Modal visible={visible} onDismiss={changeModalState} contentContainerStyle={styles.modal}>
        <Text style={styles.title}>{item.name}</Text>
      </Modal>
    </TouchableOpacity>
  );
}

const renderItem=({item}) => {
    const dataTable = {
        tableHead: ['Crew Size','Cargo Capacity'],
        tableData: [item.crew,item.cargo_capacity]
    }

    return(
      <View>
        <ModalCard item={item}> 
        <Card style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.model}</Text>
        <Table style={styles.table}>
            <Row data={dataTable.tableHead} style={styles.row}/>
            <Row data={dataTable.tableData} style={styles.row}/>
        </Table>
        <Text style={styles.subtitle}>Price : {item.cost_in_credits}</Text>
        </Card>
        </ModalCard>
        
        
      </View>
    );
};

const ListSpacecrafts = () => {
  
  const {isLoading, isError,data, error} = useQuery('data',() => fetchAsync(`https://swapi.dev/api/starships/`));
  if(isLoading) {
    return(<AppLayout title="Loading..."></AppLayout>);
  };
  if(isError){
    return(<AppLayout title="Error"></AppLayout>);
  }
  if(data === undefined) {
    return(<AppLayout title="Data not found"></AppLayout>);
  }

  return (
    <AppLayout title="Starships" >
      <FeedSpaceCraft data={data} />
    </AppLayout> 
  )
  
};

const FeedSpaceCraft = ({data}) => {
  return (
    <FlatList data={data.results} renderItem={renderItem} /> 
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatlist: {
    marginBottom: 15
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  card:{
    backgroundColor: '#ecf0f1',
    padding: 6,
    borderStyle : 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom : 3,
    zIndex : 0
  },
  table: {
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    marginLeft : 50
  },
  modal: {
    backgroundColor: 'white', 
    padding: 20,
    zIndex : 1
  }
});

export default ListSpacecrafts;
