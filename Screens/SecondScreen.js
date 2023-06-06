import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveItemFromCart,ReguxSagaApi} from '../Redux/Actions';

const SecondScreen = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(RemoveItemFromCart(index));
  };
  let array = [];
  array = items;
  useEffect(()=>{
    dispatch(ReguxSagaApi()) 
  })
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.maintext}>Redux App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Second')}>
          <View style={styles.flex}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://img.icons8.com/ios/50/null/shopping-cart--v1.png',
              }}></Image>
            <Text style={styles.maintext}>{array.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={({item,index}) => {
          return (
            <View>
              <Text style={styles.maintext}>{item.name}</Text>
              <Text style={styles.maintext}>{item.price}</Text>
              <Button
                title="Remove From cart"
                // index = {item.id}
                onPress={() => removeItem(index)}     
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  trial: {
    backgroundColor: 'aqua',
  },
  flex: {
    width: 60,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'aqua',
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  maintext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 8,
  },
});
export default SecondScreen;
