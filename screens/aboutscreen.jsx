import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen ({ navigation }) {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.text}>Developed by Dominique Punzalan</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}