import A from "./style";

interface Props {
  userName: string;
  img: string;
  size?: number;
  className?: string;
}

function Avatar(props: Props): JSX.Element {
  const { img, userName, className = "", size = 50 } = props;
  const hasImg = !!img;

  const trimmedName: string = (() => {
    return userName
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("");
  })();

  return (
    <A.Container className={className} hasImg={hasImg} size={size}>
      {hasImg ? <img src={img} alt={trimmedName} /> : <p>{trimmedName}</p>}
    </A.Container>
  );
}
