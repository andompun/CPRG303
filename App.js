import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { SafeAreaView } from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}
