import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Switch,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CRIARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(false);
  const [switchOnValue, setSwitchOnValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={[styles.criarAlerta, styles.iconLayout1]}>
      <Pressable
        style={[styles.buttonSalvar, styles.cardPosition]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonSalvar1}>Salvar</Text>
      </Pressable>
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.cardBase, styles.cardBasePosition]} />
        <Switch
          style={[styles.switchOff, styles.switchLayout]}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#00ff5f" }}
        />
        <Text style={[styles.inputMenor, styles.inputTypo]}>5,19</Text>
        <Text style={[styles.textMenor, styles.textTypo3]}>
          Menor do que R$
        </Text>
        <Image
          style={[styles.iconDown, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icondown.png")}
        />
        <View style={styles.divisor} />
        <Switch
          style={[styles.maiorPosition, styles.switchLayout]}
          value={switchOnValue}
          onValueChange={setSwitchOnValue}
          thumbColor="#fff"
          trackColor={{ false: "#939393", true: "#00ff5f" }}
        />
        <Text
          style={[styles.inputMaior, styles.maiorPosition, styles.inputTypo]}
        >
          5,19
        </Text>
        <Text style={[styles.maiorPosition, styles.textTypo3]}>
          Maior do que R$
        </Text>
        <Image
          style={[styles.iconUp, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconup.png")}
        />
      </View>
      <View style={[styles.imputBase, styles.imputPosition]} />
      <TextInput
        style={[styles.imputValor, styles.imputPosition]}
        placeholder="5,18"
        keyboardType="numeric"
        placeholderTextColor="#fff"
      />
      <View style={[styles.real, styles.realLayout]}>
        <Text style={[styles.textBrl, styles.textTypo2]}>BRL</Text>
        <Text style={[styles.textReal, styles.textTypo, styles.textTypo1]}>
          Real
        </Text>
        <Image
          style={[styles.iconDolaragora, styles.cardBasePosition]}
          resizeMode="cover"
          source={require("../assets/icondolaragora1.png")}
        />
      </View>
      <Image
        style={styles.iconTransfer}
        resizeMode="cover"
        source={require("../assets/icontransfer.png")}
      />
      <View style={[styles.dolar, styles.realLayout]}>
        <Text style={[styles.textUsd, styles.textTypo2]}>USD</Text>
        <Text style={[styles.textDolar, styles.textTypo, styles.textTypo1]}>
          Dólar
        </Text>
        <Image
          style={[styles.iconDolaragora, styles.cardBasePosition]}
          resizeMode="cover"
          source={require("../assets/icondolaragora2.png")}
        />
      </View>
      <View style={styles.header}>
        <Pressable
          style={styles.iconGoback}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icongoback.png")}
          />
        </Pressable>
        <Text style={[styles.headerAdicionaralerta, styles.textTypo]}>
          Adicionar Alerta
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  cardPosition: {
    width: 336,
    left: 20,
    position: "absolute",
  },
  cardBasePosition: {
    top: 0,
    position: "absolute",
  },
  switchLayout: {
    height: 22,
    width: 40,
    left: 271,
  },
  inputTypo: {
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.caption1Medium,
    fontWeight: "500",
  },
  textTypo3: {
    left: 54,
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.caption1Medium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 13,
    position: "absolute",
    overflow: "hidden",
  },
  maiorPosition: {
    top: 18,
    position: "absolute",
  },
  imputPosition: {
    top: 277,
    position: "absolute",
  },
  realLayout: {
    height: 118,
    width: 66,
    position: "absolute",
  },
  textTypo2: {
    color: Color.neutral3,
    fontFamily: FontFamily.caption1Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    top: 102,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    color: Color.neutral5,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 36,
    fontSize: FontSize.title1SemiBold_size,
    top: 67,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  buttonSalvar1: {
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.caption1Medium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
  },
  buttonSalvar: {
    top: 511,
    borderRadius: Border.br_xs,
    height: 48,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
  },
  cardBase: {
    borderRadius: 20,
    backgroundColor: Color.background3,
    width: 331,
    left: 0,
    height: 112,
  },
  switchOff: {
    top: 72,
    position: "absolute",
  },
  inputMenor: {
    left: 173,
    top: 72,
    position: "absolute",
  },
  textMenor: {
    top: 72,
    position: "absolute",
  },
  iconDown: {
    top: 72,
  },
  divisor: {
    top: 56,
    left: 16,
    borderStyle: "solid",
    borderColor: "#494d58",
    borderTopWidth: 0.5,
    width: 296,
    height: 1,
    position: "absolute",
  },
  inputMaior: {
    left: 169,
  },
  iconUp: {
    top: 16,
  },
  card: {
    top: 369,
    height: 112,
  },
  imputBase: {
    left: 241,
    width: 2,
    height: 52,
    backgroundColor: Color.primary,
  },
  imputValor: {
    left: 146,
    fontSize: 48,
  },
  textBrl: {
    left: 24,
    textAlign: "center",
  },
  textReal: {
    left: 6,
    textAlign: "center",
  },
  iconDolaragora: {
    left: 4,
    width: 60,
    height: 62,
    overflow: "hidden",
  },
  real: {
    top: 123,
    left: 222,
  },
  iconTransfer: {
    top: 178,
    left: 174,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  textUsd: {
    left: 22,
    textAlign: "left",
  },
  textDolar: {
    left: 0,
    textAlign: "left",
  },
  dolar: {
    top: 122,
    left: 87,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconGoback: {
    left: "6.23%",
    top: "38.03%",
    right: "89.16%",
    bottom: "38.03%",
    width: "4.61%",
    height: "23.93%",
    position: "absolute",
  },
  headerAdicionaralerta: {
    top: 8,
    left: 113,
    textAlign: "center",
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
  },
  header: {
    top: 44,
    width: 375,
    height: 40,
    left: 0,
    position: "absolute",
  },
  criarAlerta: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default CRIARALERTA;
