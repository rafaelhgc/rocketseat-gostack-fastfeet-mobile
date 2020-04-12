import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import {
  Container,
  Header,
  Title,
  Status,
  StatusBar,
  StatusItem,
  StatusDot,
  StatusDescription,
  Details,
  DetailsItem,
  Label,
  Info,
  Action,
  ActionLabel,
} from './styles';

export default function Delivery({ onMore, item }) {
  const dateFormat = useMemo(() => {
    return format(parseISO(item.createdAt), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [item.createdAt]);

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <Title>{item.product}</Title>
      </Header>
      <Status>
        <StatusBar />
        <StatusItem>
          <StatusDot done />
          <StatusDescription>Aguardando Retirada</StatusDescription>
        </StatusItem>
        <StatusItem>
          <StatusDot done={item.start_date} />
          <StatusDescription>Retirada</StatusDescription>
        </StatusItem>
        <StatusItem>
          <StatusDot done={item.end_date} />
          <StatusDescription>Entregue</StatusDescription>
        </StatusItem>
      </Status>
      <Details>
        <DetailsItem>
          <Label>Data</Label>
          <Info>{dateFormat}</Info>
        </DetailsItem>

        <DetailsItem>
          <Label>Cidade</Label>
          <Info>{item.recipient.city}</Info>
        </DetailsItem>

        <DetailsItem>
          <Action onPress={onMore}>
            <ActionLabel>Ver detalhes</ActionLabel>
          </Action>
        </DetailsItem>
      </Details>
    </Container>
  );
}
