import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'landing/pages/loginPage/loginContext/loginContext';
const LoginFormForgotButtons = React.lazy(() => import('./loginFormForgotButtons'));
const LoginFormLoginButtons = React.lazy(() => import('./loginFormLoginButtons'));
const LoginFormSignUpButtons = React.lazy(() => import('./loginFormSignUpButtons'));

interface Props {
  form: FormProp;
}

const LoginFormButtons: React.FC<Props> = ({
  form,
}) => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotButtons form={form} />;
    case 'login':
      return <LoginFormLoginButtons form={form} />;
    case 'signUp':
      return <LoginFormSignUpButtons form={form} />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormButtons;