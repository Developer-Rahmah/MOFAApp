import React from "react";
import Svg, { G, Polyline, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const SvgBack: React.FC<SvgProps> = (props) => (
  <Svg width="9px" height="15px" viewBox="0 0 9 15" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="upcoming-events"
        transform="translate(-30.000000, -60.000000)"
        stroke={props.fill || "#798EB5"}
        strokeWidth={2}
      >
        <G id="Group-2" transform="translate(32.000000, 51.000000)">
          <Polyline
            id="back"
            points="6.32192796 23.1875633 0 16.8656353 6.32192796 10.5437074"
          />
        </G>
      </G>
    </G>
  </Svg>
);
