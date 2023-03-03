import React from 'react';
import { ReactNode } from 'react';
import * as C from './styles';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({
  children,
}: Props): React.ReactElement<HTMLDivElement> => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/step1"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
