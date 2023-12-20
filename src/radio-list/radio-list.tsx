import { RadioContainer } from './style';

interface Props {
  data: Array<{ label: string; value: string | number }>;
  onChange: (value: string) => void;
  className?: string;
  labelColor?: string;
  labelSize?: string;
}

export default function RadioList(props: Props): JSX.Element {
  const { data, onChange, labelSize, labelColor, className = '' } = props;

  if (!data?.length) return <></>;

  return (
    <form className={className}>
      {data.map(({ value, label }) => (
        <RadioContainer key={value} labelSize={labelSize} labelColor={labelColor}>
          <input
            type="radio"
            value={value}
            name={label}
            onChange={(e) => onChange(e.target.value)}
          />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </form>
  );
}
