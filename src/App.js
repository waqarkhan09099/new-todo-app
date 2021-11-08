// import logo from './logo.svg';
import AddUser from "./Component/Users/AddUsers.js";
import UserList from './Component/Users/UserList';
import React, { useState } from 'react';
// import './App.css';
// import TodoCon from "./Component/TodoContainer.js";
function App() {
  const [userList, setuserList] = useState([]);
  const [listDisable,setListDisable]=useState(false);

  const deleteFunc=(userid)=>{

    userList.filter(data=> data.id===userid)
  }
  const addListHandler=(Uname,Uage)=>{
    setuserList((prevdata)=>{
      return [...prevdata,{name:Uname,age:Uage,id:Number(userList.length+1)}];
      
    });
    return setListDisable(true);
  }
  return (
    <div>
      <AddUser onAddUser={addListHandler}></AddUser>
      {listDisable&&<UserList User={userList} onDeletehandler={deleteFunc}/>}
    </div>
  );
}

export default App;
