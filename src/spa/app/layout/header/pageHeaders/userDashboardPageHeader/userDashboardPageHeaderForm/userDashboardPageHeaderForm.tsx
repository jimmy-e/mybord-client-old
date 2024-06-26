import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'form/form';
import handleError from 'server/errors/handleError';
import { INITIATE_USER_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import UserDashboardPageHeaderFormContent from './UserDashboardPageHeaderFormContent';

const UserDashboardPageHeaderForm: React.FC = () => {
  const [initiateUserCard] = useMutation(INITIATE_USER_CARD_MUTATION);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);
  const { setModalData, setModalId } = useModalContext();

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);

      const initialCardData = await initiateUserCard({
        variables: {
          url: form.getFieldValue('add-card-url-input'),
        },
      });

      const {
        cardData,
        category,
        title,
        type,
        url,
      } = initialCardData.data.initiateUserCard;

      setInputErrorMessage(null);
      setIsSubmitWaiting(false);
      form.resetFields(['add-card-url-input']);

      setModalData({
        cardData,
        category,
        title,
        type,
        url,
      });
      setModalId('add-card-modal');
    } catch (error) {
      setIsSubmitWaiting(false);
      const { message, status } = handleError(error);
      if (status === 400) {
        setInputErrorMessage(message);
      }
    }
  };

  return (
    <Form layout="horizontal" onSubmit={handleSubmit}>
      <UserDashboardPageHeaderFormContent
        errorMessage={inputErrorMessage}
        isWaiting={isSubmitWaiting}
      />
    </Form>
  );
};

export default UserDashboardPageHeaderForm;
