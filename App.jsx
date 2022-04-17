import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame1 from "./components/Frame1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-1)">
          <Frame1
            selectWallet="SELECT WALLET"
            place="home"
            history="history"
            card2Images="https://anima-uploads.s3.amazonaws.com/projects/625961d7055e3522141b6dc4/releases/625c6ae591fd1ec47148b51f/img/card2-images@2x.png"
            card2Title="MINT"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
