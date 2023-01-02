import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SvgArrow(props: SvgProps) {
  return (
    <Svg
      width={props.width || 17}
      height={props.width || 12}
      viewBox="0 0 21 12"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0757 1.90912L18.2575 0.0909424L10.0757 8.27276L1.89387 0.0909424L0.0756836 1.90912L10.0757 11.9091L20.0757 1.90912Z"
        fill="rgb(143,156,172)"
      />
    </Svg>
  );
}
export default SvgArrow;
