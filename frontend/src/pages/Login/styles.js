import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '~/components/Form/Input';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    span {
      animation: 300ms ease-out 0s 1 slideInFromLeft;
      color: ${colors.danger};
      display: block;
      padding: 7px 5px;
      border-radius: 15px;
      font-size: 12px;
      word-wrap: break-word;
    }
  }
`;

export const InputWrapper = styled(Input).attrs(({ type }) => ({
  type: type || 'text',
}))`
  width: 100%;
  height: 60px;
  color: ${colors.darkGrey};
  border: solid 1px ${colors.lightGrey};
  border-radius: 8px;
  padding: 0 24px;
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  background-color: ${colors.danger};
  border-radius: 8px;
  color: ${colors.white};
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  margin-top: 16px;
  text-align: center;
  width: 100%;
  transition: all 300ms ease;

  &:hover {
    filter: brightness(90%);
  }
`;

export const RegisterLink = styled(Link)`
  align-items: center;
  color: ${colors.darkGrey2};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  margin-top: 40px;
  text-decoration: none;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;
