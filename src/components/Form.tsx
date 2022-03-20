import React, { ChangeEvent, useState } from "react";

import { isPropertySignature } from "typescript";

interface prop_types
{buttonLabel:String, addTask:(name:string) => void}

const _default_name:string = "What needs doing?";
export default function Form(props:prop_types){

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    console.log("Running addTask with name="+name)
    props.addTask(name)
    setName("")
    var input = document.getElementById("new-todo-input") as HTMLInputElement; 
    input.value=""
    }

  const [name,setName] = useState("");

  function checkSubmitButtonActivity(){
    console.log("Checking Submit Button")
    var input = document.getElementById("new-todo-input") as HTMLInputElement; 
    console.log("Value: = "+input.value)
    console.log("Name: = "+input.value)
    setName(input.value)
    console.log("Name: = "+input.value)
    var submitButton =  document.getElementById("submitButton") as HTMLInputElement;
    let disable_button:boolean = (input.value == "")
    submitButton.disabled = disable_button;
    console.log("Done checking, name is:"+name)
  }

  document.addEventListener("DOMContentLoaded", function(event) { 
    checkSubmitButtonActivity();
  });

  function handleKeyUp(){
    checkSubmitButtonActivity()
  }

  

  return (
        <form onSubmit={handleSubmit        } >
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          //value={name}
          //contentEditable="true"
          onKeyUp={handleKeyUp}
        />
        <button id="submitButton" type="submit" className="btn btn__primary btn__lg">
          {props.buttonLabel}
        </button>
      </form>
    );
};