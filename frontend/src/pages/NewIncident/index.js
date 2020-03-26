import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { ReactComponent as Logo } from '~/assets/logo.svg';

import colors from '~/styles/colors';

import {
  Container,
  Content,
  RegisterWrapper,
  BackLink,
  FormWrapper,
  Input,
  Textarea,
  Button,
} from './styles';

export default function NewIncident() {
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
          <form>
            <Input placeholder="Título do caso" />
            <Textarea placeholder="Descrição" />
            <Input placeholder="Valor em reais" />
            <Button>Cadastrar</Button>
          </form>
        </FormWrapper>
      </Content>
    </Container>
  );
}
