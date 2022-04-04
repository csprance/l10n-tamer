import LocalizedStrings from 'react-localization';

import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from '@/constants';

export const strings = new LocalizedStrings({
  en: {
    appName: APPLICATION_NAME,
    appDescription: APPLICATION_DESCRIPTION,
    cancel: 'Cancel',
    submit: 'Submit',
    emailAddress: 'Email Address',
    name: 'Name',
    icon: 'Icon',
    mustBeUnique: 'must be unique',
    svgOnly: 'svg only',
  },
  pirate: {
    appName: APPLICATION_NAME,
    appDescription: APPLICATION_DESCRIPTION,
    cancel: 'Naye',
    submit: 'Yaye',
    emailAddress: "Ship's Email",
    name: 'Name',
    icon: 'Icon',
    mustBeUnique: 'must be shiny new booty',
    svgOnly: 'svg only',
  },
});
