import { useState } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  variant?: "primary" | "secondary" | "danger";
}

const Button = ({ children, variant }: Props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => { setShow(false)}
  return (
    <>
      {show && <Alert handleClick={handleClick} >My alert</Alert>}
      <button
        type="button"
        className={"btn btn-" + variant}
        onClick={() => setShow(true)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
