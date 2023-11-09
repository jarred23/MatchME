import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Logo from "../../../assets/images/Logo.png";
import { appleAuth } from "@invertase/react-native-apple-authentication";

const SignIn = ({ navigation }) => {
  const handleOneButtonClick = () => {
    // Handle the press event for the "One Button" here
    // You can add your logic here
  };

  const handleAppleSignIn = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Handle the response and authenticate the user
      // You can use the appleAuthRequestResponse to obtain user data

      // Redirect to the next screen or handle successful login
    } catch (error) {
      console.log("Apple Sign-In error:", error);
      // Display an error message to the user
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.appName}>MatchME</Text>
      </View>
      <Text style={styles.bottomText}>
        By creating an account or logging in, you agree to our Terms and Privacy
        Policy
      </Text>
      <TouchableOpacity
        onPress={handleOneButtonClick}
        style={styles.buttonFirst}
      >
        <Text style={styles.buttonTextFirst}>LOG IN WITH GOOGLE</Text>
      </TouchableOpacity>
      <View style={{ height: 7 }} />
      <TouchableOpacity
        onPress={handleOneButtonClick}
        style={styles.buttonSecond}
      >
        <Text style={styles.buttonTextSecond}>LOG IN WITH APPLE</Text>
      </TouchableOpacity>
      <View style={{ height: 7 }} />
      <TouchableOpacity onPress={handleAppleSignIn} style={styles.buttonThird}>
        <Text style={styles.buttonTextThird}>LOG IN WITH NUMBER</Text>
      </TouchableOpacity>
      <View style={{ height: 7 }} />
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("ForgotPassword")}>
          Trouble logging In?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FFFF",
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
  bottomText: {
    marginBottom: 20, // Adjust the margin as needed
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  buttonFirst: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light black and transparent background
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25, // Customize the button shape
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(100px)", // Apply blur effect (note: this CSS property may not work on all platforms)
  },
  buttonTextFirst: {
    color: "black", // Customize the text color
    fontSize: 13, // Customize the text size
  },
  buttonSecond: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light black and transparent background
    paddingVertical: 15,
    paddingHorizontal: 109,
    borderRadius: 25, // Customize the button shape
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)", // Apply blur effect (note: this CSS property may not work on all platforms)
  },
  buttonTextSecond: {
    color: "black", // Customize the text color
    fontSize: 13, // Customize the text size
  },
  buttonThird: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light black and transparent background
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25, // Customize the button shape
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(100px)", // Apply blur effect (note: this CSS property may not work on all platforms)
  },
  buttonTextThird: {
    color: "black", // Customize the text color
    fontSize: 13, // Customize the text size
  },
});

export default SignIn;
