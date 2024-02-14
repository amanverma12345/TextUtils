import React from 'react'

function Alerts(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '40px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalize(props.alert.type)}: {props.alert.msg}
      
    </div>
    </div>}
    </div>
  )
}

export default Alerts
