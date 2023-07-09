import { Signin } from "./forms/Signin"
import { Signup } from "./forms/Signup"
import "../styles.scss"

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
