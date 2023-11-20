import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen ({ navigation }) {
    return (
        <MainLayout>
            <View>
                <Text>Developed by Dominique Punzalan</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}
