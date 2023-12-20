import { RadioContainer } from './style';

type Item = { label: string; value: string | number };

interface Props {
  data: Array<Item>;
  onChange: (value: string | number, item: Item) => void;
  className?: string;
  labelColor?: string;
  labelSize?: string;
  selected: Item['value'];
}

export default function RadioList(props: Props) {
  const { data = [], onChange, labelSize, labelColor, className = '', selected } = props;

  if (!data.length) return <></>;

  return (
    <div className={className}>
      {data.map(({ value, label }, i) => (
        <RadioContainer key={value} labelSize={labelSize} labelColor={labelColor}>
          <input
            value={value}
            type="radio"
            checked={selected === value}
            name={label}
            onChange={() => onChange(value, data[i])}
          />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </div>
  );
}
