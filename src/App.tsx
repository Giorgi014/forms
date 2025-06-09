import React from "react";
// import { Outlet } from "react-router-dom";
import "./App.scss"

const Form = React.lazy(() => import("./components/Form/Form"));

function App() {
  return (
    <>
      <Form />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
