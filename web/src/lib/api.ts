import { serverEndpoint } from './constants';

type ISend = {
  method: string,
  path: string,
  data?: any,
  token: string
  customHeaders?: Record<string, string>,
}

type IOption = {
  method: string,
  headers: Record<string, string>,
  body: any

}

async function send({ method, path, data, token, customHeaders }: ISend) {
  const opts: IOption = { method, headers: {} } as IOption;

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  if (customHeaders) {
    console.log(customHeaders);
    // opts.headers[customHeader.$1]
  }

  if (token) {
    opts.headers['Authorization'] = `Bearer ${token}`;
  }

  return fetch(`${serverEndpoint}/${path}`, opts)
    .then((r) => r.text())
    .then((json) => {
      try {
        return JSON.parse(json);
      } catch (err) {
        return json;
      }
    });
}

export function getRequest(path: string, token: string, customHeaders?: Record<string, string>) {
  return send({ method: 'GET', path, token, customHeaders });
}

export function delRequest(path: string, token: string, customHeaders?: Record<string, string>) {
  return send({ method: 'DELETE', path, token, customHeaders });
}

export function postRequest(path: string, data: any, token: string, customHeaders?: Record<string, string>) {
  return send({ method: 'POST', path, data, token, customHeaders });
}

export function putRequest(path: string, data: any, token: string, customHeaders?: Record<string, string>) {
  return send({ method: 'PUT', path, data, token, customHeaders });
}