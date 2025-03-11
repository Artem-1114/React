
import React from "react";
import Task from "./components/Task";
import './App.css'

function App() {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        <h1>Список задач</h1>
        <Task title="Вивчити пропси" description="Розібратись, як передавати дані в компоненти" isCompleted={false} />
        <Task title="Додати стилізацію" description="Стилізувати компонент за допомогою CSS" isCompleted={true} />
      </div>
    </>
  )
}

export default App
