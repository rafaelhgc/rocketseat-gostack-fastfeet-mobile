import React, { useLayoutEffect, useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import api from '../../services/api';

import {
  Container,
  Header,
  NoProblem,
  NoProblemText,
  Order,
  Problem,
  ProblemDescription,
  ProblemDate,
} from './styles';

export default function NewProblem({ route, navigation }) {
  const { order } = route.params;
  const [problems, setProblems] = useState([]);
  const [noProblems, setNoProblems] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Visualizar Problemas',
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

  useEffect(() => {
    async function load() {
      const res = await api.get(`/deliveries/${order.id}/problems`);

      if (res.data.length > 0) {
        setProblems(
          res.data.map((i) => ({
            ...i,
            dateFormat: format(parseISO(order.start_date), "dd'/'MM'/'yyyy", {
              locale: pt,
            }),
          }))
        );
      } else {
        setNoProblems(true);
      }
    }

    load();
  }, []);

  return (
    <Container>
      <Header />
      <Order>{order.product}</Order>

      {noProblems ? (
        <NoProblem>
          <NoProblemText>Nenhuma ocorrência</NoProblemText>
        </NoProblem>
      ) : (
        <FlatList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Problem>
              <ProblemDescription>{item.description}</ProblemDescription>
              <ProblemDate>{item.dateFormat}</ProblemDate>
            </Problem>
          )}
        />
      )}
    </Container>
  );
}
