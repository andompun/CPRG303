import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

    return (
        <SafeAreaView>
            <ToDoList tasks={tasks}/>
            <ToDoForm />
        </SafeAreaView>
    );
}
