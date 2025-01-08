import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log({ result });
}

This code snippet is designed to open a URL in the user's default browser using Expo's WebBrowser API.  However, on some Android devices, particularly those with certain custom ROMs or configurations, the browser might not open correctly, resulting in no visible action.  The `result` object may show success, but the URL is not actually loaded.  This inconsistency across Android devices is difficult to diagnose and reproduce consistently.