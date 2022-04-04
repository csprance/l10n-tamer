import { ReactiveVar, makeVar } from '@apollo/client';
import { isString } from 'lodash';

import { isServer } from '@/lib/utils';

const getCleanValueForStorage = (value: unknown) => {
  return isString(value) ? value : JSON.stringify(value);
};

/**
 * This function creates a Reactive Variable that is persisted in localStorage
 * Has a couple of  issues it seems like still
 *
 * @param initialValue The initial value. If it does not exist it will be created
 * @param storageName The key on where to store the value
 */
const makeVarPersisted = <T>(
  initialValue: T,
  storageName: string,
): ReactiveVar<T> => {
  let value = initialValue;
  // Can't use localStorage on the server to just return the initial val like it's a normal var
  if (isServer()) {
    return makeVar<T>(initialValue);
  }
  // Try to fetch the value from local storage
  const previousValue = localStorage.getItem(storageName);
  if (previousValue !== null) {
    try {
      const parsed = JSON.parse(previousValue);
      value = parsed;
    } catch {
      // It wasn't JSON, assume a valid value
      value = previousValue as unknown as T;
    }
  }

  // Create a reactive var with stored/initial value
  const rv = makeVar<T>(value);

  const onNextChange = (newValue: T | undefined) => {
    try {
      // Try to add the value to local storage
      if (newValue === undefined) {
        localStorage.removeItem(storageName);
      } else {
        localStorage.setItem(storageName, getCleanValueForStorage(newValue));
      }
    } catch {
      // ignore
    }

    // Re-register for the next change
    rv.onNextChange(onNextChange);
  };

  // Register for the first change
  rv.onNextChange(onNextChange);

  return rv;
};

export default makeVarPersisted;
