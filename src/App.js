import { useState } from 'react';
import './App.css';
  

function App() {
  const [text, setText] = useState('')

  const handleChange = ({ target }) => {
    setText(target.value)
  }

  const arr = [
    [,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,],
    [,,,,,,,,,,,,],
    [,,,,,,,,,,,],
    [,,]
  ];

  return (
    <div className='app'>
      <div className='header'>
        <p className='title'>Touch Typing Training</p>
        <input type="text" lang="en" className="blur" autoComplete='off' spellCheck='false' value={text} onChange={handleChange}/>
      </div>

      <hr className='divider'/>
    </div>
  );
}

export default App;

