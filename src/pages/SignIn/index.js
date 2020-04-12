import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [id, setId] = useState('');

  async function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo source={logo} />

      <Form>
        <FormInput
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />

        <SubmitButton
          title="Entrar no sistema"
          loading={loading}
          onPress={() => handleSubmit()}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
