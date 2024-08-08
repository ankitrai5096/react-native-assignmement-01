import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import UserCard from '../components/UserCard';
import NavigationButtons from '../components/NavigationButtons';
import { Colors } from './../constants/Colors';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);


  //fetching user data here

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/users/random_user?size=80');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  //handling previous and next user details here

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDetails = () => {
    navigation.navigate('UserDetails', { user: users[currentIndex] });
  };

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (

    //showing user details and next&Previous buttons

    <View style={styles.container}>
      {users.length > 0 && <UserCard user={users[currentIndex]} />}
      <NavigationButtons onPrevious={handlePrevious} onNext={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:Colors.Primary,
    flexDirection:'column',
    justifyContent: 'space-around',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
