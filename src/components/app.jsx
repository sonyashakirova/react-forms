import { Signin } from "./forms/Signin"
import { Signup } from "./forms/Signup"

export function App() {
  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="app-wrapper">
      <Signin onSubmit={onSubmit} />
      <Signup onSubmit={onSubmit} />
    </div>
  )
}
