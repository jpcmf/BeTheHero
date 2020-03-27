import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

// import { Container, Header, HeaderText, TextBold } from './styles';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo.</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        style={styles.incidentList}
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              maximus nibh quis varius posuere. Ut euismod tincidunt auctor.
              Aliquam sit amet mauris eget mauris imperdiet pretium a at massa.
              Mauris rhoncus purus eu ante elementum vehicula. Vivamus quis
              malesuada tellus, in egestas sem. Donec sagittis ut odio ac
              posuere. Phasellus at faucibus velit, et pulvinar arcu. Vivamus
              quam orci, consectetur placerat efficitur vel, consequat non odio.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nam volutpat ante eu nibh interdum
              condimentum. Fusce venenatis magna nunc, eu tristique magna rutrum
              congue.
            </Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>120</Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
