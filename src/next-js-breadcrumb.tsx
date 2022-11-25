type BreadCrumbItemsType = { title: string; href: string }[];

export default function Breadcrumb(): JSX.Element {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbItemsType>([]);

  const handleBreadCrumb = () => {
    if (router) {
      let splicedPath = router.asPath.split('/');
      splicedPath.shift();

      let pathList = splicedPath.map((path, i) => {
        return {
          title: document.title,
          href: '/' + splicedPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathList);
    }
  };

  const handlePathName = (title) => {
    const path = title.replaceAll('/', '');
    switch (path) {
      case 'static name of page':
        return 'it is a correspond to static title';
      default:
        return '';
    }
  };

  const navigate = (route) => router.push(route);

  useEffect(handleBreadCrumb , [router]);

  return breadcrumbs ? (
    <div className="d-flex align-items-center">
      <p onClick={() => navigate('/')}>home</p>
      {breadcrumbs.map((item, i) => {
        return item.title !== 'homepage title goes here' ? ( // exclude your homepage if you have a button that goes to home page by this condition
          <>
            <p className="mx-1">-</p>
            <p onClick={() => navigate(item.href)} key={item.href}>
              {i === breadcrumbs.length - 1 ? item.title : handlePathName(item.href)}
            </p>
          </>
        ) : null;
      })}
    </div>
  ) : null;
}
