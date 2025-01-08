import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log({ result });
  } catch (error) {
    console.error('WebBrowser failed:', error);
    // Fallback to Linking if WebBrowser fails unexpectedly
    let result = await Linking.openURL('https://example.com');
    console.log({result});
    if (!result) {
      console.error('Linking failed as well.');
    }
  }
}

//Additional error handling for specific error codes could be implemented here if needed.
//Refer to the Expo documentation for error code details.