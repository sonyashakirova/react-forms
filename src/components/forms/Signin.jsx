import { useRef } from "react"
import { TextInput } from "../atoms"

export function Signin({ onSubmit }) {
  const formRef = useRef(null)
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
    formRef.current.reset()
  }

  function handleReset() {
    inputs.current = {
      email: "",
      password: "",
    }
  }

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
