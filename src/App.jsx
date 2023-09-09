import { useReducer } from "react";

import "./theme.css";

import "./App.css";

const initialData = { name: "Sara", age: 28, startCount: 0, theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "CHANGE_COUNT":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={` App ${allData.theme}`}>
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_THEME",
            newValue: allData.theme == "light" ? "dark" : "light",
          });
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <br />
      <br />

      <div
        onChange={() => {
          dispatch({
            type: "CHANGE_THEME",
            newValue: allData.theme == "light" ? "dark" : "light",
          });
        }}
        className="btn-container"
        style={{ marginBottom: "44px" }}
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
            dispatch({ type: "CHANGE_THEME", newValue: "light" });
          }}
          style={{ marginRight: "26px" }}
        >
          light
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "dark" });
          }}
          style={{ marginRight: "26px" }}
        >
          dark
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "grey" });
          }}
          style={{ marginRight: "26px" }}
        >
          grey
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "pink" });
          }}
        >
          pink
        </button>
      </div>

      <div>
        <h2 style={{ marginTop: "66px" }}>My name is {allData.name}</h2>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_NAME", newValue: "Sally" });
          }}
        >
          Change Name
        </button>
      </div>

      <br />

      <div>
        <h2>My age is {allData.age} </h2>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_AGE", newValue: "30" });
          }}
        >
          Change Name
        </button>
      </div>

      <br />
      <br />

      <button
        onClick={() => {
          dispatch({ type: "CHANGE_COUNT", newValue: allData.startCount + 1 });
        }}
        style={{ marginTop: "66px" }}
      >
        count is {allData.startCount}
      </button>
    </div>
  );
}

export default App;
