interface Props extends Partial<HTMLTimeElement> {
  label: string;
}

export default function Time(props: Props) {
  const { dateTime, label } = props;
  return <time dateTime={dateTime}>{label}</time>;
}
  
<!--  Usage  -->
<Time dateTime="1492-01-01 12:00" label="My Birth" />
