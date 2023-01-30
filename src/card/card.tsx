import CardWrapper from "./style";

type DivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type As = { as?: "section" | "div" | "article" };

export default function Card(props: DivType & As): JSX.Element {
  return <CardWrapper {...props} />;
}
