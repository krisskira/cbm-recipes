import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {Colors} from '../../const/colors';
import {styles} from './styles';

const RecipesPage = ({}) => {
  const data = [
    {
      name: 'Hamburgesa',
      ingredients: ['Pan', 'Lechuga', 'Tomate'],
      image: 'https://10619-2.s.cdn12.com/r0/h215/Retro-Santana-burger.jpg',
      key: 'item1',
    },
    {
      name: 'Ensaladas',
      ingredients: ['Lechuga', 'Pollo', 'Tomate', 'Espinaca'],
      image: 'https://10619-2.s.cdn12.com/rests/small/h215/108_502126092.jpg',
      key: 'item2',
    },
    {
      name: 'Carne asada',
      ingredients: ['Carne de res', 'Yuca', 'Lechuga'],
      image: 'https://10619-2.s.cdn12.com/rests/small/h215/327_508967016.jpg',
      key: 'item3',
    },
  ];

  return (
    <>
      <SafeAreaView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.primary}
        />
      </SafeAreaView>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item, index, separators}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.cardImage} />
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardBody}>{item.ingredients.join(', ')}</Text>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default RecipesPage;
