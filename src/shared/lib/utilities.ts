import dayjs from 'dayjs';

export function generateUniqueKey() {
  const timestamp = Date.now().toString(16);
  const randomNumber = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  const randomLetters = Math.random().toString(36).substring(2, 8);
  return `${timestamp}${randomNumber}${randomLetters}`;
}

export const getGuidFromPath = (obj: any, path: string): string => {
  return obj ? obj[path] : undefined;
};

function isDayjs(value: any): value is dayjs.Dayjs {
  return value instanceof dayjs;
}

export function convertDayjsProperties(object: any): any {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map((item) => convertDayjsProperties(item));
  }

  const result: any = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];

      if (isDayjs(value)) {
        result[key] = value.toISOString();
      } else {
        result[key] = convertDayjsProperties(value);
      }
    }
  }

  return result;
}

// todo как то по симпотичней сделать бы
export const addUniqueKeyToChildrens = (item: any): any => {
  if (item.childrens) {
    item.childrens = item.childrens.map((child: any) =>
      addUniqueKeyToChildrens({ key: child.uid || generateUniqueKey(), ...child }),
    );
  }
  return { key: generateUniqueKey(), ...item };
};

export function convertToString(value: string | number | symbol): string {
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'symbol') {
    return value.toString();
  } else {
    throw new Error('Invalid input type');
  }
}
