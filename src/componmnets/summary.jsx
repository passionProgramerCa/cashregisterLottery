import React from 'react';
import '../assets/styles/Summary.css'

const Summary = (props) => {
    return (
        <div className={"sBackground"}>
            <b><h2>Number selected</h2></b>
            <ul>
                {
                    (props.number.map((each) => {
                        return (
                            <ul>
                                <h3>
                                    <li>mark: {each} </li>
                                </h3>
                            </ul>
                        
                        )
                    }))
                }
            </ul>
            
            <b><h1>Total Amount: $  {props.totalAmount}</h1></b>
        </div>
    )
};

export default Summary;
