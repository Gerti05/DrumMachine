import React from "react";
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
  handleKeyPress = event => {
    this.soundOptions(event)
  };

  handleClick = event => {
    this.soundOptions(event);
  };

  soundOptions = event => {
    let q = new Audio(qKey);
    let w = new Audio(wKey);
    let e = new Audio(eKey);
    let a = new Audio(aKey);
    let s = new Audio(sKey);
    let d = new Audio(dKey);
    let z = new Audio(zKey);
    let x = new Audio(xKey);
    let c = new Audio(cKey);
    switch (event.target.value || event.key) {
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
        <div autoFocus tabIndex="0" key={this.key} onKeyPress={this.handleKeyPress}></div>
        <button value="q" onClick={this.handleClick}>
          Q
        </button>
        <button value="w" onClick={this.handleClick}>
          W
        </button>
        <button value="e" onClick={this.handleClick}>
          E
        </button>
        <button value="a" onClick={this.handleClick}>
          A
        </button>
        <button value="s" onClick={this.handleClick}>
          S
        </button>
        <button value="d" onClick={this.handleClick}>
          D
        </button>
        <button value="z" onClick={this.handleClick}>
          Z
        </button>
        <button value="x" onClick={this.handleClick}>
          X
        </button>
        <button value="c" onClick={this.handleClick}>
          C
        </button>
      </div>
    );
  }
}

export default KeySound;
