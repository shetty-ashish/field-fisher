import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface IsFinishedProps {
  modalFinish: () => void;
  sendData: () => void;
  onNext: (isFinished: boolean) => void;
}

const IsFinished: React.FC<IsFinishedProps> = ({
  modalFinish,
  sendData,
  onNext,
}) => {
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    onNext(isFinished);
  };

  return (
    <div>
      <h3>Is Finished?</h3>
      <label>
        <input
          className="px-5"
          type="checkbox"
          checked={isFinished}
          onChange={(e) => setIsFinished(e.target.checked)}
        />
        Finished
      </label>
      <Button
        size="sm"
        variant="success"
        onClick={() => {
          handleNext();
          modalFinish();
          sendData();
        }}
      >
        Finish
      </Button>
    </div>
  );
};

export default IsFinished;
