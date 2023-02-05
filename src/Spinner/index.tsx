interface props {
    bgColor?: keyof typeof YOUR_THEME;
    rippleColor?: keyof typeof YOUR_THEME;
    speed?: number;
    size?: number;
    className?: string;
    height?: string;
    width?: string;
}

export default function Spinner(props: props) {
    return <Loading {...props} />;
}
