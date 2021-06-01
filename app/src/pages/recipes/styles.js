import {StyleSheet} from 'react-native';
import {Colors} from '../../const/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 16,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 4,
    height: 64,
    shadowColor: Colors.borderDefault,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: Colors.accent
  },
  cardImage: {
    display: 'flex',
    width: 64,
    height: '100%',
  },
  cardTextContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardBody: {
    color: Colors.borderDefault,
    fontStyle: 'italic',
  },
});
