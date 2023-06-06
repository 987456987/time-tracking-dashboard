// import { useState } from 'react'
import './App.css'
import profileImg from './images/image-jeremy.png'
import jsonData from "./data.json"

import workImg from "./images/icon-work.svg";
import playImg from "./images/icon-play.svg";
import studyImg from "./images/icon-study.svg";
import exerciseImg from "./images/icon-exercise.svg";
import socialImg from "./images/icon-social.svg";
import selfCareImg from "./images/icon-self-care.svg";

function App() {

  const timeframe = 'weekly'
  const dataArray = Object.values(jsonData);

  const imageMap = {
    workImg: workImg,
    playImg: playImg,
    studyImg: studyImg,
    exerciseImg: exerciseImg,
    socialImg: socialImg,
    selfCareImg: selfCareImg
  };
  


  return (
    <>
      <main>
        <div className='profile-main'>
          <div className='profile-inner'>
            <img src={profileImg} className='profile-img' />
            <p>Report For</p>
            <h1>Jeremy Robson</h1>
          </div>
          <input name='timeframe' type='radio' id='daily' />
          <label htmlFor='daily'>Daily</label>
          <input name='timeframe' type='radio' id='weekly' />
          <label htmlFor='weekly'>Weekly</label>
          <input name='timeframe' type='radio' id='monthly' />
          <label htmlFor='monthly'>Monthly</label>
        </div>
        {dataArray.map((data) => (
          <div className='activity-main'>
          <img className="activity-icon" src={imageMap[data.image]} alt='' />
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
