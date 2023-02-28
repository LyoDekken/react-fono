import { Preferences } from '@capacitor/preferences';

export async function setStorage(key: string, value: any) {
  await Preferences.set({
    key,
    value: JSON.stringify(value),
  });
}

export async function getStorage(key: string) {
  const { value } = await Preferences.get({ key });
  return JSON.parse(value!);
}

export async function getToken() {
  const { value } = await Preferences.get({ key: 'dadosLogin' });
  const dadosLogin = JSON.parse(value!);
  return dadosLogin.accessToken;
}

export async function removeStorage(key: string) {
  await Preferences.remove({ key });
}
