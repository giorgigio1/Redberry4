import React, {  useState } from "react";
import { Modal, Input, Button } from "antd";
import "../styles/modal.css";
import erroPicture from "../images/loginModal/error.png";
import pwichka from "../images/loginModal/pwichka.png";
import { baseApi } from "../baseAI";

interface EmailModalProps {
  visible: boolean;
  onCancel: () => void;
  loggedIn: (isLoggedIn: boolean) => void;
}

interface UserProps {
  isError: boolean;
  isSuccess: boolean;
  email: string;
}

const LoginModal: React.FC<EmailModalProps> = ({
  visible,
  onCancel,
  loggedIn,
}) => {
  const [user, setUser] = useState<UserProps>({
    isError: false,
    isSuccess: false,
    email: "",
  });

  const handleSubmit = async () => {
    try {
      await baseApi.post("/login", user);
      setUser({ ...user, isError: false, isSuccess: true });
      loggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    } catch (error) {
      setUser({ ...user, isError: true, isSuccess: false });
    }
  };

  return (
    <Modal
      centered
      title={
        <div className="modal-title">{user.isSuccess ? "" : "შესვლა"}</div>
      }
      open={visible}
      onCancel={onCancel}
      footer={[]}
    >
      <div className="container">
        {!user.isSuccess && (
          <div className="">
            <label className="modal-label">ელ-ფოსტა</label>
            <Input
              className="modal-input"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Example@redberry.ge"
              style={{
                borderColor: user.isError ? "#EA1919" : "#5d37f3",
                background: user.isError ? "#FAF2F3" : "white",
              }}
            />
          </div>
        )}

        {user.isError && (
          <div className="mt-3">
            <img src={erroPicture} alt="" />
            <span className="text-danger ml-2">ელ-ფოსტა არ მოიძებნა</span>
          </div>
        )}
        {user.isSuccess && (
          <figure className="text-center mt-5">
            <img className="align-items-center" src={pwichka} alt="" />
          </figure>
        )}
        <Button
          className="modal-button"
          key="submit"
          type="primary"
          onClick={user.isSuccess ? onCancel : handleSubmit}
        >
          {user.isSuccess ? "კარგი" : "შესვლა"}
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
