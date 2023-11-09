import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../../../assets/images/Logo.png";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.appName}>MatchME</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 180,
    marginBottom: 180,
  },
  appName: {
    fontSize: 50,
    marginLeft: 5,
    marginBottom: 180,
  },
});

export default ForgotPassword;
