import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 32px auto;
  max-width: 1180px;
  padding: 0 30px;
  width: 100%;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;

  span {
    font-size: 20px;
    margin-left: 24px;

    > span {
      font-weight: 500;
      margin: 0;
    }
  }

  svg {
    height: 64px;
  }
`;

export const RegisterLink = styled(Link)`
  background-color: ${colors.danger};
  border-radius: 8px;
  color: ${colors.white};
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  text-align: center;
  width: 260px;
  transition: all 300ms ease;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:hover {
    filter: brightness(90%);
  }
`;

export const LogoutButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: solid 1px ${colors.lightGrey};
  border-radius: 4px;
  color: ${colors.white};
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  margin-left: 16px;
  width: 60px;
  transition: all 300ms ease;
  align-items: center;
  justify-content: center;

  svg {
    height: 18px;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Content = styled.div`
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(2, 1fr);

    li {
      background-color: ${colors.white};
      padding: 24px;
      border-radius: 8px;
      position: relative;

      strong {
        display: block;
        margin-bottom: 16px;
        color: ${colors.darkGrey2};
      }

      p {
        color: ${colors.grey2};
        line-height: 20px;

        + strong {
          margin-top: 32px;
        }
      }
    }
  }
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: 0;
  position: absolute;
  right: 24px;
  top: 24px;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }
`;
