import { useRef } from "react"

export function useForm(initialValues, onSubmit) {
  const formRef = useRef(null)
  const values = useRef(initialValues)

  function handleChange(event) {
    values.current = {
      ...values.current,
      [event.target.name]: event.target.value,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(values.current)
    formRef.current.reset()
  }

  function handleReset() {
    values.current = initialValues
  }

  return {
    handleChange,
    handleSubmit,
    handleReset,
    formRef,
    values,
  }
}
