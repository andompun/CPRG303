import React, {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

export default function HomeScreen ({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);
    
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    
    return (
        <MainLayout>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
        </MainLayout>);
    }

