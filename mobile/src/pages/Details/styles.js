import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    fontSize: 15,
    color: '#737380',
    marginTop: 8
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  heroTitle: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30
  },

  heroContact: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  actionButton: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
