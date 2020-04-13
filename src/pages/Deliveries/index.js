import React, { useLayoutEffect, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '../../store/modules/auth/actions';
import api, { host } from '../../services/api';
import Delivery from './Delivery';

import {
  Container,
  Header,
  Avatar,
  Info,
  Welcome,
  Name,
  LogoutButton,
  DeliveriesList,
  Title,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function Deliveries({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      screenOptions: {
        headerShown: false,
      },
      title: 'Entregas',
    });
  }, [navigation]);

  async function load() {
    const res = await api.get(`/deliverymen/${profile.id}/orders`, {
      params: { done },
    });
    setDeliveries(res.data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDone(false);
      load();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    load();
  }, [done]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleMoreDetail(item) {
    navigation.navigate('Order', {
      screen: 'OrderDetails',
      params: { order: item },
    });
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar.url.replace('http://localhost:3333', host)
              : `https://api.adorable.io/avatars/92/${profile.id}.png`,
          }}
        />
        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
        </Info>
        <LogoutButton onPress={() => handleLogout()}>
          <Icon name="exit-to-app" size={24} color="#E74040" />
        </LogoutButton>
      </Header>

      <DeliveriesList>
        <Header>
          <Title>Entregas</Title>
          <Actions>
            <Action onPress={() => setDone(false)}>
              <ActionLabel active={!done}>Pendentes</ActionLabel>
            </Action>
            <Action onPress={() => setDone(true)}>
              <ActionLabel active={done}>Entregues</ActionLabel>
            </Action>
          </Actions>
        </Header>
        <FlatList
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 320 }}
          renderItem={({ item }) => (
            <Delivery onMore={() => handleMoreDetail(item)} item={item} />
          )}
        />
      </DeliveriesList>
    </Container>
  );
}
