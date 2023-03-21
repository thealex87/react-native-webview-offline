import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView, WebViewProps } from "react-native-webview";

const uri =
  "https://appdev.forsign.digital/operation/ok1Oyb941TU1gV7OZiZu0Yu51MdyN@pc8Jj*qJAmCBPo2PXhap/2023-03-07T18:44:09.4840929+00:00";

export default function App() {
  const context: WebViewProps = {
    cacheEnabled: true,
    cacheMode: "LOAD_CACHE_ELSE_NETWORK",
    source: {
      uri,
    },
  };

  context.onLoad = (e) => {
    console.log("loaded");
  };

  context.onError = (e) => {
    console.log("onError");
  };
  context.onHttpError = (e) => {
    console.log("onHttpError");
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView {...context} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
