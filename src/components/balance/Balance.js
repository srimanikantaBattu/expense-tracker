import React from 'react'
import './Balance.css'
function Balance(props) {
  return (
    <div className="balance-div w-50 mx-auto mt-4 rounded-3 pt-5 pb-5 mb-4">
        <div className="d-flex justify-content-center pb-4">
        <h1 className='text-white'>Balance : </h1>
        <h1 className='text-white cust-text ms-4'> {(Number(props.income)-Number(props.expense))}</h1>
        </div>
        <div className="twoblock d-flex justify-content-center">
            <div className="fisrt-block me-5">
                <p className='text-white fs-4 lead'>Total income</p>
                <h3 className='text-center green'>{props.income}</h3>
            </div>
            <div className="line1">

            </div>
            <div className="second-block ms-5">
                <p className='text-white fs-4 lead'>Total expense</p>
                <h3 className='text-center red'>{props.expense}</h3>
            </div>
        </div>
    </div>
  )
}

export default Balance