import { Outlet } from "react-router"

function App() {

  return (
    <>
      <button type="button" className="btn btn-primary">button</button>
      <Outlet />
    </>
  )
}

export default App
