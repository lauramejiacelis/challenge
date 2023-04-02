import * as Yup from 'yup';

const isRequiredMessage = 'Este campo es obligatorio';

export const formSchema = Yup.object().shape({
  country: Yup.string().required(isRequiredMessage),
  gender: Yup.string().required(isRequiredMessage),
  firstName: Yup.string().min(3, 'muy corto!').required(isRequiredMessage),
  lastName: Yup.string().required(isRequiredMessage),
  documentType: Yup.string().required(isRequiredMessage),
  documentNumber: Yup.number().required(isRequiredMessage),

  email: Yup.string()
    .email('debe ser un email válido')
    .required(isRequiredMessage),
  tel: Yup.number().min(10, 'faltan números!').required(isRequiredMessage),
  cel: Yup.number().min(10, 'faltan números!').required(isRequiredMessage),
  password: Yup.string()
    .min(4, 'muy corta!')
    .max(10, 'muy larga')
    .required(isRequiredMessage),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'No coinciden las contraseñas'
  ),
  adress: Yup.string().required(isRequiredMessage),
  zipCode: Yup.number().min(4, 'muy corto!').required(isRequiredMessage),
});
