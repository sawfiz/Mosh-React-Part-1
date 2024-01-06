import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  function toggle() {
    return () => {
      setLike(!like);
      onClick();
    };
  }

  return (
    <>
      {like ? (
        <AiFillLike size="1.5rem" color="#ff6b81" onClick={toggle()} />
      ) : (
        <AiOutlineLike size="1.5rem" onClick={toggle()} />
      )}
    </>
  );
};

export default Like;
