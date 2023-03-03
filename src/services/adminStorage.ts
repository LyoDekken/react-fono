/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Preferences } from '@capacitor/preferences';

export async function setStorage(key: string, value: unknown) {
  await Preferences.set({
    key,
    value: JSON.stringify(value),
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStorage(key: string) {
  const { value } = await Preferences.get({ key });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(value!);
}

export async function getToken() {
  const { value } = await Preferences.get({ key: 'dadosLogin' });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const dadosLogin = JSON.parse(value!);
  return dadosLogin.accessToken;
}

export async function removeStorage(key: string) {
  await Preferences.remove({ key });
}
