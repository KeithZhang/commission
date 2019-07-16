import { Platform } from 'react-native';
import { makeRequest } from '../http/req';

it('test makeRequest initReq is empty', () => {
  const req = makeRequest();
  expect(req).toEqual({
    method: 'GET',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8',
      credentials: 'omit', // app 不要cookie, 否则api请求失败后一直失败;
      token: '',
      Platform: Platform.OS,
      Version: ''
    }
  });
  expect(req).toMatchSnapshot();
});

it('test makeRequest initReq have headers', () => {
  const req = makeRequest({
    method: 'POST',
    headers: {
      test: 'test'
    }
  });

  expect(req).toEqual({
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8',
      credentials: 'omit', // app 不要cookie, 否则api请求失败后一直失败;
      token: '',
      Platform: Platform.OS,
      Version: '',
      test: 'test'
    }
  });

  expect(req).toMatchSnapshot();
});

it('test makeRequest setting isUpload', () => {
  const req = makeRequest(
    {
      method: 'POST',
      headers: {
        test: 'test'
      }
    },
    true
  );

  expect(req).toEqual({
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'multipart/form-data',
      credentials: 'omit', // app 不要cookie, 否则api请求失败后一直失败;
      token: '',
      Platform: Platform.OS,
      Version: '',
      test: 'test'
    }
  });

  expect(req).toMatchSnapshot();
});
