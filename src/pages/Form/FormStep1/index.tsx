import { useHistory } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import InputQuestion from 'components/InputQuestion';
import { FormHandles } from '@unform/core';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import * as S from './styles';

const FormStep1: React.FC = () => {
  const history = useHistory();

  const [nameValue, setNameValue] = useState('');
  const formRef = useRef<FormHandles>(null);
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  const handleNextStep = useCallback(() => {
    if (nameValue !== '') {
      history.push('/step2');
    } else {
      // eslint-disable-next-line no-alert
      alert('Preencha seu nome.');
    }
  }, [history, nameValue]);

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.value;
      dispatch({
        type: FormActions.setName,
        payload: name,
      });
    },
    [dispatch],
  );

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const name = state.nameValue.trim();

    if (name !== '') {
      history.push('/step2');
    } else {
      // eslint-disable-next-line no-alert
      alert('Preencha seu .');
    }
  };

  return (
    <Theme>
      <S.Container>
        <S.StepTitle>Passo 1/3</S.StepTitle>
        <S.StepHeading>Vamos começar com o seu nome:</S.StepHeading>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <S.Divider />

        {/* <Form ref={formRef} onSubmit={handleSubmit}>
          Seu nome completo
          <InputQuestion
            name="name"
            placeholder="Nome"
            value={nameValue}
            onChange={handleNameChange}
          />
        </Form> */}

        <input type="text" value={nameValue} onChange={handleNameChange} />

        <S.NextButton onClick={handleNextStep}>Próximo</S.NextButton>
      </S.Container>
    </Theme>
  );
};

export default FormStep1;
