import styled from "styled-components";
// create button using styled Component;
const Button =styled.button`
    padding:15px 0;
    font-size:16px;
    color:white;
    background:crimson;
    display:inline-block;
    width:20%;
    margin:1rem 0;
    border:2px solid transparent;
    border-radius:10px;
    cursor:pointer;

    &:hover{
        color:crimson;
        background:white;
        border:2px solid crimson;
        transition:all 0.4s ease;
    }
`;


export default function TodoButton(props){
    return(
        <Button onClick={props.clickHandler} type={props.type} style={props.styles}>
            {props.children}
        </Button>
    )
}