import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { FiLogIn } from 'react-icons/fi';

import heroesImg from '~/assets/heroes.png';
import { ReactComponent as Logo } from '~/assets/logo.svg';

import colors from '~/styles/colors';

import {
  Container,
  FormWrapper,
  InputWrapper,
  Button,
  RegisterLink,
} from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function Login() {
  const formRef = useRef(null);

  const [id, setId] = useState('');

  useEffect(() => {
    document.title = 'Be The Hero | Login';
  });

  async function handleSession(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        id: Yup.string().required('A sua ID é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // console.log(data);

      formRef.current.setErrors({});

      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      toast.success('Bem vindo :)');

      reset();

      history.push('/profile');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // console.log(err);

        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }

      if (id) {
        toast.error('Falha no login :( Verifique sua ID.');
      }
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Logo />
        <Form ref={formRef} onSubmit={handleSession}>
          <h1>Faça seu login</h1>
          <InputWrapper
            autoFocus
            name="id"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button>Entrar</Button>
          <RegisterLink to="/register">
            <FiLogIn size={16} color={colors.danger} />
            Não tenho cadastro
          </RegisterLink>
        </Form>
      </FormWrapper>
      <img src={heroesImg} alt="heroes" />
    </Container>
  );
}
