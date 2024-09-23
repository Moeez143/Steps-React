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

  // buttons working
  function previousAlert() {
    if (step > 1) setSteps((s) => s - 1);
  }
  function nextAlert() {
    if (step < 3) {
      setSteps((s) => s + 1);
    }
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          {/* buttons */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={previousAlert}>
              <span>👆</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={nextAlert}>
              Next<span>🎬📽</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Steps {step} : {children}
    </p>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
