import * as React from 'react';

import { useAllLocalesListQuery } from '@/graphql/graphql';

interface Props {}
const LocalesList: React.FC<Props> = ({}) => {
  const { data } = useAllLocalesListQuery({});
  return (
    <div>
      {data &&
        data.locale.map((locale) => (
          <div key={locale.locale}>{locale.name}</div>
        ))}
    </div>
  );
};

export default LocalesList;
