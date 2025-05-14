import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

export function AlertaListener() {
  const navigation = useNavigation();

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const dados = notification.request.content.data;

      navigation.navigate('AlarmeTela', {
        nome: dados.nome,
        tipo: dados.tipo,
        hora: dados.hora,
      });
    });

    return () => subscription.remove();
  }, []);

  return null;
}