import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Shimmer from 'react-shimmer-effect';

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

import LoadingLine from '~/components/LoadingLine';

import history from '~/services/history';
import api from '~/services/api';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const [loading, setLoading] = useState(false);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    document.title = 'Be The Hero | Profile';
  });

  useEffect(() => {
    async function loadIncidents() {
      try {
        setLoading(true);

        const response = await api.get('/profile', {
          headers: {
            Authorization: ongId,
          },
        });

        const { data } = response;

        setIncidents(data);
      } catch (error) {
        toast.error('Houve um erro ao tentar carregar casos.');
      }

      setLoading(false);
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      toast.success('Caso deletado com sucesso.');

      setIncidents(
        incidents.filter(currentIncident => currentIncident.id !== id)
      );
    } catch (error) {
      toast.error('Erro ao deletar caso. Tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <div>
          <Logo />
          <span>
            Bem-vinda, <span>{ongName}</span>
          </span>
        </div>

        <div>
          <RegisterLink to="/incidents/new">Cadastrar novo caso</RegisterLink>

          <LogoutButton onClick={handleLogout}>
            <FiPower size={18} color={colors.danger} />
          </LogoutButton>
        </div>
      </Header>
      <Content>
        <h1>Casos cadastrados</h1>
        <ul>
          {loading ? (
            <>
              <li>
                <Shimmer>
                  <LoadingLine />
                </Shimmer>
              </li>
              <li>
                <Shimmer>
                  <LoadingLine />
                </Shimmer>
              </li>
            </>
          ) : (
            incidents.map(item => (
              <li key={item.id}>
                <strong>CASO:</strong>
                <p>{item.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{item.description}</p>

                <strong>VALOR:</strong>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.value)}
                </p>

                <RemoveButton onClick={() => handleDelete(item.id)}>
                  <FiTrash2 size={18} color={colors.grey3} />
                </RemoveButton>
              </li>
            ))
          )}
          {!incidents.length && !loading && <li>Nenhum caso cadastrado!</li>}
        </ul>
      </Content>
    </Container>
  );
}
