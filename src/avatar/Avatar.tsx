import { AvatarContainer, UserImg, UserNameTitle } from "./style";

interface Props {
	img?: string;
	userName: string;
	className?: string;
}

export default function Avatar(props: Props): JSX.Element {
	const { img, userName = "", className = "" } = props;
	const shouldShowTitle = !img;

	const splitedName = (() => {
		return userName
			.split(" ")
			.map((word) => word.charAt(0))
			.slice(0, 2);
	})();

	return (
		<AvatarContainer className={className} shouldShowTitle={shouldShowTitle}>
			{shouldShowTitle ? <UserNameTitle>{splitedName}</UserNameTitle> : <UserImg src={img} />}
		</AvatarContainer>
	);
}
