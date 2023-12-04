import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';

export const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Tela de perfil</Text>
          <Text>dados do usuarios</Text>
          <Text>Foto, nome, endereço</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
