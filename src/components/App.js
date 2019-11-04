import React from "react";
import KeySound from "./keySound";
import { Container } from "react-bootstrap"

class App extends React.Component {
  render() {
    return (<div>
<Container>
        <KeySound />
      </Container>
    </div>
      
    );
  }
}

export default App;
