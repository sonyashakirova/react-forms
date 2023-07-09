export function RadioSet({
  label,
  description,
  children,
  size="sm",
  withAsterisk=true,
  required,
  error,
}) {
  return (
    <fieldset>
      <legend className={`label label-${size}`}>
        {label}
        {required && withAsterisk && <span className="asterisk">*</span>}
      </legend>
      {description && <span className={`description description-${size}`}>
        {description}
      </span>}
      <div className="radio-container">
        {children}
      </div>
      {error && <span className={`description description-error description-${size}`}>
        {error}
      </span>}
    </fieldset>
  )
}
