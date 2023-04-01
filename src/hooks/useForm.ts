import { useState, ChangeEvent } from "react";
import { TFormStateType } from "../utils/types";

function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

export const initialFormState: TFormStateType = {
  name: "",
  password: "",
  email: "",
};

export default useForm;
