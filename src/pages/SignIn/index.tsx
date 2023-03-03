import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import axios from 'axios';

import ReactFacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';

import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  LoginButtons,
} from './styles';

// import logoImg from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um error ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  const handleGoogleLogin = useCallback(
    async response => {
      try {
        const { tokenId } = response;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data } = await axios.post('/api/auth/google', {
          token: tokenId,
        });

        // Se o login for bem sucedido, redirecione o usuário para a página principal
        history.push('/home');
      } catch (err) {
        // Trate os erros de autenticação aqui
        throw new Error('Trate os erros de autenticação aqui');
      }
    },
    [history],
  );

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
  const handleFacebookLogin = async (response: any): Promise<void> => {
    try {
      const { accessToken } = response;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axios.post('/api/auth/facebook', {
        token: accessToken,
      });

      history.push('/home');
    } catch (err) {
      // Trate os erros de autenticação aqui
      throw new Error('Trate os erros de autenticação aqui');
    }
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit" loading={false}>
              Entrar
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <LoginButtons>
            <ReactFacebookLogin
              appId="SEU_APP_ID"
              fields="name,email,picture"
              callback={handleFacebookLogin}
              cssClass="facebook-button"
              textButton="Entrar com Facebook"
            />

            <GoogleLogin
              clientId="SEU_ID_DO_CLIENTE"
              buttonText="Entrar com Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
              cookiePolicy="single_host_origin"
            />
          </LoginButtons>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
