import { useState } from "react";
import "./styles.css";
import React from "react";
import dictionary from "./dictionary.js";
import { Footer } from "./components/footer";
import { Navbar } from "./components/Navbar";

var emojiWeKnow = Object.keys(dictionary);

export default function App() {
  var [primary, secondary] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = dictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }

    secondary(meaning);
  }

  function itemsClickHandler(items) {
    var meaning = dictionary[items];
    secondary(meaning);
  }

  return (
    <div className="App">
      <Navbar />
      <input
        placeholder="Enter your Emoji"
        onChange={inputChangeHandler}
      ></input>
      <div>{primary}</div>

      <h3>Emojis We Know</h3>
      {emojiWeKnow.map((items) => {
        return (
          <span onClick={() => itemsClickHandler(items)} key={items}>
            {items}
          </span>
        );
      })}

      <Footer />
    </div>
  );
}
