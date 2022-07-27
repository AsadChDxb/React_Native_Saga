// In App.js in a new project

import React,{useEffect,useState}  from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {request_Api_Data} from './Actions';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
 

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  const getdata= async ()  =>{
    setLoading(true);

  await  dispatch(request_Api_Data());

  setLoading(false);
 }


 
  useEffect(()=>{
    getdata();
  },[dispatch]);

  const userData = useSelector((state) => state.data);

  const _data=""
  console.log('userData');
  console.log(userData);
  console.log('userData====');



  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={ getdata}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
         
        </TouchableOpacity>
      </View>
    );
  };
 
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        onPress={() => getItem(item)}>
        {item.cell}
      </Text>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
 
  const getItem = (item) => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View >
        { Loading ?
        <ActivityIndicator/>
        : null
      }

      
       
      <FlatList
        data={userData}
        renderItem={({item}) => <Text style={styles.item}>{item.cell}</Text>}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
 

export default HomeScreen;
