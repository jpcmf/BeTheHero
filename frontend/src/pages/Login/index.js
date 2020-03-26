import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '~/assets/heroes.png';
import { ReactComponent as Logo } from '~/assets/logo.svg';

import colors from '~/styles/colors';

import { Container, FormWrapper, Input, Button, RegisterLink } from './styles';

export default function Login() {
  return (
    <Container>
      <FormWrapper>
        <Logo />
        <form>
          <h1>Faça seu login</h1>
          <Input placeholder="Sua ID" />
          <Button>Entrar</Button>
          <RegisterLink to="/register">
            <FiLogIn size={16} color={colors.danger} />
            Não tenho cadastro
          </RegisterLink>
        </form>
      </FormWrapper>
      <img src={heroesImg} alt="heroes" />
    </Container>
  );
}
