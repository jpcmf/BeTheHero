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
  InputGroup,
  InputWrapper,
  Button,
} from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function Register() {
  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => {
    document.title = 'Be The Hero | Register';
  });

  async function handleRegister(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório.'),
        email: Yup.string()
          .email('Insira um e-mail válido.')
          .required('O e-mail é obrigatório.'),
        whatsapp: Yup.string().required('O Whatsapp é obrigatório.'),
        city: Yup.string().required('A cidade é obrigatória.'),
        uf: Yup.string().required('A UF é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // console.log(data);

      formRef.current.setErrors({});

      await api.post('/ongs', data);

      toast.success('Seu ID de acesso foi criado com sucesso.');

      history.push('/');
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
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <BackLink to="/">
            <FiArrowLeft size={16} color={colors.danger} />
            Já possuo cadastro
          </BackLink>
        </RegisterWrapper>
        <FormWrapper>
          <Form ref={formRef} onSubmit={handleRegister}>
            <InputWrapper
              autoFocus
              name="name"
              placeholder="Nome da ONG"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <InputWrapper
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputWrapper
              name="whatsapp"
              placeholder="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <InputGroup>
              <InputWrapper
                name="city"
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <InputWrapper
                name="uf"
                placeholder="UF"
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
            </InputGroup>
            <Button>Cadastrar</Button>
          </Form>
        </FormWrapper>
      </Content>
    </Container>
  );
}
