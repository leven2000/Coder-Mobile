import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';

export default function App() {

  const[task, setTask] = useState('');
  const[tasks, setTasks] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  const[selectedTask, setSelectedTask] = useState(null);

  const onHandleChangeText = (text) =>{
    setTask(text);
  }

  const addItem = () =>{
    setTasks([
      ... tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
  }

  const onHandleModal = ({id}) =>{
    setModalVisible(!modalVisible);
    selectedTask(tasks.find((item) => item.id == id))
  }

  const onHandelDeleteItem = () =>{
    setTasks(tasks.filter((item) => item.id != id));
    selectedTask(null);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => {
    <View>
      <Text>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleModal(item.id)}>
        <Text> Eliminar </Text>
      </TouchableOpacity>
    </View>
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
        placeholder='New Task'
        selectionColor='#4A306D'
        placeholderTextColor='#4A306D'
        onChangeText={onHandleChangeText}
        value={task}
        />
        <Button
        title='Add'
        onPress={addItem}
        />
      </View>
      <FlatList
        style={itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal animationType='slide' visible={modalVisible}>
        <View style={modalContainer}>
          <Text>Detalle</Text>
        </View>
        <View style={modalMessageContainer}>
          <Text>Confirmar Eliminacion</Text>
        </View>
        <View style={modalMessageContainer}>
          <Text>{selectedTask?.value}</Text>
        </View>
        <View style={buttonContainer}>
          <Button
            title='Eliminar'
            onPress={() => onHandelDeleteItem(selectedTask?.id)}
          />
          <Button
            title='Cancelar'
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#9F84BD',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 16,
    color: '#000000',
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 10,
  }
});
