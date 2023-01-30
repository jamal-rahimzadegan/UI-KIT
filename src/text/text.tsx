import TextWrapper from "./style";
// import { FONT_SIZES } from "SIZES";
// import { THEME } from "theme";

type TagType =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "span"
  | "b"
  | "strong"
  | "strong"
  | "i"
  | "em"
  | "mark"
  | "small"
  | "del"
  | "ins"
  | "sub"
  | "sup";

export interface Props extends Partial<HTMLParagraphElement> {
  // size?: keyof typeof FONT_SIZES;
  // color?: keyof typeof THEME;
  children: any;
  align?: "left" | "center" | "right";
  as?: TagType;
  numberOfLines?: number;
}

export default function Text(props: Props): JSX.Element {
  return <TextWrapper {...props} />;
}
