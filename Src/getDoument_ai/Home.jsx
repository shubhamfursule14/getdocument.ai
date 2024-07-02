import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import SwipeableViewStack from 'react-native-swipeable-view-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = () => {
  const [index1, setIndex1] = useState(0);
  const [Index, setIndex] = useState(0);
  const categories = [
    {
      Image: require('../assets/Images/GetDoc/Card1.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card1.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card2.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card3.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card4.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card5.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card6.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card7.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card8.png'),
    },
    {
      Image: require('../assets/Images/GetDoc/Card9.png'),
    },
  ];

  const renderViewItem = element => (
    <View style={styles.card}>
      <Image source={element.Image} style={styles.image} />
    </View>
  );

  const onCardSwipe = swipedIndex => {
    setIndex1(swipedIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Head}>
        <View>
          <Image
            source={require('../assets/Images/GetDoc/Circle.png')}
            style={{width: 65, height: 65}}
          />
        </View>
        <View style={styles.Button}>
          <Icon name="lightbulb-outline" size={25} color="#FAB60F" style={{alignSelf:'center'}} />
          <Text style={styles.Tips}>Tips</Text>
        </View>
      </View>
      <View style={{width: '90%', alignSelf: 'center', marginTop: '3%'}}>
        <Text style={styles.Text}>All your credit cards</Text>
        <Text style={[styles.Text, {fontFamily: 'Helvetica', fontSize: 21}]}>
          Find all your credit cards here
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#252525'}}>
        <View style={[styles.TopTab]}>
          <TouchableOpacity
            onPress={() => {
              setIndex(0);
            }}>
            <Ionicons name="finger-print-sharp" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(1);
            }}>
            <Icon name="airplane-takeoff" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(2);
            }}>
            <Ionicons name="water-outline" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(2);
            }}>
            <Image
              source={require('../assets/Images/GetDoc/Vector2.png')}
              style={{width: 23, height: 28}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(2);
            }}>
            <Image
              source={require('../assets/Images/GetDoc/Vector1.png')}
              style={{width: 32, height: 28}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(2);
            }}>
            <Image
              source={require('../assets/Images/GetDoc/Vector.png')}
              style={{width: 29, height: 28}}
            />
          </TouchableOpacity>
        </View>
        <SwipeableViewStack
          onSwipe={onCardSwipe}
          initialSelectedIndex={2}
          data={categories}
          renderItem={renderViewItem}
          stackSpacing={40}
        />
        <TouchableOpacity style={styles.circle}>
          <Entypo name="plus" size={25} color="#868A99" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 325,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  Head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  circle: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight:'8%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    width: '27%',
    backgroundColor: '#252525',
    borderColor: '#252525',
    // borderWidth: 2,
    // borderRadius: 8,
    justifyContent: 'space-between',
    margin: '3%',
    flexDirection: 'row',
    padding: 5,
    alignContent:'center'
  },
  Tips: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    alignSelf:'center',
    marginRight:3
  },
  Text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 37,
    fontFamily: 'Helvetica-Bold',
  },
  TopTab: {
    backgroundColor: '#252525',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBlockColor: '#000',
    borderBottomWidth: 0.2,
  },
});
