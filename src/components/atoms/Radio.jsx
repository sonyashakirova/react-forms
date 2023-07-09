export function Radio({
  name,
  value,
  checked,
  size="sm",
}) {
  return (
    <label className="radio-item">
      <input
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
      />
      <span className={`radio-label radio-label-${size}`}>{value}</span>
    </label>
  )
}
