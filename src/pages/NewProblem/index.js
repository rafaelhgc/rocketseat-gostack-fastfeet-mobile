import React, { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Content,
  Input,
  Field,
  SubmitButton,
} from './styles';

export default function NewProblem({ route, navigation }) {
  const { profile } = useSelector((state) => state.user);
  const { orderId } = route.params;
  const [problem, setProblem] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Informar Poblema',
      headerLeft: () => (
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={24}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function handleSubmit() {
    api
      .post(`deliverymen/${profile.id}/deliveries/${orderId}/problems`, {
        description: problem,
      })
      .then(() => navigation.goBack())
      .catch((err) => Alert.alert(err.response.data.error));
  }

  return (
    <Container>
      <Header />
      <Content>
        <Field>
          <Input
            multiline
            numberOfLines={10}
            placeholder="Inclua aqui o problema que ocorreu na entrega"
            styles={{ textAlignVertical: 'top' }}
            value={problem}
            onChangeText={(text) => setProblem(text)}
          />
        </Field>
        <SubmitButton onPress={() => handleSubmit()}>Enviar</SubmitButton>
      </Content>
    </Container>
  );
}
