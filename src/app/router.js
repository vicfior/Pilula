import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { useAuth } from "../Contexts/AuthContext";

// Auth Screens
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

// App Screens
import Home from "../pages/Home";
import AddRemedio from "../pages/AddRemedio";
import ListaRemedio from "../pages/ListaRemedio";
import Menu from "../pages/Menu";
import ListaHorarios from "../pages/ListaHorarios";
import Alarme from "../pages/Alarme";
import EditarAlarme from "../pages/Alarme/EditarAlarme";
import AlarmeTela from "../pages/Alarme/AlarmeTela";
import User from "../pages/User";
import { AlertaListener } from "../Components/AlertaListener";
import Historico from "../pages/Historico";

const Stack = createStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="AddRemedio" component={AddRemedio} />
            <Stack.Screen name="ListaRemedio" component={ListaRemedio} />
            <Stack.Screen name="ListaHorarios" component={ListaHorarios} />
            <Stack.Screen name="Alarme" component={Alarme} />
            <Stack.Screen name="EditarAlarme" component={EditarAlarme} />
            <Stack.Screen name="AlarmeTela" component={AlarmeTela} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
    );
}

function Routes() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            <AlertaListener />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <Stack.Screen name="App" component={AppRoutes} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthRoutes} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;