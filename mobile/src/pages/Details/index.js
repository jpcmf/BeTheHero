import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Details() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Caso 1" com o valor de R$ 120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=5541987850505&&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Caso 1',
      recipients: ['jpfricks@gmail.com'],
      body: message
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.incident}>
          <Text style={([styles.incidentProperty], { marginTop: 0 })}>
            ONG:
          </Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus nibh quis varius posuere. Ut euismod tincidunt auctor.
            Aliquam sit amet mauris eget mauris imperdiet pretium a at massa.
            Mauris rhoncus purus eu ante elementum vehicula. Vivamus quis
            malesuada tellus, in egestas sem. Donec sagittis ut odio ac posuere.
            Phasellus at faucibus velit, et pulvinar arcu. Vivamus quam orci,
            consectetur placerat efficitur vel, consequat non odio. Vestibulum
          </Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>120</Text>
        </View>
        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroContact}>Entre em contato:</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={sendWhatsApp}
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sendMail} style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
