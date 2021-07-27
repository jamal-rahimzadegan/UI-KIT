import React from 'react';
import { Text } from 'components';

interface ListWrapperProps {
  hasData: boolean;
  hasErr?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  errMsg?: string;
  loadingMsg?: string;
  emptyMsg?: string;
}

export default function ListWrapper(props: ListWrapperProps): JSX.Element {
  const { children, hasData, hasErr, isLoading, errMsg, loadingMsg, emptyMsg } = props;

  const Msg = ({ body }) => {
    return <Text className="text-black-50 mt-2 w-100 text-center">{body}</Text>;
  };

  if (isLoading) return <Msg body={loadingMsg ?? 'Loading...'} />;

  if (hasErr) return <Msg body={errMsg ?? 'Error'} />;

  if (hasData && !!children) return <>{children}</>;
  else return <Msg body={emptyMsg ?? 'there is no item'} />;
}
