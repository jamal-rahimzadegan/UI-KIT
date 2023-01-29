import S from "./style";

export interface Props {
  isOpen: boolean;
  handleVisibility: Function;
}

export default function Sidebar(props: Props): JSX.Element {
  const { isOpen, handleVisibility } = props;
  const isMobile = false; // you can add mobile view as well

  const handleClicks = (cb: Function) => {
    handleVisibility();
    cb?.();
  };

  const goToHome = () => console.log(`---go home----> `);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SubMenu onClick={() => handleClicks(goToHome)}>Home</S.SubMenu>
    </S.Wrapper>
  );
}
