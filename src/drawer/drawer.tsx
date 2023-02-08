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
        <D.Wrapper aria-expanded={isOpen}>
            <LinksList onSelect={handleSelect} links={CONSTANTS.LINKS}/>
        </D.Wrapper>
    );
}

function LinksList(props: LinkProps): JSX.Element {
    const {onSelect, links} = props
    const currentRout = "/home" // NOTE: handle it as your need

    const checkIsOnCurrentRoute = (route: string) => currentRout === route ? "page" : ""

    return (
        <D.LinksContainer>
            {links.map(({route, cb, title}) => (
                <li>
                    <D.Link aria-current={checkIsOnCurrentRoute(route)}
                            onClick={() => onSelect(cb)}>{title}</D.Link>
                </li>
            ))}
        </D.LinksContainer>
    )
}
