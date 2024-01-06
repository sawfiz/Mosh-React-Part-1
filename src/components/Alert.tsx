import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick: () => void;
}

const Alert = ({ children, handleClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default Alert;
