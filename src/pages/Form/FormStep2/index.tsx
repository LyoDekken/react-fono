import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { SelectOption } from '../../../components/SelectOption';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, [dispatch, history, state.name]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3');
    } else {
      alert('Preencha os dados.');
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button type="button" onClick={handleNextStep}>
          Próximo
        </button>
      </C.Container>
    </Theme>
  );
};

export default FormStep2;
