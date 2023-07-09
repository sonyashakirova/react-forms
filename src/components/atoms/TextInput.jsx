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
  const classNames = ["input"]

  if (variant) classNames.push(`input-${variant}`)
  if (radius) classNames.push(`input-radius-${radius}`)
  if (size) classNames.push(`input-size-${size}`)
  if (icon) classNames.push("input-with-icon")
  if (error) classNames.push("input-error")

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
          className={classNames.join(" ")}
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
