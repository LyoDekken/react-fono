/* eslint-disable jsx-a11y/label-has-associated-control */
import { useHistory, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import React from 'react';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';

const FormStep3: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, [dispatch, history, state.name]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      // eslint-disable-next-line no-console
      console.log(state);
    } else {
      // eslint-disable-next-line no-alert
      alert('Preencha os dados');
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button type="button" onClick={handleNextStep}>
          Finalizar Cadastro
        </button>
      </C.Container>
    </Theme>
  );
};

export default FormStep3;
