import React from "react";
import StyledVideo from "./styled";

type Props = Partial<HTMLVideoElement>;

export default function Video(props: Props): JSX.Element {
  return <StyledVideo {...props}>video</StyledVideo>;
}
