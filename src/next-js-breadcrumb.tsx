import {useEffect, useState} from "react";

type BreadCrumbItemsType = { title: string; href: string }[];

export default function Breadcrumb(): JSX.Element {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbItemsType>([]);

    const handleBreadCrumb = () => {
        if (!router) return

        const splicedPath = router.asPath.split('/');
        splicedPath.shift();
        const pathList = splicedPath.map((path: string, i: number) => {
            return {
                title: document.title,
                href: '/' + splicedPath.slice(0, i + 1).join('/'),
            };
        });

        setBreadcrumbs(pathList);
    };

    const handlePathName = (title: string): string => {
        const path = title.replaceAll('/', '');

        switch (path) {
            case 'static name of page':
                return 'it is a correspond to static title';
            default:
                return '';
        }
    };

    const navigate = (route) => router.push(route);

    useEffect(handleBreadCrumb, [router]);

    return <>{
        breadcrumbs ?
            <>
                <p onClick={() => navigate('/')}>home</p>
                {breadcrumbs.map((item, i) =>
                    item.title !== 'homepage title goes here' ? ( // exclude your homepage if you have a button that goes to home page by this condition
                        <>
                            <p>-</p>
                            <button onClick={() => navigate(item.href)} key={item.href}>
                                {i === breadcrumbs.length - 1 ? item.title : handlePathName(item.href)}
                            </button>
                        </>
                    ) : null)}
            </> : null
    }</>
}
