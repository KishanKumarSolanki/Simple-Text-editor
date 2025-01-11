import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearclick = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    
    return (
        <>
                    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 

                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary </h1>
                <p>{text.split(" ").length}Words and {text.length}characters</p>
                <p>{0.08 * text.split(" ").length} Mintes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}