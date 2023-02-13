import { DetailedHTMLProps, IframeHTMLAttributes } from "react";
import I from "./style";

type IframeType = DetailedHTMLProps<
  IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;

type Props = Omit<IframeType, "title"> & { title: string };

export default function Iframe(props: Props): JSX.Element {
  return <I.Wrapper {...props} />;
}
