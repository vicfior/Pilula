import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    ScrollView,
    Alert,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ArrowLeft } from 'phosphor-react-native';
import { styles } from './styles';

export default function User() {
    const { user, signOut, updateUser } = useAuth();
    const navigation = useNavigation();
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        email: user?.email || '',
        userType: user?.userType || 'caregiver'
    });

    const handlePatientModeToggle = () => {
        Alert.alert(
            "Em Desenvolvimento",
            "Esta funcionalidade estará disponível em breve!",
            [{ text: "OK" }]
        );
    };

    const handleSignOut = () => {
        Alert.alert(
            "Sair",
            "Tem certeza que deseja sair?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Sair",
                    onPress: async () => {
                        try {
                            await signOut();
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Home' }],
                            });
                        } catch (error) {
                            console.error(error);
                            Alert.alert("Erro", "Não foi possível sair. Tente novamente.");
                        }
                    },
                    style: "destructive"
                }
            ]
        );
    };

    const handleSaveEdit = async () => {
        try {
            await updateUser(editedUser);
            setIsEditing(false);
            Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível atualizar as informações. Tente novamente.");
        }
    };

    const userInfo = [
        { 
            label: 'Nome', 
            value: isEditing ? (
                <TextInput
                    style={styles.input}
                    value={editedUser.name}
                    onChangeText={(text) => setEditedUser(prev => ({ ...prev, name: text }))}
                    placeholder="Digite seu nome"
                />
            ) : user?.name
        },
        { 
            label: 'Email', 
            value: isEditing ? (
                <TextInput
                    style={styles.input}
                    value={editedUser.email}
                    onChangeText={(text) => setEditedUser(prev => ({ ...prev, email: text }))}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            ) : user?.email
        },
        { 
            label: 'Telefone', 
            value: isEditing ? (
                <TextInput
                    style={styles.input}
                    value={editedUser.phone}
                    onChangeText={(text) => setEditedUser(prev => ({ ...prev, phone: text }))}
                    placeholder="Digite seu telefone"
                    keyboardType="phone-pad"
                />
            ) : user?.phone
        },
        { 
            label: 'Tipo de Usuário', 
            value: isEditing ? (
                <View style={styles.userTypeContainer}>
                    <View style={styles.userTypeButtons}>
                        <TouchableOpacity
                            style={[
                                styles.userTypeButton,
                                editedUser.userType === 'caregiver' && styles.userTypeButtonActive
                            ]}
                            onPress={() => setEditedUser(prev => ({ ...prev, userType: 'caregiver' }))}
                        >
                            <Text style={[
                                styles.userTypeButtonText,
                                editedUser.userType === 'caregiver' && styles.userTypeButtonTextActive
                            ]}>
                                Cuidador
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.userTypeButton,
                                editedUser.userType === 'responsible' && styles.userTypeButtonActive
                            ]}
                            onPress={() => setEditedUser(prev => ({ ...prev, userType: 'responsible' }))}
                        >
                            <Text style={[
                                styles.userTypeButtonText,
                                editedUser.userType === 'responsible' && styles.userTypeButtonTextActive
                            ]}>
                                Responsável
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (user?.userType === 'caregiver' ? 'Cuidador' : 'Responsável')
        },
    ];

    if (showUserInfo) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => {
                            setIsEditing(false);
                            setShowUserInfo(false);
                        }}
                    >
                        <Icon name="arrow-back" size={24} color="#FFA726" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Informações Pessoais</Text>
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.section}>
                        {userInfo.map((info, index) => (
                            <View key={index} style={styles.infoContainer}>
                                <Text style={styles.infoLabel}>{info.label}</Text>
                                {typeof info.value === 'string' ? (
                                    <Text style={styles.infoValue}>{info.value}</Text>
                                ) : info.value}
                            </View>
                        ))}
                    </View>

                    {isEditing ? (
                        <View style={styles.editButtonsContainer}>
                            <TouchableOpacity 
                                style={[styles.editButton, styles.cancelButton]}
                                onPress={() => {
                                    setIsEditing(false);
                                    setEditedUser({
                                        name: user?.name || '',
                                        phone: user?.phone || '',
                                        email: user?.email || '',
                                        userType: user?.userType || 'caregiver'
                                    });
                                }}
                            >
                                <Text style={styles.editButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.editButton}
                                onPress={handleSaveEdit}
                            >
                                <Text style={styles.editButtonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity 
                            style={styles.editButton}
                            onPress={() => setIsEditing(true)}
                        >
                            <Text style={styles.editButtonText}>Editar Informações</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.navigate('Menu')}
            >
                <ArrowLeft size={28} weight="bold" color="#4C4C4C" />
            </TouchableOpacity>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Icon name="person-circle-outline" size={80} color="#FFA726" />
                    <Text style={styles.userName}>{user?.name}</Text>
                    <Text style={styles.userEmail}>{user?.email}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Configurações</Text>
                    
                    <View style={styles.optionContainer}>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Modo Paciente</Text>
                            <Text style={styles.optionDescription}>
                                Ative para receber lembretes de medicamentos
                            </Text>
                        </View>
                        <Switch
                            value={false}
                            onValueChange={handlePatientModeToggle}
                            trackColor={{ false: "#767577", true: "#FFA726" }}
                            thumbColor="#f4f3f4"
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={() => setShowUserInfo(true)}
                    >
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Informações de Cadastro</Text>
                            <Text style={styles.optionDescription}>
                                Visualize e edite suas informações pessoais
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.optionButton, styles.signOutButton]}
                        onPress={handleSignOut}
                    >
                        <View style={styles.optionTextContainer}>
                            <Text style={[styles.optionTitle, styles.signOutText]}>Sair</Text>
                            <Text style={[styles.optionDescription, styles.signOutText]}>
                                Encerrar sua sessão
                            </Text>
                        </View>
                        <Icon name="log-out-outline" size={24} color="#FF5252" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
