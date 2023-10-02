import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import CustomerName from "./CustomerName";
import StartDate from "./StartDate";
import IsFinished from "./IsFinished";

import axios from "axios";

interface MultiStepModalProps {
  show: boolean;
  onHide: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({ show, onHide }) => {
  const [step, setStep] = useState(1);

  const [customerName, setCustomerName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  // Reset the step to 1 when the modal is hidden
  useEffect(() => {
    if (!show) {
      setStep(1);
    }
  }, [show]);

  //handle Modal
  const handleNextStep = () => {
    setStep(step + 1);
  };

  //send data to backend
  const handleSendData = async () => {
    try {
      const dataToSend = [
        {
          customerName: customerName,
          startDate: startDate,
          isFinished: isFinished,
        },
      ];
      const response = await axios.post("http://localhost:5000/api/saveData", {
        data: dataToSend,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Case</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <CustomerName
            modalStep={handleNextStep}
            onNext={(name) => setCustomerName(name)}
          />
        )}
        {step === 2 && (
          <StartDate
            modalStep={handleNextStep}
            onNext={(date) => setStartDate(date)}
          />
        )}
        {step === 3 && (
          <IsFinished
            modalFinish={onHide}
            sendData={handleSendData}
            onNext={(finished) => setIsFinished(finished)}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MultiStepModal;
