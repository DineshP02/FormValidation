import * as yup from "yup";
export const UserValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).max(8).required(),
});
