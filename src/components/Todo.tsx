import React from "react";

type ToDoProps = {
  id: string,
  title: string,
  completed: boolean,
  paragraph?: string
  toggleTaskCompleted:(id:string)=>void;
  deleteTask:(id:string)=>void;
}

export default function Todo(props:ToDoProps) {
    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={()=>props.toggleTaskCompleted(props.id)} />
          <label className="todo-label" htmlFor="todo-0">
            {props.title}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" onClick={()=>props.deleteTask(props.id)} className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>

    );
  }
  