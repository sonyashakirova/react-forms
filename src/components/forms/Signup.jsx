import { useRef } from "react"
import IconAt from "../../assets/at.svg"
import { Radio, RadioSet, TextInput } from "../atoms"
import { useForm } from "../../hooks/useForm"

const initialValues = {
  name: "",
  username: "",
  email: "",
  sex: "",
  password: "",
  repeatPassword: "",
}

export function Signup({ onSubmit }) {
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
          id="signup-name"
          name="name"
          label="Имя"
          placeholder="Введите имя"
        />
        <TextInput
          id="signup-username"
          name="username"
          placeholder="username123"
          label="Ник"
          description="Только буквы латинского алфавита и цифры"
          icon={<IconAt />}
        />
        <TextInput
          id="signup-email"
          name="email"
          type="email"
          label="Почта"
          placeholder="Введите почту"
          required
        />
        <RadioSet label="Пол">
          <Radio name="sex" value="Мужской" checked />
          <Radio name="sex" value="Женский" />
          <Radio name="sex" value="Другой" />
        </RadioSet>
        <TextInput
          id="signup-password"
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          required
        />
        <TextInput
          id="signup-repeatPassword"
          name="repeatPassword"
          type="password"
          label="Повторить пароль"
          placeholder="Введите пароль еще раз"
          required
        />
        <button className="button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
