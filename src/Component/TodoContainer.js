import styled from "styled-components";
import React, { useState } from "react";
import Button from "./Todobutton.js";
import List from "./AddList"

const TodoContainer = styled.form`

& *{
    box-sizing:border-box;
}
display:flex;
flex-direction:column;
padding:2rem;
margin:2rem auto;
border:2px solid orange;
width:800px;
border-radius:10px;
& input{
    width:auto;
    font-size:20px;
    display:inline-block;
    border-radius:5px;
    padding:1rem;
    outline:none;
    border:3px solid grey;
}
& input:focus{
    border:3px solid green;
    outline:none
}
& h1{
    text-align:center;
    color:crimson;
}

`;


export default function Todo(props) {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
      ]);
    
    const [todoInput, setTodoInput] = useState('');
    // const [data, setData] = useState(array1);
    
    function changeHandler(e) {
        setTodoInput(e.target.value);
        console.log(todoInput);
    }

    // function clickBtn(exp) {
    //     array1=[...exp,todoInput];
    // }
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        (enteredText) => {
            setCourseGoals(prevGoals => {
              const updatedGoals = [...prevGoals];
              updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
              return updatedGoals;
            });
          };
    }

    const deleteHandler = goalId => {
        setCourseGoals(prevGoals => {
          const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
          return updatedGoals;
        });
      };

    return (
        <>
            <TodoContainer onSubmit={formSubmitHandler}>
                <h1>Todo App</h1>
                <input type={props.type} value={todoInput} onChange={changeHandler} />
                <Button type="submit" >Add List</Button>

            </TodoContainer>
            <TodoContainer  style={{padding:"6px 0"}}>
                {courseGoals.map(data=><List data={data.text} deleteFunc={deleteHandler}></List>)}
            </TodoContainer>
        </>
    );
}