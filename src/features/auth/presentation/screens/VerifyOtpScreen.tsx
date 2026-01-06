import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fonts from '../../../../core/theme/fonts';
import Colors from '../../../../core/theme/colors';
import { useDispatch } from 'react-redux';
import { login } from '../../state/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface User {
  id: string;
  name: string;
}


export default function VerifyOtpScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);

  const inputsRef = useRef<TextInput[]>([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const finalOtp = otp.join("");

    dispatch(login({ id: "TEMP_1", name: "User" }));
    await AsyncStorage.setItem("user", JSON.stringify({ id: "TEMP_1", name: "User" }));   // 👈 persist
    dispatch(login({ id: "TEMP_1", name: "User" }));
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      console.log("Resend OTP...");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* HEADING */}
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Please enter the 6-digit code sent to your {"\n"}
          mobile number <Text style={styles.phoneMasked}>7998900xxx</Text> for verification.
        </Text>

        {/* OTP BOXES */}
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputsRef.current[index] = ref;
              }}
              style={[styles.box, digit && styles.boxActive]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(val) => handleChange(val, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* VERIFY BUTTON */}
        <Pressable style={styles.primaryButton} onPress={handleVerify}>
          <Text style={styles.primaryText}>Verify</Text>
        </Pressable>

        {/* RESEND */}
        <Text style={styles.resend}>
          Didn’t receive any code?
          {timer === 0 ? (
            <Text style={styles.resendLink} onPress={handleResend}> Resend Again</Text>
          ) : (
            <Text style={styles.timerText}> Request new code in 0:{timer}s</Text>
          )}
        </Text>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    width: '85%',
    fontFamily: Fonts.mulishExtraBold,
    fontSize: 22,
    color: Colors.black,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.mulishRegular,
    fontSize: 14,
    textAlign: "justify",
    color: Colors.pupledark,
    marginBottom: 32,
    marginTop: 24,
    lineHeight: 20,
  },
  phoneMasked: {
    fontFamily: Fonts.semiBold,
    color: Colors.purple,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box: {
    width: 36,
    height: 36,
    borderRadius: 10,
    fontSize: 14,
    backgroundColor: Colors.otpBox,
    fontFamily: Fonts.mulishRegular,
    textAlign: "center",
    justifyContent: 'center',
    color: Colors.black,
  },
  boxActive: {
    borderColor: Colors.black,
  },
  primaryButton: {
    width: "70%",
    height: 60,
    backgroundColor: Colors.sendOtpBackground,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  primaryText: {
    fontFamily: Fonts.bold,
    color: Colors.white,
    fontSize: 16,
  },
  resend: {
    width: '85%',
    textAlign: 'center',
    marginTop: 16,
    fontFamily: Fonts.mulishExtraBold,
    fontSize: 14,
    color: Colors.black,
  },
  resendLink: {
    fontFamily: Fonts.mulishExtraBold,
    color: Colors.pupledark,
  },
  timerText: {
    fontFamily: Fonts.mulishRegular,
    color: Colors.lihtGray,
  },
});
