import React, { useState } from "react";
import AddCaseModal from "../components/AddCaseModal";
import { Container, Button } from "react-bootstrap";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <div>
        <h1>Case Management System</h1>

        <Button variant="outline-primary" onClick={handleShowModal}>
          Add Case
        </Button>

        <AddCaseModal show={showModal} onHide={handleCloseModal} />
      </div>
    </Container>
  );
};

export default Home;
