import "./Checklist.css";
import React, { useState } from "react";

function Checklist() {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskImportance, setTaskImportance] = useState("1");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (taskDescription && taskDeadline) {
      const newTask = {
        description: taskDescription,
        importance: taskImportance,
        deadline: taskDeadline,
      };

      setTasks([...tasks, newTask]);
      setTaskDescription("");
      setTaskImportance("1");
      setTaskDeadline("");
    }
  };

  const markAsCompleted = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
     <div className="chek">
      <h1>Checklist</h1>
        <input
          type="text"
          placeholder="Descrição da Tarefa"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          value={taskImportance}
          onChange={(e) => setTaskImportance(e.target.value)}
        >
          <option value="1">Baixa</option>
          <option value="2">Média</option>
          <option value="3">Alta</option>
        </select>
        <input
          type="date"
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
     </div>
      <div className="tasks">
        <h2>Tarefas Pendentes</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.description} - Importância: {task.importance} - Prazo:{" "}
              {task.deadline}
              <button onClick={() => markAsCompleted(index)}>Concluída</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="ok">
        <h2>Tarefas Concluídas</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={`completed_${index}`}>
              {task.description} - Importância: {task.importance} - Prazo:{" "}
              {task.deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Checklist;
