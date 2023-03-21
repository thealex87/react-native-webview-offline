# react-native-webview-offline

## Test webview offline navigation by cache

### Requirements

- [Java SDK](https://www.oracle.com/java/technologies/downloads/)
- [Node.js with NPM](https://nodejs.org/en/download)

---

### Run the project

1. Install project dependencies: `npm install`
2. Install global expo-cli: `npm install --global expo-cli`
3. Start app running `expo start`

Choose how to open the app (web, android, ios).

To open the app on your mobile device, follow these steps:

1. Open your device settings;
2. Enable developer options, then enable usb debugging option;
3. Install **Expo Go** app in your device:
   - [iOS](https://apps.apple.com/br/app/expo-go/id982107779)
   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
4. Connect the device with a usb cable;
5. After connecting the usb cable, scan the qr code, or open the device's browser and enter the address entered in the console. Example: exp://192.168.0.101:19000.

---

## Generating apk file (instalation package)

To generate the APK file (for Android) and install it on your device, follow these steps:

1. Install the EAS CLI: `npm install -g eas-cli`
2. Create build: `eas build -p android --profile preview`
3. Enter your [Expo](https://expo.dev) username/password
4. Wait for the build to complete
5. After the build is complete, download the generated APK and install it on your device or emulator
