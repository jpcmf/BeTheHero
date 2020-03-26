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
  InputGroup,
  Input,
  Button,
} from './styles';

export default function Register() {
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
          <form>
            <Input placeholder="Nome da ONG" />
            <Input type="email" placeholder="E-mail" />
            <Input placeholder="Whatsapp" />
            <InputGroup>
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </InputGroup>
            <Button>Cadastrar</Button>
          </form>
        </FormWrapper>
      </Content>
    </Container>
  );
}
