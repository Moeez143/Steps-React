import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Moeez" });

  // buttons working
  function previousAlert() {
    if (step > 1) setSteps((s) => s - 1);
  }
  function nextAlert() {
    if (step < 3) {
      setSteps((s) => s + 1);
      // setSteps((s) => s + 1);
    }
    // setTest({ name: "Nadeem" });
  }
  function checkOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className="close" onClick={checkOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          {/* number indicator */}
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* messages */}
          <p className="message">
            Steps {step} : {messages[step - 1]}
            {/* {test.name} */}
          </p>

          {/* buttons */}
          <div className="buttons">
            <button className="coloring" onClick={previousAlert}>
              Previous
            </button>
            <button className="coloring" onClick={nextAlert}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
