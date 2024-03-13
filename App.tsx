import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), title: task, completed: false },
      ]);
      setTask("");
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Agregar tarea"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
            <View
              style={[
                styles.task,
                { backgroundColor: item.completed ? "#c0ffc0" : "#fff" },
              ]}
            >
              <Text
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => deleteTask(item.id)}
                style={styles.deleteButton}
              >
                <Text style={{ color: "#fff" }}>X</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footer}>
        <Text style={{ color: "white", fontSize: 20 }}>Lautaro Chavero</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
