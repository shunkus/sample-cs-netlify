import React from "react";
import "./styles.css";
import { Container } from "@material-ui/core";

import Navbar from "./components/navbar/Navbar.component";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1>Hello CodeSandbox + Netlify</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Container>
    </div>
  );
}
