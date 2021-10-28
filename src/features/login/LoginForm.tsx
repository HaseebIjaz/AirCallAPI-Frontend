import { Formik, Form, Field, ErrorMessage } from 'formik';
import { objectToQueryParams } from 'src/utils';
import styled from 'styled-components';
import * as Yup from 'yup';

import { loginWithEmailAndPassword } from './services/index';
import TextError from './TextError';

const initialValues = {
  username: '',
  password: '',
};
const validationSchema = Yup.object({
  username: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});

interface ILoginProps {
  postLogin: () => void;
}
const LoginForm: React.FC<ILoginProps> = ({ postLogin }) => {
  const onSubmit = (values: any): void => {
    loginWithEmailAndPassword(objectToQueryParams({ ...values })).then(() => {
      postLogin();
    });
  };
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              <div className="form-group">
                <FormControl>
                  <label htmlFor="username">Username</label>
                  <Field
                    name="username"
                    type="text"
                    id="username"
                    className="form-control field "
                    aria-describedby="emailHelp"
                    placeholder="Enter username"
                  />
                  <ErrorMessage name="username" component={TextError} />
                  <small id="usernameHelp" className="form-text text-muted">
                    {"We'll never share your username and password with anyone else."}
                  </small>
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl className="">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    className="form-control field "
                    aria-describedby="passwordHelp"
                    placeholder="Enter Password"
                  />
                  <ErrorMessage name="password" component={TextError} />
                </FormControl>
              </div>
              <button
                className="btn btn-primary btn-lg"
                type="submit"
                // disabled={!formik.isValid || formik.isSubmitting}
              >
                Log In
              </button>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;

const FormControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .field {
    max-width: 500px;
    text-align: center;
  }
`;

const FormContainer = styled.div`
  .btn-primary {
    background-color: #33a867;
    border-color: #33a867;
  }
`;
