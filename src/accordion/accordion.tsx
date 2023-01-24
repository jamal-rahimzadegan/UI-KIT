interface Props extends Partial<HTMLDetailsElement> {
  info: string;
}

export default function Accordion(props: Props) {
  const { title, info, ...restProps } = props;

  return (
    <details {...restProps}>
      <summary>{title}</summary>
      <p>{info}</p>
    </details>
  );
}
