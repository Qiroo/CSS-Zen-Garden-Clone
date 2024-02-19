import React, { useState, useEffect } from "react";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeOfDay() {
    const currentHour = currentTime.getHours();
    let timeOfDay;

    switch (true) {
      case currentHour >= 5 && currentHour < 12:
        timeOfDay = "morning";
        break;
      case currentHour >= 12 && currentHour < 17:
        timeOfDay = "noon";
        break;
      case currentHour >= 17 && currentHour < 20:
        timeOfDay = "afternoon";
        break;
      default:
        timeOfDay = "evening";
        break;
    }

    return timeOfDay;
  }

  return (
    <div>
      <p>
        It's currently {currentTime.toLocaleTimeString()} in the{" "}
        {getTimeOfDay()}.
      </p>
    </div>
  );
}

export default TimeDisplay;
