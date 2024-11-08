import { useEffect, useRef } from "react";
import { BirthdayCountdown } from "./components/Countdown";
import Confetti from "./components/Confetti";

function App() {
    const isConfettiOn = useRef(false);
    useEffect(() => {
      Confetti(isConfettiOn)
    }, []);

  return (
    <div>
      <BirthdayCountdown />
    </div>
  );
}

export default App;