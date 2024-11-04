// Countdown.js
import { useEffect, useState } from "react";

function Countdown({ today, birthday }) {
  const calculateTimeLeft = () => {
    // Calculate next birthday based on the current year
    const nextBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.day);

    // If the birthday has already passed this year, set it to next year
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate time difference in milliseconds
    const timeDifference = nextBirthday - new Date();

    // Calculate each time component
    const monthsLeft = nextBirthday.getMonth() - today.getMonth() + (nextBirthday.getFullYear() - today.getFullYear()) * 12;
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24) % 30); // Days excluding full months
    const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDifference / 1000) % 60);

    return { monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Countdown to Birthday</h1>
      <p>
        {timeLeft.monthsLeft} months, {timeLeft.daysLeft} days, {timeLeft.hoursLeft} hours, {timeLeft.minutesLeft} minutes, {timeLeft.secondsLeft} seconds left until your birthday!
      </p>
    </div>
  );
}

export default Countdown;
