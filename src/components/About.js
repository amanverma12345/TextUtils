import React from 'react'

export default function About(props) {

  //const [myStyle, setMyStyle] = useState({
  //  color: 'black',
  //  backgroundColor: 'white'
    
 // })
 let myStyle = {
  color: props.mode ==='dark'?'white':'#042743',
  backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
  
 }
  

 
  
  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyse your text quickly and efficiently.
         Be it word count, charecter count or copying.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free charecter counter tool that provides
         instant charecter count & word count statistics for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browser such as chrome, Firefox, 
        Internet Explorer, Safari etc. It suits to count charecters in facebook, blog, books, excel documents etc.
      </div>
    </div>
  </div>
</div>
   
    
    </div>
  )
}
