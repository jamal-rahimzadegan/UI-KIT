import T from "./style";

interface Props {
  label: string;
  children: JSX.Element;
  place?: "top" | "right" | "bottom" | "left";
  maxWidth?: number;
}

export default function Tooltip(props: Props): JSX.Element {
  const { label, children, place = "right", maxWidth = 120 } = props;

  return (
    <T.Wrapper>
      {children}
      <T.Text
        data-place={place}
        data-maxwidth={maxWidth}
        className="tooltip-text"
      >
        {label}
      </T.Text>
    </T.Wrapper>
  );
}
