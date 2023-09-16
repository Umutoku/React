import React from "react";
import { createRoot } from 'react-dom/client';

function getButtonText()
{
    return 'Hi there';
}

const App = ()=> {
    const buttonText = {text:'submit'};
    const style = {backgroundColor: 'blue', color: 'white'};
    return(
        <div>
            <label htmlFor="name" className="label">enter e-mail</label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
        </div>  
    )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);