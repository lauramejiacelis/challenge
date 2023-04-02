import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formSchema } from '../utils/validationSchema';
import { Countries, Genders, DocumentTypes } from '../utils/lists';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import styles from './Form.module.css';

const RegisterForm = () => {
  //const [step, setStep] = useState(1);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const initialValues = {
    country: '',
    gender: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    documentType: '',
    documentNumber: 0,
    email: '',
    password: "",
    confirmPassword: "",
    tel: 0,
    cel: 0,
    adress: '',
    zipCode: 0,
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  // const nextStep = () => {
  //   setStep(step - 1);
  // };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles.borderContainer}>
        <div className={styles.mainContainer}>
          <h1>Register Form</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={formSchema}
          >
            {(formik) => (
              <Form>
                <div className={styles.formContainer}>
                  <div className={styles.step}>
                    <div className={styles.formGroup}>
                      <label htmlFor="country">País</label>
                      <Field
                        className="formInput"
                        name="country"
                        as="select"
                        label="country"
                        type="text"
                      >
                        {Countries.map((country, i) => (
                          <option key={i} value={country.toLowerCase()}>
                            {country}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        className={styles.error}
                        name="country"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="gender">Género</label>
                      <Field
                        className="formInput"
                        name="gender"
                        as="select"
                        label="gender"
                        type="text"
                      >
                        {Genders.map((gender) => (
                          <option key={gender} value={gender.toLowerCase()}>
                            {gender}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        className={styles.error}
                        name="gender"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">Primer Nombre</label>
                      <Field
                        className="formInput"
                        name="firstName"
                        as="input"
                        label="Nombre"
                        type="text"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="firstName"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Segundo Nombre</label>
                      <Field
                        className="formInput"
                        name="lastName"
                        as="input"
                        label="lastName"
                        type="text"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="lastName"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="documentType">Tipo de Documento</label>
                      <Field
                        className="formInput"
                        name="documentType"
                        as="select"
                        label="documentType"
                        type="text"
                      >
                        {DocumentTypes.map((documentType) => (
                          <option
                            key={documentType}
                            value={documentType.toLowerCase()}
                          >
                            {documentType}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        className={styles.error}
                        name="documentType"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="documentNumber">
                        Número de Documento
                      </label>
                      <Field
                        className="formInput"
                        name="documentNumber"
                        as="input"
                        label="documentNumber"
                        type="number"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="documentNumber"
                        component="span"
                      />
                    </div>
                  </div>

                  <div className={styles.step}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Correo Electrónico</label>
                      <Field
                        className="formInput"
                        name="email"
                        as="input"
                        label="email"
                        type="text"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="email"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="password">Contraseña</label>
                      <Field
                        className="formInput"
                        name="password"
                        as="input"
                        label="password"
                        type="password"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="password"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="confirmPassword">Contraseña</label>
                      <Field
                        className="formInput"
                        name="confirmPassword"
                        as="input"
                        label="confirmPassword"
                        type="password"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="confirmPassword"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="tel">Número de teléfono</label>
                      <Field
                        className="formInput"
                        name="tel"
                        as="input"
                        label="tel"
                        type="number"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="tel"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="cel">Número de Celular</label>
                      <Field
                        className="formInput"
                        name="cel"
                        as="input"
                        label="cel"
                        type="number"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="cel"
                        component="span"
                      />
                    </div>

                    <div className={styles.step}>
                    <div className={styles.formGroup}>
                      <label htmlFor="adress">Dirección de Residencia: </label>
                      <Field
                        className="formInput"
                        name="adress"
                        as="input"
                        label="adress"
                        type="text"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="adress"
                        component="span"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="zipCode">Código Postal</label>
                      <Field
                        className="formInput"
                        name="zipCode"
                        as="input"
                        label="zipCode"
                        type="number"
                      />
                      <ErrorMessage
                        className={styles.error}
                        name="zipCode"
                        component="span"
                      />
                    </div>
                      
                    </div>
                  </div>

                  <button
                    className={styles.btnGrad}
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
