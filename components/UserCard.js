import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from './../constants/Colors';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={{backgroundColor:Colors.white, borderRadius:75, width: 150,
    height: 150,marginBottom: 20,marginTop:70, borderColor:Colors.black}}>
      <Image  source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      <Text style={{fontSize:30,fontWeight: 'bold',color:Colors.white,marginBottom: 30,
    }} >Hey, {user.first_name}.</Text> 

      <View >
      <Text style={styles.text} >ID: {user.id}</Text>
      <Text style={styles.text}>UID: {user.uid}</Text>
      <Text style={styles.text}>Password: {user.password}</Text>
      <Text style={styles.text}>First Name: {user.first_name}</Text>
      <Text style={styles.text}>Last Name: {user.last_name}</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems:'center',
    backgroundColor: Colors.Primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  avatar: {
    
    borderColor:Colors.white,
    borderWidth:4,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  text:{
    color:Colors.black,
    marginTop:8,
    fontSize:16,
    fontWeight: 'bold',
    padding:15,
    backgroundColor:Colors.white,
    borderRadius:30,
    borderColor:Colors.black,
    borderWidth:2,
  },
  
});

export default UserCard;
