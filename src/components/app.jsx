import { Signin } from "./forms/Signin"

export function App() {
  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="app-wrapper">
      <Signin onSubmit={onSubmit} />
    </div>
  )
}
