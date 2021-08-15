import styled from "styled-components"
import Btn from "./Todobutton.js";

const List = styled.div`
    font-size:20px;
    background:orange;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:100%;
    padding:0 1rem;
    border-radius:10px;
    margin:15px auto;
    width:700px;
    & p{
        flex-wrap:wrap;
        width:90%
        overflow:auto;
    }



`;

export default function TodoList(props){
    return(
        
        <List>
            <p>{props.data}</p>
            <Btn oncClick={props.deleteFunc}  styles={{width:"30px",padding:"5px",height:"100%"} }>X</Btn>
        </List>
        
    )
} 