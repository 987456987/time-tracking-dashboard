// import { useState } from 'react'
import './App.css'
import profileImg from './images/image-jeremy.png'
import jsonData from "./data.json"

function App() {

  const timeframe = 'weekly'
  const dataArray = Object.values(jsonData);
  


  return (
    <>
      <main>
        <div className='profile-main'>
          <div className='profile-inner'>
            <img src={profileImg} className='profile-imge' />
            <p>Report For</p>
            <h1>Jeremy Robson</h1>
          </div>
          <input name='timeframe' type='radio' id='daily' />
          <label htmlFor='daily'>Daily</label>
          <input name='timeframe' type='radio' id='weekly' />
          <label htmlFor='weekly'>Weekly</label>
          <input name='timeframe' type='radio' id='daily' />
          <label htmlFor='monthly'>Monthly</label>
        </div>
        {dataArray.map((data) => (
          <div className='activity-main'>
            <div className='activity-inner'>
              <h2>{data.title}</h2>
              <h3>{data.timeframes[timeframe].current}</h3>
              <p>{data.timeframes[timeframe].previous}</p>
            </div>
          </div>
        ))}
        
      </main>
    </>
  )
}

export default App
