import React, { useEffect, useState } from "react";
import { Modal, Input, Button } from "antd";
import "../styles/modal.css";
import error from "../images/loginModal/error.png";
import pwichka from "../images/loginModal/pwichka.png";
import axios from "axios";

interface EmailModalProps {
  visible: boolean;
  onCancel: () => void;
}

const LoginModal: React.FC<EmailModalProps> = ({ visible, onCancel }) => {
  useEffect(() => {
    const loginModal = async () => {
      try {
        const response = await axios.post(
          "https://api.blog.redberryinternship.ge/api/login",
          { email: "gigagiorgadze@redberry.ge" },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Bearer b45d409e8ae208855a91869bc3a54d0289d90b3cdb404ca9208e3a6e4955c004",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    loginModal();
  }, []);
  const [email, setEmail] = useState<string>("");

  const handleOk = () => {
    onCancel();
  };

  return (
    <Modal
      centered
      title={<div className="modal-title">შესვლა</div>}
      open={visible}
      onCancel={onCancel}
      footer={[]}
    >
      <div className="container">
        <div className="">
          <label className="modal-label">ელ-ფოსტა</label>
          <Input
            className="modal-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@redberry.ge"
          />
        </div>
        <div className="mt-3 d-none">
          <img src={error} alt="" />
          <span className="text-danger ml-2">ელ-ფოსტა არ მოიძებნა</span>
        </div>
        <figure className="text-center mt-5 d-none">
          <img className="align-items-center" src={pwichka} alt="" />
        </figure>
        {/* <img src={pwichka2} alt="" /> */}
        <Button
          className="modal-button"
          key="submit"
          type="primary"
          onClick={handleOk}
        >
          შესვლა
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
