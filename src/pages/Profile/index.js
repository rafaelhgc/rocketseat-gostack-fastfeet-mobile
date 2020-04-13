import React, { useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { host } from '../../services/api';

import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Avatar,
  Header,
  Content,
  Label,
  Field,
  LogoutButton,
} from './styles';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);

  const createdAt = useMemo(() => {
    return format(parseISO(profile.createdAt), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [profile.createdAt]);

  useLayoutEffect(() => {
    navigation.setOptions({
      screenOptions: {
        headerShown: false,
      },
      title: 'Meu Perfil',
    });
  }, [navigation]);

  function handleLogout() {
    dispatch(signOut());
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
      </Header>
      <Content>
        <Label>Nome Completo</Label>
        <Field>{profile.name}</Field>

        <Label>Email</Label>
        <Field>{profile.email}</Field>

        <Label>Data de cadastro</Label>
        <Field>{createdAt}</Field>

        <LogoutButton onPress={() => handleLogout()}>Logout</LogoutButton>
      </Content>
    </Container>
  );
}
