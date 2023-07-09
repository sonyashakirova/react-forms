import { useRef } from "react"
import { TextInput } from "../atoms"

export function Signin({ onSubmit }) {
  const inputs = useRef({
    email: "",
    password: "",
  })

  function handleChange(event) {
    inputs.current = {
      ...inputs.current,
      [event.target.name]: event.target.value,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(inputs.current)
  }

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onChange={handleChange}
        onSubmit={handleSubmit}
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
