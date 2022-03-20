import React from "react";

type FilterButtonProps = {
    label:string,
    id:string,
    filterHandler: ()=>void
}

export default function FilterButton(props:FilterButtonProps){
    return(
    <button id={props.id} type="button" className="btn toggle-btn" aria-pressed="true" onClick={props.filterHandler}>
    {/* <span className="visually-hidden">Show </span>
    <span>all</span>
    <span className="visually-hidden"> tasks</span> */}
    <span>{props.label}</span>
  </button>
    );
}