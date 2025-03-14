import {useCallback, useEffect, useState } from 'react'
import ButtonShow from './components/buttonShow'
import Posts from './components/posts'

import './App.css'




function App() {
  const [searchString, setSearchString] = useState('');
  const [someString, setSomeString] = useState('');

  const apiCall = useCallback(() => {
    console.log('Search string: ', searchString);
  }, [searchString]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);



  

  return (
    <>
      <ButtonShow />
      <Posts />
      <div>
        <label className='label'>Search:</label>
        <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      </div>
      <div>
        <label className='label'>Some:</label>
        <input type="text" value={someString} onChange={(e) => setSomeString(e.target.value)} />
      </div>
    

    </>
    
  )
}

export default App
