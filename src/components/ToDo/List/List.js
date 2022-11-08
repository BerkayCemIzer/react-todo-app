import React, { useState } from "react";
import "./List.css";

function List({ matter, setMatter }) {
  //   const filtered = matter.filter((item) => {
  //     return Object.keys(item).some((key) => {
  //       return item[key].toString().toLowerCase().includes();
  //     });
  //   });

  const completeToDo = (id) => {
    setMatter((matter) =>
      matter.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteToDo = (id) => {
    setMatter((matter) => matter.filter((item) => item.id !== id));
  };

  const deleteCompleted = () => {
    setMatter((matter) => matter.filter((item) => item.isCompleted !== true));
  };

  const [all, setAll] = useState("");

  const showActive = (a) => {
    setAll("1");
    // console.log(
    //   matter
    //     .map((item) => item)
    //     .filter((item) => item.isCompleted === false)
    //     .map((item) => item.form.text)
    // );
  };

  const showAll = () => {
    setAll("0");
  };

  const showComp = () => {
    setAll("2");
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {all === "1"
          ? matter
              .map((item) => item)
              .filter((item) => item.isCompleted === false)
              .map((item) => (
                <li className="view" key={item.id}>
                  <div className="view">
                    <input
                      name="checkbox"
                      className="toggle"
                      type="checkbox"
                      value={item.isCompleted}
                      onChange={() => completeToDo(item.id)}
                      id={item.id}
                    />
                    <label
                      htmlFor={item.id}
                      className={`${item.isCompleted && "checked-item"}`}
                    >
                      {item.form.text}
                    </label>
                    <button
                      className="destroy"
                      onClick={() => {
                        deleteToDo(item.id);
                      }}
                    ></button>
                  </div>
                </li>
              ))
          : all === "2"
          ? matter
              .map((item) => item)
              .filter((item) => item.isCompleted === true)
              .map((item) => (
                <li className="view" key={item.id}>
                  <div className="view">
                    <input
                      name="checkbox"
                      className="toggle"
                      type="checkbox"
                      value={item.isCompleted}
                      onChange={() => completeToDo(item.id)}
                      id={item.id}
                    />
                    <label
                      htmlFor={item.id}
                      className={`${item.isCompleted && "checked-item"}`}
                    >
                      {item.form.text}
                    </label>
                    <button
                      className="destroy"
                      onClick={() => {
                        deleteToDo(item.id);
                      }}
                    ></button>
                  </div>
                </li>
              ))
          : matter.map((item) => (
              <li className="view" key={item.id}>
                <div className="view">
                  <input
                    name="checkbox"
                    className="toggle"
                    type="checkbox"
                    value={item.isCompleted}
                    onChange={() => completeToDo(item.id)}
                    id={item.id}
                  />
                  <label
                    htmlFor={item.id}
                    className={`${item.isCompleted && "checked-item"}`}
                  >
                    {item.form.text}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => {
                      deleteToDo(item.id);
                    }}
                  ></button>
                </div>
              </li>
            ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>
            {
              matter
                .map((item) => item.isCompleted)
                .filter((value) => value === false).length
            }{" "}
          </strong>
          items left
        </span>

        <ul className="filters">
          <li
            onClick={() => {
              showAll();
            }}
          >
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li
            onClick={(a) => {
              showActive(a);
            }}
          >
            <a href="#/">Active</a>
          </li>
          <li
            onClick={() => {
              showComp();
            }}
          >
            <a href="#/">Completed</a>
          </li>
        </ul>

        <button
          onClick={() => {
            deleteCompleted();
          }}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default List;
