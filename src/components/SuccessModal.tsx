import "../styles/modal.css";
import React from "react";
import success from "../images/blog/success.png";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface SuccessModalProps {
  visible: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible }) => {
  const navigate = useNavigate();

  return (
    <Modal centered open={visible} footer={[]}>
      <div className="container">
        <figure className="text-center mt-5">
          <img className="align-items-center" src={success} alt="" />
        </figure>
        <Button
          className="modal-button"
          key="submit"
          type="primary"
          onClick={() => navigate("/")}
        >
          მთავარ გვერდზე დაბრუნება
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
