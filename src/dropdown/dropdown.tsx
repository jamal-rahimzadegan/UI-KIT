import { ReactNode, useReducer } from 'react';
import { useDismiss } from '@src/hooks';
import { StyledSelect } from './style';

type OptionItem = { label: string; value: any };
type State = { isOpen: boolean; targetItem: OptionItem | null };

interface Props {
  options: Array<OptionItem>;
  onSelect: (value: OptionItem) => void;
  height?: string;
  width?: string;
  className?: string;
  title?: string | ReactNode;
}

export default function Select(props: Props) {
  const { onSelect, options, title, ...restProps } = props;
  const dropdownId = `dropdown-${options?.[0]?.label ?? ''}`;
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    {
      isOpen: false,
      targetItem: null
    }
  );

  const newTitle = (() => {
    if (state?.targetItem) return state.targetItem.label;
    if (title) return title;
  })();

  // A custom hook to close the drop down on clicking outside of it.
  useDismiss(
    {
      id: dropdownId,
      isActive: state.isOpen
    },
    () => {
      setState({
        isOpen: false
      });
    }
  );

  const selectItem = (item: OptionItem) => {
    onSelect(item);
    setState({
      isOpen: false,
      targetItem: item
    });
  };

  return (
    <StyledSelect id={dropdownId} {...restProps}>
      <button onClick={() => setState({ isOpen: !state.isOpen })}>
        {newTitle}
        {state.isOpen ? <Arrow dir="up" /> : <Arrow dir="down" />}
      </button>
      {state.isOpen && (
        <ul>
          {options.map((item) => (
            <li key={item.value} onClick={() => selectItem(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
}

function Arrow({ dir }: { dir: 'up' | 'down' }) {
  return (
    <svg
      transform={`rotate(${dir === 'up' ? -180 : 0})`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}
