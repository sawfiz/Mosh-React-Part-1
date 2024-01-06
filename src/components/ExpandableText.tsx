import { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}

const ExpandableText = ({ maxChar = 10, children }: Props) => {
  const [isExpanded, setIsExpand] = useState(false);

  if (children.length <= maxChar) return <>{children}</>;

  const text = isExpanded ? children : children.substring(0, maxChar) + "...";

  return (
    <div>
      {text}
      <button onClick={() => setIsExpand(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
