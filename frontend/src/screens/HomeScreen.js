import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/services');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchServices();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat Datang di Layanan Publik Banjarnegara</Text>
      <Button title="Lihat Layanan" onPress={() => navigation.navigate('Services')} />
    </View>
  );
}
