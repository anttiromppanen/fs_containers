import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("Todo renders correctly", () => {
  const todoInfo = { text: "This is a todo", done: false };
  const onClickDelete = jest.fn();
  const onClickComplete = jest.fn();
  render(
    <Todo
      todo={todoInfo}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  );

  const text = screen.getByText("This is a todo");
  expect(text).toBeDefined();
});
