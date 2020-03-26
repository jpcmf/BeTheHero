import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { ReactComponent as Logo } from '~/assets/logo.svg';

import colors from '~/styles/colors';

import {
  Container,
  Header,
  RegisterLink,
  LogoutButton,
  Content,
  RemoveButton,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <Logo />
        <span>Bem vinda, APAD</span>

        <RegisterLink to="/incidents/new">Cadastrar novo caso</RegisterLink>

        <LogoutButton>
          <FiPower size={18} color={colors.danger} />
        </LogoutButton>
      </Header>
      <Content>
        <h1>Casos cadastrados</h1>
        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <RemoveButton>
              <FiTrash2 size={18} color={colors.grey3} />
            </RemoveButton>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <RemoveButton>
              <FiTrash2 size={18} color={colors.grey3} />
            </RemoveButton>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>CASO:</strong>
            <p>Caso teste</p>

            <RemoveButton>
              <FiTrash2 size={18} color={colors.grey3} />
            </RemoveButton>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
