import Wrapper from './style'

export interface Props extends Partial<HTMLDivElement> {}

export default function CenterContainer(props: Props): JSX.Element {
  return <Wrapper {...props} />
}
