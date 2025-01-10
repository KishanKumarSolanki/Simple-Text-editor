import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearclick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = '';
        setText(newText)
    }

    const handleCopyclick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText =text.split();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy</button>

            </div>
            <div className='container my-3'>
                <h1>Your text summary </h1>
                <p>{text.split(" ").length}Words and {text.length}characters</p>
                <p>{0.08 * text.split(" ").length} Mintes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}