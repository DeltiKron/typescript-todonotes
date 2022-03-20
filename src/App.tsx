import { nanoid } from "nanoid";
import React, { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
type TaskRecord = { id: string, title: string, completed: boolean }
type TodoAppProps = {
  tasks: TaskRecord[]
}

function alertme(): void {
  alert("Something is happening! I'm scared!");
}




function App(props: TodoAppProps) {

  const [tasks, setTasks] = useState(props.tasks)

  function toggleTaskCompleted(id:string){
    console.log(id+=" Toggled Completed!")
    const newTasks = tasks.map(
      function(x){
        if (x.id===id){
          x.completed = !x.completed
        }
        return x
      }
    );
    setTasks(newTasks);

  }

  function deleteTask(id:string){
    const updatedTasks = tasks.filter((x)=> x.id!==id)
    setTasks(updatedTasks);
  }


  const taskList = tasks.map((task) => <Todo id={task.id} title={task.title} completed={task.completed} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted}/>)

  function addTask(name: string) {
    //alert("Adding Task : " + name);
    const newTask: TaskRecord = {
      id: nanoid(),
      title: name,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form buttonLabel="Add to List now!" addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton id="bt1" label="Foo" filterHandler={alertme} />
        <FilterButton id="bt1" label="Bar" filterHandler={alertme} />
        <FilterButton id="bt1" label="Barfoo" filterHandler={alertme} />
      </div>
      <h2 id="list-heading">
        {taskList.length} task{taskList.length!==1?'s':''} remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}


      </ul>
    </div>
  );
}


export default App;
