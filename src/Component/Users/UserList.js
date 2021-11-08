import React from 'react';
import Card from '../UI/Card';
import style from './userList.module.css';
import Deletebtn from '../UI/Button';


const UserList = (props) => {
    return (
        <Card background={style.image}>
            <ul className={style.userList}>
                {props.User.map(data => {
                    return (<li key={data.id}>Hello {data.name} your Age is {data.age}<Deletebtn class={style.btn}  clickHandler={props.onDeletehandler(data.id)}>X</Deletebtn></li>)
                })}
            </ul>
        </Card>

    );
}

export default UserList;