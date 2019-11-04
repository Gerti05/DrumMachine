import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

import qKey from "../sounds/bubbles.mp3";
import wKey from "../sounds/clay.mp3";
import eKey from "../sounds/confetti.mp3";
import aKey from "../sounds/corona.mp3";
import sKey from "../sounds/dotted-spiral.mp3";
import dKey from "../sounds/flash-1.mp3";
import zKey from "../sounds/flash-2.mp3";
import xKey from "../sounds/flash-3.mp3";
import cKey from "../sounds/glimmer.mp3";

class KeySound extends React.Component {
  handleKeyDown = event => {
    switch (event.key) {
      case "q":
      case "Q":
        return document.querySelector("#activeQ").classList.add("active");
      case "w":
      case "W":
        return document.querySelector("#activeW").classList.add("active");
      case "e":
      case "E":
        return document.querySelector("#activeE").classList.add("active");
      case "a":
      case "A":
        return document.querySelector("#activeA").classList.add("active");
      case "s":
      case "S":
        return document.querySelector("#activeS").classList.add("active");
      case "d":
      case "D":
        return document.querySelector("#activeD").classList.add("active");
      case "z":
      case "Z":
        return document.querySelector("#activeZ").classList.add("active");
      case "x":
      case "X":
        return document.querySelector("#activeX").classList.add("active");
      case "c":
      case "C":
        return document.querySelector("#activeC").classList.add("active");
      default:
        return null;
    }
  };

  handleKeyUp = event => {
    let q = new Audio(qKey);
    let w = new Audio(wKey);
    let e = new Audio(eKey);
    let a = new Audio(aKey);
    let s = new Audio(sKey);
    let d = new Audio(dKey);
    let z = new Audio(zKey);
    let x = new Audio(xKey);
    let c = new Audio(cKey);
    console.log(event.key);
    switch (event.key) {
      case "q":
      case "Q":
        return (
          q.play(),
          document.querySelector("#activeQ").classList.remove("active")
        );
      case "w":
      case "W":
        return (
          w.play(),
          document.querySelector("#activeW").classList.remove("active")
        );
      case "e":
      case "E":
        return (
          e.play(),
          document.querySelector("#activeE").classList.remove("active")
        );
      case "a":
      case "A":
        return (
          a.play(),
          document.querySelector("#activeA").classList.remove("active")
        );
      case "s":
      case "S":
        return (
          s.play(),
          document.querySelector("#activeS").classList.remove("active")
        );
      case "d":
      case "D":
        return (
          d.play(),
          document.querySelector("#activeD").classList.remove("active")
        );
      case "z":
      case "Z":
        return (
          z.play(),
          document.querySelector("#activeZ").classList.remove("active")
        );
      case "x":
      case "X":
        return (
          x.play(),
          document.querySelector("#activeX").classList.remove("active")
        );
      case "c":
      case "C":
        return (
          c.play(),
          document.querySelector("#activeC").classList.remove("active")
        );
      default:
        return null;
    }
  };

  handleClick = event => {
    let q = new Audio(qKey);
    let w = new Audio(wKey);
    let e = new Audio(eKey);
    let a = new Audio(aKey);
    let s = new Audio(sKey);
    let d = new Audio(dKey);
    let z = new Audio(zKey);
    let x = new Audio(xKey);
    let c = new Audio(cKey);
    switch (event.target.value) {
      case "q":
        return q.play();
      case "w":
        return w.play();
      case "e":
        return e.play();
      case "a":
        return a.play();
      case "s":
        return s.play();
      case "d":
        return d.play();
      case "z":
        return z.play();
      case "x":
        return x.play();
      case "c":
        return c.play();
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div
          tabIndex="0"
          key={this.key}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        >
          <ButtonToolbar className="justify-content-center">
            <Button
              id="activeQ"
              variant="info"
              value="q"
              onClick={this.handleClick}
            >
              Q
            </Button>
            <Button
              id="activeW"
              variant="info"
              value="w"
              onClick={this.handleClick}
            >
              W
            </Button>
            <Button
              id="activeE"
              variant="info"
              value="e"
              onClick={this.handleClick}
            >
              E
            </Button>
          </ButtonToolbar>
          <ButtonToolbar className="justify-content-center">
            <Button
              id="activeA"
              variant="info"
              value="a"
              onClick={this.handleClick}
            >
              A
            </Button>
            <Button
              id="activeS"
              variant="info"
              value="s"
              onClick={this.handleClick}
            >
              S
            </Button>
            <Button
              id="activeD"
              variant="info"
              value="d"
              onClick={this.handleClick}
            >
              D
            </Button>
          </ButtonToolbar>
          <ButtonToolbar className="justify-content-center">
            <Button
              id="activeZ"
              variant="info"
              value="z"
              onClick={this.handleClick}
            >
              Z
            </Button>
            <Button
              id="activeX"
              variant="info"
              value="x"
              onClick={this.handleClick}
            >
              X
            </Button>
            <Button
              id="activeC"
              variant="info"
              value="c"
              onClick={this.handleClick}
            >
              C
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default KeySound;
