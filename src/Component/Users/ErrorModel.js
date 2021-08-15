import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ReactDom from 'react-dom';
import style from './ErrorModel.module.css'

const Backdrop = (props) => {
    return (
        <>
            <div className={style.backdrop} onClick={props.onClick}>

            </div>
        </>
    );
}

const Model = (props) => {
    return (
        <>
            <Card class={style.modal}>
                <header className={style.header}>
                    <h1>{props.title}</h1>
                </header>
                <div className={style.content}>
                    <p>{props.errorType}</p>
                </div>
                <footer className={style.actions}>
                    <Button class={style.btn} clickHandler={props.onClick}>Okay</Button>
                </footer>

            </Card>
        </>
    );
}

// i Create Portal with ReactDom to make child to use anwhere in index.html file 
// its seperat connect to call in root html file. its self render as portal. 

const ErrorModel = (props) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backDrop"))}
            {ReactDom.createPortal(<Model title={props.title} onClick={props.onClick} errorType={props.errorType} />, document.getElementById('model'))}
        </>
    );
}

export default ErrorModel;