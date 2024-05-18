import React,{useState} from 'react'
import './style.css'
const App=()=>{
  const [result, setResult] =useState(" ");

  const clickHandler =(event)=>{
    setResult(result.concat(event.target.value))
}
const clearDisplay =()=>{
  setResult("")
}
const calculate =()=>{
  setResult(eval(result).toString())
}
return (
  <div className='calci'>
    <input type='text' id='answer' placeholder='0' value={result} />
    <input type='button' value='1' className='button' onClick={clickHandler} />
    <input type='button' value='2' className='button' onClick={clickHandler}/>
    <input type='button' value='3' className='button'onClick={clickHandler} />
    <input type='button' value='4' className='button' onClick={clickHandler}/>
    <input type='button' value='5' className='button' onClick={clickHandler}/>
    <input type='button' value='6' className='button' onClick={clickHandler}/>
    <input type='button' value='7' className='button' onClick={clickHandler}/>
    <input type='button' value='8' className='button' onClick={clickHandler}/>
    <input type='button' value='9' className='button' onClick={clickHandler}/>
    <input type='button' value='0' className='button' onClick={clickHandler}/>
    <input type='button' value='+' className='button' onClick={clickHandler}/>
    <input type='button' value='-' className='button' onClick={clickHandler}/>
    <input type='button' value='*' className='button' onClick={clickHandler}/>
    <input type='button' value='/' className='button' onClick={clickHandler}/>
    <input type='button' value='%' className='button' onClick={clickHandler} />
    <input type='button' value='.' className='button' onClick={clickHandler}/>
    <input type='button' value='CLEAR' className='button btn'onClick={clearDisplay} />
    <input type='button' value='=' className='button btn' onClick={calculate}/>
  </div>
)
}

export default App
