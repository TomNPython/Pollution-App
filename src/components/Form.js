import React from 'react'


const Form = props => (

            <form onSubmit={props.getPollution}>
                <input className='form-input' type='text' name='city' placeholder='City...'></input>
                <button>How bad is it?</button>
            </form>
        )

export default Form