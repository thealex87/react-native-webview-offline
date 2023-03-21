import React, { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import TextField from "./components/TextField";

export default function App() {
  const [uri, setUri] = useState<string>("");
  const [tempUri, setTempUri] = useState<string>("");

  const handleOnChangeText = (text: string) => setTempUri(text);

  const handleOnSubmit = (e: GestureResponderEvent) => {
    const newUri = tempUri;
    setUri(newUri);
    setTempUri("");
  };

  if (!uri.length) {
    return (
      <View style={styles.formContainer}>
        <TextField
          onChangeText={handleOnChangeText}
          label={"Operação"}
          placeholder={"Digite a URL da operação"}
        />
        <Button
          disabled={!tempUri.length}
          onPress={handleOnSubmit}
          title="Continuar"
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        cacheEnabled
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        source={{ uri }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
});
