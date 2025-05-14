import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../pages/Home";
import AddRemedio from "../pages/AddRemedio";
import ListaRemedio from "../pages/ListaRemedio";
import Menu from "../pages/Menu";
import ListaHorarios from "../pages/ListaHorarios";
import Alarme from "../pages/Alarme";
import EditarAlarme from "../pages/Alarme/EditarAlarme";
import AlarmeTela from "../pages/Alarme/AlarmeTela";
import { AlertaListener } from "../Components/AlertaListener";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <AlertaListener />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="AddRemedio" component={AddRemedio} options={{headerShown: false}} />
                <Stack.Screen name="ListaRemedio" component={ListaRemedio} options={{headerShown: false}} />
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="ListaHorarios" component={ListaHorarios} options={{headerShown: false}} />
                <Stack.Screen name="Alarme" component={Alarme} options={{headerShown: false}} />
                <Stack.Screen name="EditarAlarme" component={EditarAlarme} options={{headerShown: false}} />
                <Stack.Screen name="AlarmeTela" component={AlarmeTela} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;