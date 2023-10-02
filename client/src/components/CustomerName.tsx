import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface CustomerNameProps {
  modalStep: () => void;
  onNext: (customerName: string) => void;
}

const CustomerName: React.FC<CustomerNameProps> = ({ modalStep, onNext }) => {
  const [customerName, setCustomerName] = useState("");

  const handleNext = () => {
    onNext(customerName);
  };

  return (
    <div>
      <h3> Customer Name</h3>
      <input
        type="text"
        placeholder={"Enter Customer Name"}
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
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

export default CustomerName;
