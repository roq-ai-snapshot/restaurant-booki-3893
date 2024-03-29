import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  table_id: yup.string().nullable().required(),
  guest_id: yup.string().nullable().required(),
});
