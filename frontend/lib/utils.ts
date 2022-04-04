/**
 * A promise function that reads a file blob from a form (event.target.files[0])
 * and then returns the data from that file back as string. This is handy for
 * reading data from an SVG file for preview on the client.
 * @param file a blob coming from a form input
 */
export function readFileAsync(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      reader.result ? resolve(reader.result.toString()) : resolve('');
    };

    reader.onerror = reject;

    reader.readAsText(file);
  });
}

/**
 * Convert an Array Buffer to a string
 * @param arrayBuffer The Array Buffer to convert to string
 * @param decoderType the decoding type (Default utf-8)
 */
export function arrayBufferToString(
  arrayBuffer: ArrayBuffer,
  decoderType = 'utf-8',
): string {
  let decoder = new TextDecoder(decoderType);
  return decoder.decode(arrayBuffer);
}

/**
 * Determine whether we're on the server or not in NextJS
 */
export const isServer = () => typeof window === 'undefined';

/**
 * Get a value from local storage. Optionally create it if it doesn't already exist
 * @param key
 * @param defaultValue
 * @param setIfNotFound
 */
export const getItemLocalStorage = (
  key: string,
  defaultValue: any = null,
  setIfNotFound = true,
) => {
  if (!isServer()) {
    const val = localStorage.getItem(key);
    // No val and set if not found
    if (!val && setIfNotFound) {
      setItemLocalStorage(key, defaultValue);
      return defaultValue ? defaultValue : val;
    }
    if (!val && defaultValue) {
      return defaultValue;
    }
    return val;
  }
  return defaultValue;
};

/**
 * Add an item to localStorage if it's not the server
 * @param key The key to set
 * @param value The value to set to localStorage
 */
export const setItemLocalStorage = (key: string, value: any) => {
  if (!isServer()) {
    localStorage.setItem(key, value);
  }
};

function definedProps<T>(obj: T): { [p: string]: unknown } {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => v !== undefined),
  );
}

export function mergeDefined<Type>(a: Type, b: Type): Type {
  return { ...a, ...definedProps(b) };
}

/**
 * Given an array and a key go and filter out all the values not unique
 * @param arr An array to filter duplicates
 * @param key The key to check if it is a duplicate
 */
export function getUniqueListBy<T>(arr: Array<any>, key: string): T[] {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
