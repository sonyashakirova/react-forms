import classNames from "classnames"

export function TextInput({
  id,
  description,
  disabled,
  error,
  name,
  icon,
  label,
  placeholder,
  radius="sm",
  required,
  size="sm",
  type="text",
  variant="default",
  withAsterisk=true,
}) {
  const inputClass = classNames(
    "input",
    `input-${variant}`,
    `input-radius-${radius}`,
    `input-size-${size}`,
    { "input-with-icon": icon },
    { "input-error": error }
  )

  return (
    <div>
      <label className={`label label-${size}`} htmlFor={id}>
        {label}
        {required && withAsterisk && <span className="asterisk">*</span>}
      </label>
      {description && <span className={`description description-${size}`}>
        {description}
      </span>}
      <div className="input-container">
        <div className="input-icon">{icon}</div>
        <input
          id={id}
          className={inputClass}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </div>
      {error && <span className={`description description-error description-${size}`}>
        {error}
      </span>}
    </div>
  )
}
