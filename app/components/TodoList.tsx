"use client";
import React from 'react';
import { useGetTodosQuery } from '../services/TodoApi';


type TodoType = {
  id: number;
  todo: string;
};

function TodoList() {
    const {data, error, isLoading} = useGetTodosQuery(null);

    if (isLoading) return <div>Loading.....</div>;
    if (error) return <div> Error occured</div>;
    console.log(data);

  return (
    <ul>
      {data?.todos?.map((item: TodoType) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </ul>
  )
}

export default TodoList