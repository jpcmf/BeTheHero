import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-color: ${colors.grey};
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 96px;
  width: 100%;
`;

export const RegisterWrapper = styled.div`
  max-width: 380px;
  width: 100%;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    color: ${colors.grey2};
    line-height: 24px;
  }
`;

export const BackLink = styled(Link)`
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

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
`;

export const Input = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  border-radius: 8px;
  border: solid 1px ${colors.lightGrey};
  color: ${colors.darkGrey};
  height: 60px;
  margin-top: 8px;
  padding: 0 24px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  border-radius: 8px;
  border: solid 1px ${colors.lightGrey};
  color: ${colors.darkGrey};
  line-height: 20px;
  margin-top: 8px;
  min-height: 140px;
  padding: 16px 24px;
  resize: vertical;
  width: 100%;
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
