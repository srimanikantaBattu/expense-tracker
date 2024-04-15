import React from 'react'
import './AddNew.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
function AddNew(props) {
    let [buttond,setButton]=useState(0);
    let {register,handleSubmit,formState:{errors}}=useForm();
    function handleFormSubmit(userObject){
        props.setUsers([...props.users,userObject])
        if(userObject.entry==='expense'){
        props.setExpense(Number(props.expense)+Number(userObject.amount))}
        else{
        props.setIncome(Number(props.income)+Number(userObject.amount))
        }
    }
    function setButtons(event){
        console.log(event.target.value)
        if(event.target.value==='expense')
        setButton(0);
    else
    setButton(1);
    }
  return (
    <div className="ms-5">
        <h3 className='text-center text-white'>Add new</h3>
        <form className='d-block custom mx-auto' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3 d-flex">
          <label htmlFor="entry" className='text-white form-label mt-1 fs-5' style={{width:"150px"}}>Entry Type : </label>
          <select id="entry" className="h-75 w-50 form-select mt-2" {...register('entry',{required:true})} defaultValue="" onChange={setButtons}>
            <option value="" className='fs-6' disabled>Select Type</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        {errors.entry?.type === "required" && (
            <p className="fs-5 text-warning fw-medium">Select an Entry</p>
          )}
        <div className="mb-3 d-flex">
          <label htmlFor="name" style={{width:"100px"}} className="fs-5 text-white form-label mt-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="h-75 w-50 form-control mt-2"
            {...register("name", {
              required: true
            })}
          />
          </div>
          {errors.name?.type === "required" && (
            <p className="fs-5 text-warning fw-medium">Name is required</p>
          )}
          <div className="mb-3 d-flex">
          <label htmlFor="amount" style={{width:"110px"}} className="fs-5 text-white form-label">
            Amount : 
          </label>
          <input
            type="number"
            id="amount"
            className="form-control w-50 h-75 mt-1"
            {...register("amount", {
              required: true
            })}
          />
          </div>
          {errors.amount?.type === "required" && (
            <p className="fs-5 text-warning fw-medium">Enter Amount</p>
          )}
          {
          buttond===0?<button className="btn btn-light fs-5 fw-medium mx-auto d-block text-primary">Add expense</button>:<button className="btn fw-medium btn-light mx-auto d-block fs-5 text-primary">Add Income</button>
          
            }
        </form>
    </div>
  )
}

export default AddNew