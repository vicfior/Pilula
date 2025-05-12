import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../pages/Home";
import AddRemedio from "../pages/AddRemedio";
import ListaRemedio from "../pages/ListaRemedio";
import Menu from "../pages/Menu";
import ListaHorarios from "../pages/ListaHorarios";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="AddRemedio" component={AddRemedio} options={{headerShown: false}} />
                <Stack.Screen name="ListaRemedio" component={ListaRemedio} options={{headerShown: false}} />
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="ListaHorarios" component={ListaHorarios} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;