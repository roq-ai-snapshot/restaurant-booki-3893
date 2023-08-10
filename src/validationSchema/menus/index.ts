import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  chef_id: yup.string().nullable().required(),
});
