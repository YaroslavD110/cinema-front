import * as React from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";

interface ICollapseTextProps {
  text: string;
}

export const CollapseText: React.FC<ICollapseTextProps> = props => {
  const { text } = props;
  const [ref, measure] = useMeasure();
  const [isTextVisible, setTextVisibility] = React.useState(false);
  const styles = useSpring({
    height: isTextVisible ? measure.height : 150
  });

  const toggleTextVisibility = (event: React.MouseEvent) => {
    setTextVisibility(prevValue => !prevValue);
  };

  return (
    <>
      <animated.div
        className="card__description b-description_readmore_ellipsis"
        style={{ overflow: "hidden", ...styles }}
      >
        <div ref={ref}>{text}</div>
      </animated.div>
      <div
        className="b-description_readmore_button"
        onClick={toggleTextVisibility}
      ></div>
    </>
  );
};
