import React, { useLayoutEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import api from '../../services/api';

import {
  Container,
  Header,
  Card,
  CardHeader,
  CardInfo,
  CardFooter,
  Title,
  Label,
  Info,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function Order({ route, navigation }) {
  const { profile } = useSelector((state) => state.user);
  const { order } = route.params;

  const address = useMemo(() => {
    const r = order.recipient;
    return `${r.street_address}, ${r.number} ${
      r.complement ? r.complement : ''
    } - ${r.city}, ${r.state} - ${r.zip_code}`;
  }, [order]);

  const startDateFormat = useMemo(() => {
    return order.start_date
      ? format(parseISO(order.start_date), "dd'/'MM'/'yyyy", {
          locale: pt,
        })
      : '--/--/----';
  }, [order]);

  const endDateFormat = useMemo(() => {
    return order.end_date
      ? format(parseISO(order.end_date), "dd'/'MM'/'yyyy", {
          locale: pt,
        })
      : '--/--/----';
  }, [order]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detalhes da encomenda',
      headerLeft: () => (
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={24}
            color="#fff"
            onPress={() => navigation.navigate('Deliveries')}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function handleAddProblem() {
    navigation.navigate('Order', {
      screen: 'NewProblem',
      params: { orderId: order.id },
    });
  }
  function handleCheckProblems() {
    navigation.navigate('Order', {
      screen: 'Problems',
      params: { order },
    });
  }

  function handleDeliver() {
    navigation.navigate('Order', {
      screen: 'Confirm',
      params: { order },
    });
  }

  async function handleCollect() {
    api
      .post(`deliverymen/${profile.id}/orders/${order.id}/collect`)
      .then(() => navigation.navigate('Main'))
      .catch((err) => Alert.alert(err.response.data.error));
  }

  return (
    <Container>
      <Header />
      <Card>
        <CardHeader>
          <Icon name="local-shipping" size={20} color="#7D40E7" />
          <Title>Informações da Entrega</Title>
        </CardHeader>
        <CardInfo>
          <Label>Destinatário</Label>
          <Info>{order.recipient.name}</Info>
        </CardInfo>
        <CardInfo>
          <Label>Endereço da entrega</Label>
          <Info>{address}</Info>
        </CardInfo>
        <CardInfo>
          <Label>Produto</Label>
          <Info>{order.product}</Info>
        </CardInfo>
      </Card>
      <Card>
        <CardHeader>
          <Icon name="event" size={20} color="#7D40E7" />
          <Title>Situação da Entrega</Title>
        </CardHeader>
        <CardInfo>
          <Label>Satus</Label>
          <Info>{order.status}</Info>
        </CardInfo>
        <CardFooter>
          <CardInfo>
            <Label>Data de Retirada</Label>
            <Info>{startDateFormat}</Info>
          </CardInfo>
          <CardInfo>
            <Label>Data de Entrega</Label>
            <Info>{endDateFormat}</Info>
          </CardInfo>
        </CardFooter>
      </Card>

      <Actions>
        <Action onPress={() => handleAddProblem()}>
          <Icon name="highlight-off" size={20} color="#e74c3c" />
          <ActionLabel>Informar Problema</ActionLabel>
        </Action>
        <Action onPress={() => handleCheckProblems()}>
          <Icon name="error-outline" size={20} color="#f1c40f" />
          <ActionLabel>Visualizar Problemas</ActionLabel>
        </Action>

        {order.start_date ? (
          <Action onPress={() => handleDeliver()}>
            <Icon name="check-circle" size={20} color="#7D40E7" />
            <ActionLabel>Confirmar Entrega</ActionLabel>
          </Action>
        ) : (
          <Action onPress={() => handleCollect()}>
            <Icon name="local-shipping" size={20} color="#7D40E7" />
            <ActionLabel>Coletar Entrega</ActionLabel>
          </Action>
        )}
      </Actions>
    </Container>
  );
}
