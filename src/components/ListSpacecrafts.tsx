import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Card, Colors, Modal, Portal, Provider } from 'react-native-paper';
import { useQuery } from 'react-query';
import fetchAsync from './lib/fetch';
import AppLayout from './AppLayout';

const ModalCard = ({ item, children }) => {
  const [visible, setVisible] = React.useState(false);
  const changeModalState = () => {
    setVisible(!visible);
  };
  return (
    <TouchableOpacity onPress={changeModalState}>
      {children}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={changeModalState}
          
          contentContainerStyle={styles.modal}
        >
          <Text style={[styles.title,styles.titleModal]}>{item.name}</Text>
        </Modal>
      </Portal>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => {
  const dataTable = {
    tableHead: ['Crew Size', 'Cargo Capacity'],
    tableData: [item.crew, item.cargo_capacity],
  };

  return (
    <ModalCard item={item}>
      <Card style={styles.card}>
        <Card.Title title={item.name} />
        <Text style={styles.subtitle}>{item.model}</Text>
        <Table style={styles.table}>
          <Row data={dataTable.tableHead} style={styles.row} />
          <Row data={dataTable.tableData} style={styles.row} />
        </Table>
        <Text style={styles.subtitle}>Price : {item.cost_in_credits}</Text>
      </Card>
    </ModalCard>
  );
};

const ListSpacecrafts = () => {
<<<<<<< Updated upstream:ListSpacecrafts.tsx
  const { isLoading, isError, data, error } = useQuery('data', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );
  if (isLoading) {
    return <AppLayout title="Loading..."></AppLayout>;
  }
  if (isError) {
    return <AppLayout title="Error"></AppLayout>;
  }
  if (data === undefined) {
    return <AppLayout title="Data not found"></AppLayout>;
  }

=======
  
  const {isLoading, isError, data , error} = useQuery('data',() => fetchAsync);
  if(isLoading) {
    return(<Text>Loading...</Text>);
  }
  if(isError){
    return(<Text>"Erreur : "{error}</Text>);
  }
  return (
    <View>
      <FeedSpaceCraft data={JSON.stringify(data)} />
    </View> 
  )
  
};

const FeedSpaceCraft = (data) => {
  //console.log("Feed : "+data.results);
>>>>>>> Stashed changes:src/components/ListSpacecrafts.tsx
  return (
    <Provider>
      <AppLayout title="Starships">
        <FeedSpaceCraft data={data} />
      </AppLayout>
    </Provider>
  );
};

const FeedSpaceCraft = ({ data }) => {
  return <FlatList data={data.results} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.amber200,
    padding: 8,
    borderStyle: 'solid',
    borderColor: Colors.amber600,
    borderWidth: 4,
    marginBottom: 32,
  },
  table: {
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    marginLeft: 50,
  },
  modal: {
    backgroundColor: Colors.purple300,
    flex: 0.5,
  },
  titleModal: {
    marginTop: 0,
  }
});

export default ListSpacecrafts;
