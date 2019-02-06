import React from 'react'


const Pollution = props => (
	<div>
	 {	
	 	props.city && <p>Location: 
	 		<div className='pollution'> { props.city }</div>
	 	</p> 
     }
     {
         props.pollution && <p>AQI: 
             <div className='pollution api' style={{backgroundColor: props.pollution >= 300 ? 'brown' : 
             props.pollution >= 200 ? 'purple' : 
             props.pollution >= 150 ? 'red' :
             props.pollution >= 100 ? 'orange' :
             props.pollution >= 50 ? 'yellow' : 'green'           
             }}> { props.pollution }</div>
         </p>
     }
     </div>
)

export default Pollution