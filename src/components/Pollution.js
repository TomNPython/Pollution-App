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
     <table id='pollution-table'>
                <tr id='title-aqi'>
                    <th>AQI</th>
                    <th>Pollution Level</th>
                    <th>Description</th>
                </tr>
                <tr id='lowest-aqi'>
                    <td>0 - 50</td>
                    <td>Good</td>
                    <td>No Threat.</td>
                </tr>
                <tr id='lower-aqi'>
                    <td>51 - 100</td>
                    <td>Acceptable</td>
                    <td>Minimal Threat. Only dangerous for those with respiratory problems.</td>
                </tr>
                <tr id='middle-aqi'>
                    <td>101 - 150</td>
                    <td>Moderate</td>
                    <td>Unhealthy for sensitive groups. Acceptable for general public.</td>
                </tr>
                <tr id='higher-aqi'>
                    <td>151 - 200</td>
                    <td>Unhealthy</td>
                    <td>Unhealthy for all groups. Dangerous for sensitive groups.</td>
                </tr>
                <tr id='highest-aqi'>
                    <td>201 - 300</td>
                    <td>Very Unhealthy</td>
                    <td>Public health warnings. Entire population affected.</td>
                </tr>
                <tr id='danger-aqi'>
                    <td>300+</td>
                    <td>Dangerous</td>
                    <td>Health alert. Severe problems for entire population.</td>
                </tr>
            </table>
     </div>
)

export default Pollution