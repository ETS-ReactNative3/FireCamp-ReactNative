import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Dashboard() {
  return <View />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Atividades',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add" size={20} color={tintColor} />
  ),
};
