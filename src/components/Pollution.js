import React from 'react'


const Pollution = props => (
	<div>
	 {	
	 	props.city && <p>Location: 
	 		<span> { props.city }</span>
	 	</p> 
     }
     {
         props.pollution && <p>AQI: 
             <span> { props.pollution }</span>
         </p>
     }
     </div>
)

export default Pollution