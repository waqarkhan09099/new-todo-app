import Card from "../UI/Card";
import React, { useState, useRef ,useEffect} from "react";
import classes from "./AddUsers.module.css";
import ErrorModel from "./ErrorModel";
import Button from "../UI/Button";

const AddUsers = props => {
    const anotherInputRef=useRef();
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState();
    const [errorModule, setErrorModule] = useState();
    const refinput=useRef();

    useEffect(()=>{
        const identifier=setTimeout(()=>{
            console.log("enter Date")

            return (userName.trim().length>=3&&+userAge.length>3?true:"")
        },2000);
        
        return()=>{
            if(userName.trim().length>=3){

                console.log("all Clear");
                clearTimeout(identifier);
            }
        }
    },[userName,userAge])


    // console.log(anotherInputRef);
    const userHandler = (e) => {
        setUserName(e.target.value);
        
    }

    const userAgeHandler = (e) => {
        setUserAge(e.target.value);
    }


    
    const submitHandler = (e) => {
        e.preventDefault();
        // return{
        // ((userName.trim().length === 0) || (userAge.trim().length === 0) ? alert("fill this field") : console.log((+userName.length <= 2 ? alert("plz enter correct user name") : userName), (+userAge <= 5 ? alert("your not Eligible your age is less then 5") : userAge)));
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            // return alert("fill this field");
            setErrorModule({
                title: "Empty Field Error",
                error: "Plz fill required data"
            })
            return;
        }
        if (+userAge <= 5) {
            // return alert("your not Eligible your age is less then 5");
            setErrorModule({
                title: "Invalid Age",
                error: "you are not eligible because your age below 6 years"
            });
            return;
        }
        if (userName.trim().length <= 3) {
            // return alert("Enter at least 3 Character in User Name ");

            setErrorModule({
                title: "Invalid User Name",
                error: "Enter atleast 4 Character "
            });
            return;
        }
        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');

    }
    // props.userObject(...userDta);

    const errorHandler = () => {
        setErrorModule(undefined)
    }

    return (
        <div>


            {errorModule && <ErrorModel title={errorModule.title} errorType={errorModule.error} onClick={errorHandler} />}
            <Card class={classes.form} background={classes.image}>

                <form onSubmit={submitHandler} >

                    <label htmlFor="userName">Username :</label>
                    <input id="userName" value={userName}  style={{ border: `${(userName.trim().length <= 3 ? '2px solid red' : '2px solid green')}` }} type="text" onChange={userHandler} />
                    <label htmlFor="age" >Age (years):</label>
                    <input id="age" type="number" style={{ border: `${(+userAge <= 5 || userAge === undefined ? '2px solid red' : '2px solid green')}` }} value={userAge} min="0" max="99" onChange={userAgeHandler} />
                    <Button type="submit" class={classes.customButton}>Add List</Button>
                    <input type="text" ref={anotherInputRef} />
                </form>
            </Card>
        </div>
    )
}

export default AddUsers;