import * as React from "react";
import { Formik, FormikProps, FormikHelpers } from "formik";
import { Alert, Spin } from "antd";
import { observer } from "mobx-react";

// Components
import Layout from "@app/components/client/Layout";

// API
import { AuthAPI } from "@app/api/Auth";
import { storeContext } from "@app/stores";

interface ILoginPageProps {}

interface IFormFields {
  email: string;
  password: string;
  customError?: string;
}

const validate = (values: IFormFields) => {
  const errors: Partial<IFormFields> = {};

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  }

  return errors;
};

const renderForm = (props: FormikProps<IFormFields>) => {
  const {
    handleSubmit,
    handleChange,
    submitCount,
    handleBlur,
    values,
    errors
  } = props;

  const errorMessage = Object.values(errors)[0];

  return (
    <form className="sign__form" onSubmit={handleSubmit}>
      {errorMessage && submitCount > 0 && (
        <Alert
          style={{ marginBottom: 15, width: "100%" }}
          message={errorMessage}
          type="error"
        />
      )}

      <div className="sign__group">
        <input
          type="text"
          name="email"
          className="sign__input"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
      </div>

      <div className="sign__group">
        <input
          type="password"
          name="password"
          className="sign__input"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </div>

      <button className="sign__btn" type="submit">
        Sign in
      </button>
    </form>
  );
};

export const LoginPage: React.FC<ILoginPageProps> = props => {
  const [isLoading, setLoading] = React.useState(false);
  const { userStore } = React.useContext(storeContext);

  const onSubmit = async (
    values: IFormFields,
    { setSubmitting, setErrors }: FormikHelpers<IFormFields>
  ) => {
    setLoading(true);

    const result = await AuthAPI.login(values);

    if (!result.isSuccess) {
      setErrors({
        customError: result.errorMessage || "Filed to login, please try later!"
      });
    } else if (result.body) {
      userStore.createUser(result.body);
    }

    setSubmitting(false);
    setLoading(false);
  };

  return (
    <Layout title="Login page">
      <Spin spinning={isLoading}>
        <div className="sign section--bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sign__content">
                  <Formik
                    validate={validate}
                    onSubmit={onSubmit}
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                  >
                    {renderForm}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </Layout>
  );
};

export default observer(LoginPage);
