interface Props {
  children: string;
  variant?: "primary" | "secondary" | "danger";
  handleClick: () => void;
}

const Button = ({ children, variant, handleClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + variant} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
