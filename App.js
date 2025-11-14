import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import TodoItem from './components/TodoItem';


export default function App() {
  // 🔸 State tanımları
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // 🔸 Text input değiştikçe çalışacak fonksiyon
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  // 🔸 “Add” butonuna basılınca yeni task ekler
  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTaskText },
    ]);

    setEnteredTaskText(''); // input’u sıfırla
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Todo List</Text>

        {/* 🔸 Input Alanı */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add a new task..."
            onChangeText={taskInputHandler}
            value={enteredTaskText}
          />
          <Button title="Add" onPress={addTaskHandler} />
        </View>
        <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TodoItem text={item.text} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
          }
        />
      </View>


        {/* 🔸 Henüz listeyi eklemedik - sonraki partta */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    fontSize: 16,
  },
  listContainer: {
  flex: 5,
},
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
},

});
