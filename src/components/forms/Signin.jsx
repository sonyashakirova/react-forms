import { useRef } from "react"
import { useForm } from "../../hooks/useForm"
import { TextInput } from "../atoms"

const initialValues = {
  email: "",
  password: "",
}

export function Signin({ onSubmit }) {
  const {
    handleChange,
    handleSubmit,
    handleReset,
    formRef,
  } = useForm(initialValues, onSubmit)

  return (
    <div className="form-wrapper">
      <form
        className="form"
        ref={formRef}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <TextInput
          id="signin-email"
          name="email"
          type="email"
          label="Почта"
          placeholder="Введите email"
          required
        />
        <TextInput
          id="signin-password"
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          required
        />
        <button className="button" type="submit">
          Войти
        </button>
      </form>
    </div>
  )
}
