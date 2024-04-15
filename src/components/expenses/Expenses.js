import React from 'react'
import './Expenses.css'
function Expenses(props) {
    function deleteUsers(index){
        let copyUsers=[...props.users]
        if(copyUsers[index].entry==='expense'){
            props.setExpense(Number(props.expense)-Number(copyUsers[index].amount));
        }
        else{
            props.setIncome(Number(props.income)-Number(copyUsers[index].amount));
        }
        copyUsers.splice(index,1);
        props.setUsers(copyUsers)
    }
  return (
   <div className="me-2">
    <h3 className='text-white text-center mb-3'>Expenses</h3>
    {props.users.length===0?<p className='lead fs-2 fw-normal p-3 border border-white text-center w-75 hello text-warning mt-5'>No Data to display !!</p>:<table className="table table-hover border w-75 border-white custom-table mx-auto">
        <thead className='text-center table-success'>
            <tr>
                <th className='p-3'>S.no</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>Amt</th>
                <th className='p-3'>Type</th>
                <th className='p-3'>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                props.users.map((userObject,index)=><tr className='text-center fs-6 css' key={index}>
                    <td>{index+1}</td>
                    <td>{userObject.name}</td>
                    <td>{userObject.amount}</td>
                    {
                    userObject.entry==='expense'?<td className='text-danger fs-3'> &#8600;</td>:<td className='text-success fs-3'>&#8599;</td>
                    }
                    <td><button className="btn btn-danger" onClick={()=>deleteUsers(index)}>X</button></td>
                </tr>)
            }
        </tbody>
    </table>}
   </div>
  )
}

export default Expenses