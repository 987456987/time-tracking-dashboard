import { useState } from 'react'
import './App.css'
import profileImg from './images/image-jeremy.png'
import jsonData from "./data.json"

import workImg from "./images/icon-work.svg";
import playImg from "./images/icon-play.svg";
import studyImg from "./images/icon-study.svg";
import exerciseImg from "./images/icon-exercise.svg";
import socialImg from "./images/icon-social.svg";
import selfCareImg from "./images/icon-self-care.svg";

import ellipsis from "./images/icon-ellipsis.svg"

function App() {
  const dataArray = Object.values(jsonData);

  const imageMap = {
    workImg: workImg,
    playImg: playImg,
    studyImg: studyImg,
    exerciseImg: exerciseImg,
    socialImg: socialImg,
    selfCareImg: selfCareImg
  };

  const timeMap = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
  }


  const [timeframe, setTimeframe] = useState('weekly');

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };
  


  return (
    <>
      <main>
        <div className='profile-main'>
          <div className='profile-inner'>
            <img src={profileImg} className='profile-img' />
            <div className='profile-name-container'>
              <p>Report for</p>
              <h1 className='profile-name'>Jeremy Robson</h1>
            </div>
          </div>
          <div className='timeframe'>
            <input
              name='timeframe'
              type='radio'
              id='daily'
              value='daily'
              checked={timeframe === 'daily'}
              onChange={handleTimeframeChange}
            />
            <label htmlFor='daily'>Daily</label>

            <input
              name='timeframe'
              type='radio'
              id='weekly'
              value='weekly'
              checked={timeframe === 'weekly'}
              onChange={handleTimeframeChange}
            />
            <label htmlFor='weekly'>Weekly</label>

            <input
              name='timeframe'
              type='radio'
              id='monthly'
              value='monthly'
              checked={timeframe === 'monthly'}
              onChange={handleTimeframeChange}
            />
            <label htmlFor='monthly'>Monthly</label>
          </div>
        </div>
        {dataArray.map((data) => (
          <div className='activity-main'>
          <img className="activity-icon" src={imageMap[data.image]} alt='' />
            <div className='activity-inner'>
              <h2>{data.title} 
                <svg className='activity-menu' width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" /></svg>
              </h2>
              <h3>{data.timeframes[timeframe].current}hrs</h3>
              <p>{timeMap[timeframe]} - {data.timeframes[timeframe].previous}hrs</p>
            </div>
          </div>
        ))}
        
      </main>
    </>
  )
}

export default App
