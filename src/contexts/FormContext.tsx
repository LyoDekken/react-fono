/* eslint-disable radix */
import React from 'react';
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  currentStep: number;
  nameValue: string;
  level: number;
  email: string;
  github: string;
};

type Action = {
  payload: any;
  type: FormActions;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

export enum FormActions {
  setCurrentStep = 'setCurrentStep',
  setName = 'setName',
  setLevel = 'setLevel',
  setEmail = 'setEmail',
  setGithub = 'setGithub',
}

const initialData: State = {
  currentStep: 1,
  nameValue: '',
  level: 0,
  email: '',
  github: '',
};

// Context
const FormContext = createContext<ContextType>({
  state: initialData,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

// Reducer
const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return {
        ...state,
        currentStep:
          typeof action.payload === 'string'
            ? parseInt(action.payload, 10)
            : action.payload,
      };
    case FormActions.setName:
      return { ...state, nameValue: action.payload as string };
    case FormActions.setLevel:
      return {
        ...state,
        level:
          typeof action.payload === 'string'
            ? parseInt(action.payload, 10)
            : action.payload,
      };
    case FormActions.setEmail:
      return { ...state, email: action.payload as string };
    case FormActions.setGithub:
      return { ...state, github: action.payload as string };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// Context Hook
export const useForm = (): ContextType => useContext(FormContext);

// Context, Reducer, Provider, Hook
/* import React from 'react';
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};
type Action = {
  type: FormActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};
type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

// Provider
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }
  return context;
};
 */
