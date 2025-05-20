import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../Contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    phone: yup.string().required('Telefone é obrigatório'),
    password: yup.string()
        .required('Senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 caracteres'),
    userType: yup.string().required('Tipo de usuário é obrigatório'),
});

export function Register() {
    const { signUp } = useAuth();
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await signUp(data);
            Alert.alert(
                'Sucesso',
                'Cadastro realizado com sucesso! Faça login para continuar.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.reset({
                                index: 0,
                                routes: [
                                    { 
                                        name: 'Auth',
                                        params: { 
                                            screen: 'Login',
                                            params: { registered: true }
                                        }
                                    }
                                ],
                            });
                        }
                    }
                ]
            );
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível fazer o cadastro. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Criar Conta</Text>
                    <Text style={styles.subtitle}>Preencha os dados para se cadastrar</Text>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Nome</Text>
                                <TextInput
                                    style={[
                                        styles.input,
                                        errors.name && styles.inputError
                                    ]}
                                    placeholder="Digite seu nome completo"
                                    placeholderTextColor="#666"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    editable={!isLoading}
                                />
                                {errors.name && (
                                    <Text style={styles.errorText}>{errors.name.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={[
                                        styles.input,
                                        errors.email && styles.inputError
                                    ]}
                                    placeholder="Digite seu email"
                                    placeholderTextColor="#666"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    editable={!isLoading}
                                />
                                {errors.email && (
                                    <Text style={styles.errorText}>{errors.email.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Telefone</Text>
                                <TextInput
                                    style={[
                                        styles.input,
                                        errors.phone && styles.inputError
                                    ]}
                                    placeholder="Digite seu telefone"
                                    placeholderTextColor="#666"
                                    keyboardType="phone-pad"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    editable={!isLoading}
                                />
                                {errors.phone && (
                                    <Text style={styles.errorText}>{errors.phone.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Senha</Text>
                                <TextInput
                                    style={[
                                        styles.input,
                                        errors.password && styles.inputError
                                    ]}
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#666"
                                    secureTextEntry
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    editable={!isLoading}
                                />
                                {errors.password && (
                                    <Text style={styles.errorText}>{errors.password.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="userType"
                        defaultValue="caregiver"
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.userTypeContainer}>
                                <Text style={styles.label}>Tipo de Usuário</Text>
                                <View style={styles.userTypeButtons}>
                                    <TouchableOpacity
                                        style={[
                                            styles.userTypeButton,
                                            value === 'caregiver' && styles.userTypeButtonActive
                                        ]}
                                        onPress={() => onChange('caregiver')}
                                        disabled={isLoading}
                                    >
                                        <Text style={[
                                            styles.userTypeButtonText,
                                            value === 'caregiver' && styles.userTypeButtonTextActive
                                        ]}>
                                            Cuidador
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                            styles.userTypeButton,
                                            value === 'patient' && styles.userTypeButtonActive
                                        ]}
                                        onPress={() => onChange('patient')}
                                        disabled={isLoading}
                                    >
                                        <Text style={[
                                            styles.userTypeButtonText,
                                            value === 'patient' && styles.userTypeButtonTextActive
                                        ]}>
                                            Paciente
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {errors.userType && (
                                    <Text style={styles.errorText}>{errors.userType.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <TouchableOpacity
                        style={[styles.button, isLoading && styles.buttonDisabled]}
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                    >
                        <Text style={styles.buttonText}>
                            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Login')}
                        disabled={isLoading}
                    >
                        <Text style={styles.loginButtonText}>
                            Já tem uma conta? Faça login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
} 