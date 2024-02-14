import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = ()=>{
    //console.log("Uppercas was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!!", "success");
}
const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
    
}
const handleLoClick = ()=>{
  //console.log("Lowercas was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase!!", "success");
}
const handleCopy = ()=> {
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied!!", "success");
}
const clearExtraSpaces = ()=> {
  let newText = text.split(/[ ]+/);  //Concept of Js RegExp
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Clear!!", "success");
}
const clearOnClick = ()=>{
    setText("");
    props.showAlert("Clear space!!", "success");
}
  const [text, setText] = useState(''); 
  //text = "new text"; //Wrong way to change state
  //setText("new text"); //Correct way to change state
  return (
    <>
    <div className="container"  style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h2 className='mb-3'>{props.heading} </h2>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode === 'dark'?'#13466e':'white', 
        color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length=== 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length=== 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length=== 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>CopyText</button>
        <button disabled={text.length=== 0} className="btn btn-primary mx-2 my-1" onClick={clearExtraSpaces}>Clear ExtraSpaces</button>
        <button disabled={text.length=== 0} className="btn btn-danger mx-2 my-1" onClick={clearOnClick}>Clear</button>
    </div>
    <div className="container my-2"  style={{color :props.mode === 'dark'?'white':'#042743'}}>
      <h3>Your Text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}
