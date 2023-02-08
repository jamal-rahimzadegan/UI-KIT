import D from "./style";
import CONSTANTS from "./constants";

export interface Props {
    isOpen: boolean;
    toggleVisibility: Function;
}

interface LinkProps {
    onSelect: (cb?: Function) => void
    links: Links[]
}

export type Links = {
    title: string,
    route: string,
    cb?: Function
}

export default function Drawer(props: Props): JSX.Element {
    const {isOpen, toggleVisibility} = props;

    const handleSelect = (cb?: Function) => {
        toggleVisibility();
        cb?.();
    };

    return (
        <D.Wrapper isOpen={isOpen}>
            <LinksList onSelect={handleSelect} links={CONSTANTS.LINKS}/>
        </D.Wrapper>
    );
}

function LinksList(props: LinkProps): JSX.Element {
    const {onSelect, links} = props

    return (
        <D.LinksContainer>
            {links.map(({cb, title}) => (
                <li>
                    <D.Link onClick={() => onSelect(cb)}>{title}</D.Link>
                </li>
            ))}
        </D.LinksContainer>
    )
}
