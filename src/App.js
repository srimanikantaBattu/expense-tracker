import React from "react";
import "./App.css";
import { useState } from "react";
import Balance from "./components/balance/Balance";
import Expenses from "./components/expenses/Expenses";
import NavBar from "./components/navbar/NavBar";
import AddNew from "./components/addnew/AddNew";
function App() {
  let [users,setUsers]=useState([]);
  let [income,setIncome]=useState(0);
  let [expense,setExpense]=useState(0);
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="">
        <div className="container">
          <Balance income={income} expense={expense}/>
        </div>
        <div className="d-flex bg-warning justify-content-center container p-4 w-75 mx-auto rounded-2 back">
          <div className="col-sm-7">
          <Expenses income={income} expense={expense} users={users} setUsers={setUsers} setIncome={setIncome} setExpense={setExpense}></Expenses>
          </div>
          <div className="line2"></div>
          <AddNew income={income} expense={expense} users={users} setUsers={setUsers} setIncome={setIncome} setExpense={setExpense}></AddNew>
        </div>
      </div>
    </div>
  );
}

export default App;
