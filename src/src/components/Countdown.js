import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('July 19, 2023 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countdown'>
        <div className='countdown-box'><span className='time-unit'>Days</span><span>{days}</span></div>
        <div className='countdown-box'><span className='time-unit'>Hours</span><span>{hours}</span></div>
        <div className='countdown-box'><span className='time-unit'>Minutes</span><span>{minutes}</span></div>
        <div className='countdown-box'><span className='time-unit'>Seconds</span><span>{seconds}</span></div>
    </div>
  );
};

export default Countdown;