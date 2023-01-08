import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const Base = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  height: 100%;
`;
const Form = styled.form``;

const Input = styled.input`
  font-size: 24px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 100%;
`;

const ToDoItems = styled.ul`
  margin-top: 2rem;
`;

const ToDoItem = styled.li``;

const Button = styled.button``;

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setToDo("");
    setToDos((prev) => [...prev, toDo]);
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <Base>
      <Form onSubmit={onSubmit}>
        <Input type="text" placeholder="Write Your To DO" onChange={onChange} value={toDo} />
      </Form>
      <ToDoItems>
        {toDos.map((toDoItem) => {
          return <ToDoItem>{toDoItem}</ToDoItem>;
        })}
      </ToDoItems>
    </Base>
  );
};

export default ToDoList;
