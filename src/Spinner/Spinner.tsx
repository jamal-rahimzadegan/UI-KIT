import { Loading } from './SpinnerStyle';
import { DARK_THEME } from '../../assets/style/theme';

interface SpinnerProps {
  bgColor?: keyof typeof DARK_THEME;
  rippleColor?: keyof typeof DARK_THEME;
  speed?: number;
  size?: number;
  className?: string;
  height?: string;
  width?: string;
}

export default function Spinner(props: SpinnerProps) {
  return <Loading {...props} />;
}
