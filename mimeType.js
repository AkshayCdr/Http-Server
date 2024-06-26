export const conversion = {
  "application/json": {
    decode: (data) => JSON.parse(data),
    encode: (data) => JSON.stringify(data),
  },
  "text/plain": {
    decode: (data) => data,
    encode: (data) => data.toString(),
  },
  "text/html": {
    decode: (data) => data,
    encode: (data) => data,
  },
  "text/css": {
    decode: (data) => data,
    encode: (data) => data,
  },
  "image/jpeg": {
    decode: (data) => data,
    encode: (data) => data,
  },
  "text/javascript": {
    decode: (data) => data,
    encode: (data) => data,
  },
  // "multipart/form-data": {
  //   decode: (data) => data.toString(),
  //   encode: (data) => data,
  // },
  // "application/x-www-form-urlencoded": {
  //   decode: (data) => data,
  //   encode: (data) => data,
  // },
};
