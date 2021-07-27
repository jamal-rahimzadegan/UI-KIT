import React, { ReactNode } from 'react';
import { useMediaQuery } from '../../hooks';

type Props = { children: ReactNode; id?: string };

export default function CenterWrapper(props: Props): JSX.Element {
  const { children, id } = props;
  const isMobile = useMediaQuery('max-width', 480);

  const handleBreaks = () => {
    return isMobile ? 'w-100' : 'col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 align-self-center';
  };

  return (
    <div id={id} className="d-flex flex-column">
      <div className={handleBreaks()}>{children}</div>
    </div>
  );
}
