import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface TextFieldProps extends TextInputProps {
  label: string;
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 4,
  },
  input: {
    height: 40,
    fontSize: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

const TextField = ({ label, ...inputProps }: TextFieldProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...inputProps} />
  </View>
);

export default TextField;
