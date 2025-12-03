import React, { useEffect, useState } from 'react'

function TimeComp() {
    const [currentTime,  setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() =>  {
        const interval = setInterval(() => {
            const date = new Date().toLocaleTimeString();
            setTime(date.split(':').slice(0, 2).join(':'));
        },[]);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className='dev1'>
      <h3>welcome to react</h3>
      <span>Current Time : {currentTime}</span>
    </div>
  )
}

export default TimeComp

