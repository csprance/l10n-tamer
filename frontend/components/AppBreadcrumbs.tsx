import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useLocaleNameByLocaleCodeQuery } from '@/graphql/graphql';

interface Props {}
const AppBreadcrumbs: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { locale } = router.query;
  const { data } = useLocaleNameByLocaleCodeQuery({
    variables: {
      localeCode: locale as string,
    },
  });
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        {router.query['project-name']}
      </Link>
      <Typography color="text.primary">{data?.locale}</Typography>
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
