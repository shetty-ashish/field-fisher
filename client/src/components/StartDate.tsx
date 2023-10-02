// Step2.tsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface StartDateProps {
  modalStep: () => void;
  onNext: (startDate: string) => void;
}

const StartDate: React.FC<StartDateProps> = ({ modalStep, onNext }) => {
  const [startDate, setStartDate] = useState("");

  const handleNext = () => {
    onNext(startDate);
  };

  return (
    <div>
      <h3>Start Date</h3>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Button
        size="sm"
        onClick={() => {
          handleNext();
          modalStep();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default StartDate;
