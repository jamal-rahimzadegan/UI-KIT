import { AvatarContainer, UserImg, UserNameTitle } from "./style";

interface Props {
	img?: string;
	userName: string;
	className?: string;
}

export default function Avatar(props: Props): JSX.Element {
    const {img, userName = "", className = ""} = props;
    const hasImg = !!img;

    const trimmedName = (() => {
        return userName
            .split(" ")
            .map((word) => word.charAt(0))
            .slice(0, 2);
    })();

    return (
        <AvatarContainer className={className} hasImg={hasImg}>
            {hasImg ? <UserImg src={img}/> : <UserNameTitle>{trimmedName}</UserNameTitle>}
        </AvatarContainer>
    );
}
