import { Fragment } from 'react';

import PackageJSON from '@/package.json';

/**
 * Just a simple way to display the application version information
 */
const AppVersion = () => <Fragment>Version: {PackageJSON.version}</Fragment>;

export default AppVersion;
