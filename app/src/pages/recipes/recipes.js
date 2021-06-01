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
import {gql, useQuery} from '@apollo/client';

const RecipesPage = ({}) => {

  const CHAPTERS_QUERY = gql`
    query Recipes {
      recipes {
        name
        image
        ingredients
      }
    }
  `;
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

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
        data={data.recipes.map((recipe, index) => ({...recipe, key: index}))}
        renderItem={({item, index, separators}) => (
          <View key={item.key} style={styles.card}>
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
