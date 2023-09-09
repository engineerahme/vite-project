import { useState } from "react";

import "./theme.css";

import "./App.css";

function App() {
  const [person, changeName] = useState("sara");
  const [age, setAge] = useState("28");
  const [count, setCount] = useState(0);

  const [theme, settheme] = useState("");

  return (
    <div className={` App ${theme}`}>
      <button
        onClick={() => {
          settheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <br />
      <br />

      <div
        className="btn-container"
        style={{ marginBottom: "44px" }}
        onChange={() => {
          settheme(theme == "" ? "dark" : "");
        }}
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            settheme("light");
          }}
          style={{ marginRight: "26px" }}
        >
          light
        </button>
        <button
          onClick={() => {
            settheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          dark
        </button>
        <button
          onClick={() => {
            settheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          gray
        </button>
        <button
          onClick={() => {
            settheme("pink");
          }}
        >
          pink
        </button>
      </div>

      <div>
        <h2 style={{ marginTop: "66px" }}>My name is {person}</h2>
        <button
          onClick={() => {
            changeName("Sally");
          }}
        >
          Change Name{" "}
        </button>
      </div>

      <br />

      <div>
        <h2>My age is {age} </h2>
        <button
          onClick={() => {
            setAge("30");
          }}
        >
          Change Name{" "}
        </button>
      </div>

      <br />
      <br />

      <button
        style={{ marginTop: "66px" }}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
