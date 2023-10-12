import React from 'react'

export default function CompA(props) {
  return (
    <>
    <table className='tab' border={1}>
          <tr>
            <th>Name</th>
            <th>Roll.No</th>
          </tr>
    {
      props.data.map((e,i)=>{
        return(
          <>
          <tr>
              <td>{e.name}</td>
              <td>{e.rollno}</td>
          </tr>
          
          
          </>
        )
      })
    }
    </table>

    <div><h1>CompA</h1></div>
    <h1>{typeof props.data}</h1>
  </>
 )
}