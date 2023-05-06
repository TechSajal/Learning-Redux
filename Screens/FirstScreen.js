import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../Redux/Actions';
const data = [
  {
    id: '1',
    name: 'shoes 1',
    price: '1000RS',
  },
  {
    id: '2',
    name: 'shoes 2',
    price: '2000RS',
  },
  {
    id: '3',
    name: 'shoes 3',
    price: '3000RS',
  },
  {
    id: '4',
    name: 'shoes 4',
    price: '4000RS',
  },
  {
    id: '5',
    name: 'shoes 5',
    price: '5000RS',
  },
];

const FirstScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const itemslist = useSelector(state => state);

  const addItem = item => {
    dispatch(addItemToCart(item));
  };

  let array = [];
  array = itemslist;

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
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={styles.maintext}>{item.name}</Text>
              <Text style={styles.maintext}>{item.price}</Text>
              <Button
                title="Add to Cart"
                onPress={
                  () => addItem(item)
                  // dispatch(addItemToCart(item))
                }
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
export default FirstScreen;
