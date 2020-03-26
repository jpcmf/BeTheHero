import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';

import { ReactComponent as Logo } from '~/assets/logo.svg';

import colors from '~/styles/colors';

import {
  Container,
  Content,
  RegisterWrapper,
  BackLink,
  FormWrapper,
  InputWrapper,
  TextareaWrapper,
  Button,
} from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function NewIncident() {
  const formRef = useRef(null);

  const ongId = localStorage.getItem('ongId');

  const [loading, setLoading] = useState(false); //eslint-disable-line

  useEffect(() => {
    document.title = 'Be The Hero | New Incident';
  });

  async function handleNewIncident(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O título é obrigatório.'),
        description: Yup.string().required('A descrição é obrigatória.'),
        value: Yup.string().required('O valor é obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // console.log(data);

      formRef.current.setErrors({});

      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      toast.success('Novo caso cadastrado com sucesso.');

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
    }
  }

  return (
    <Container>
      <Content>
        <RegisterWrapper>
          <Logo />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <BackLink to="/profile">
            <FiArrowLeft size={16} color={colors.danger} />
            Voltar para home
          </BackLink>
        </RegisterWrapper>
        <FormWrapper>
          <Form ref={formRef} onSubmit={handleNewIncident}>
            <InputWrapper autoFocus name="title" placeholder="Título do caso" />
            <TextareaWrapper name="description" placeholder="Descrição" />
            <InputWrapper name="value" placeholder="Valor em reais" />
            <Button>{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>
          </Form>
        </FormWrapper>
      </Content>
    </Container>
  );
}
