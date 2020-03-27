import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={([styles.incidentProperty], { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Caso 1</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>120</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroContact}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
