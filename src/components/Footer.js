import React, { Fragment } from 'react'
// const Footer =({fecha}) =>{
//     return(
        
//         <footer>
//         <p>TODOS LOS DERECHOS RESERVADOS &copy; {fecha}</p>
//         </footer>
//     ) 
// }

// export default Footer

const Footer =(props) =>{
    return(
        
        <footer>
        <p>TODOS LOS DERECHOS RESERVADOS &copy; {props.fecha}</p>
        </footer>
    ) 
}

export default Footer