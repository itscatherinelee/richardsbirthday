import { BirthdayCountdown } from "./components/Countdown";
import { DvdRichard } from "./components/DvdRichard";
import "./App.css";

function App() {

  return (
    <div>
      <BirthdayCountdown />
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
    </div>
  );
}

export default App;