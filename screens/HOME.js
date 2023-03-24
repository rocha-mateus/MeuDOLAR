import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={styles.grficoIcon}
        resizeMode="cover"
        source={require("../assets/grfico.png")}
      />
      <View style={[styles.iconUpdpwn, styles.upDownFlexBox]} />
      <View style={[styles.upDown, styles.upDownFlexBox]}>
        <Image
          style={styles.iconUpdown}
          resizeMode="cover"
          source={require("../assets/iconupdown.png")}
        />
        <Text style={[styles.textoUpdown, styles.ml8]}>10,5%</Text>
      </View>
      <Text style={[styles.textCotacaodolar, styles.textoBoasVindasTypo]}>
        $5,23
      </Text>
      <Text style={[styles.textoDolaragora, styles.iconTextpTypo]}>
        DÓLAR AGORA!
      </Text>
      <Image
        style={styles.iconDolaragora}
        resizeMode="cover"
        source={require("../assets/icondolaragora.png")}
      />
      <Image
        style={[styles.buttomPerfilIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/buttomperfil.png")}
      />
      <Text style={[styles.textoBoasVindas, styles.textoBoasVindasTypo]}>
        <Text style={styles.textoBoasVindasTxt}>Bem-vindaMaria!</Text>
      </Text>
      <View style={styles.menu}>
        <Image
          style={[styles.baseMenuIcon, styles.baseIconPosition]}
          resizeMode="cover"
          source={require("../assets/basemenu.png")}
        />
        <Pressable
          style={[
            styles.buttomHome,
            styles.buttomPosition,
            styles.buttomLayout,
          ]}
        >
          <Text
            style={[
              styles.iconTextp,
              styles.textoPosition,
              styles.iconTextpTypo,
            ]}
          >
            Home
          </Text>
          <Image
            style={[styles.iconHome2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconhome2.png")}
          />
          <Image
            style={[styles.iconHome1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconhome1.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.buttomAlertas,
            styles.buttomPosition,
            styles.buttomLayout,
          ]}
        >
          <Text style={[styles.textoAlertas, styles.textoPosition]}>
            Alertas
          </Text>
          <Image
            style={[styles.iconAlertas3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconalertas3.png")}
          />
          <Image
            style={[styles.iconAlertas2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconalertas2.png")}
          />
          <Image
            style={[styles.iconAlertas1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconalertas1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.buttomAdicionar, styles.adicionarPosition]}
          onPress={() => navigation.navigate("CRIARALERTA")}
        >
          <Image
            style={[
              styles.baseAdicionarIcon,
              styles.adicionarPosition,
              styles.baseIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/base.png")}
          />
          <Image
            style={[styles.iconAdicionar, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconadicionar.png")}
          />
        </Pressable>
        <Pressable style={[styles.buttomComprar, styles.buttomPosition]}>
          <Text style={[styles.textoComprar, styles.textoPosition]}>
            Comprar
          </Text>
          <Image
            style={[styles.iconComprar, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconcomprar.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.butomVender,
            styles.buttomPosition,
            styles.buttomLayout,
          ]}
        >
          <Text style={[styles.textoVender, styles.textoPosition]}>Vender</Text>
          <Image
            style={[styles.iconVender1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconvender1.png")}
          />
          <Image
            style={[styles.iconVender11, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconvender11.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  upDownFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  textoBoasVindasTypo: {
    display: "flex",
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  iconTextpTypo: {
    fontFamily: FontFamily.caption1Medium,
    fontWeight: "500",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  baseIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  buttomPosition: {
    bottom: "25.83%",
    top: "32.5%",
    height: "41.67%",
    position: "absolute",
    overflow: "hidden",
  },
  buttomLayout: {
    width: "13.33%",
    top: "32.5%",
    height: "41.67%",
  },
  textoPosition: {
    color: Color.neutral3,
    top: 30,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    position: "absolute",
  },
  iconLayout: {
    bottom: "47.83%",
    width: "9.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  adicionarPosition: {
    top: "0%",
    position: "absolute",
  },
  grficoIcon: {
    top: 363,
    left: 11,
    width: 354,
    height: 270,
    position: "absolute",
  },
  iconUpdpwn: {
    height: "2.71%",
    width: "16.27%",
    top: "38.55%",
    right: "5.6%",
    bottom: "58.74%",
    left: "78.13%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.background3,
  },
  iconUpdown: {
    width: 7,
    height: 3,
  },
  textoUpdown: {
    color: Color.secondary2,
    textAlign: "center",
    fontFamily: FontFamily.caption1Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  upDown: {
    top: 316,
    left: 300,
    width: 46,
    flexDirection: "row",
  },
  textCotacaodolar: {
    height: "7.76%",
    width: "38.13%",
    top: "34.11%",
    left: "4.27%",
    fontSize: 48,
    lineHeight: 36,
  },
  textoDolaragora: {
    top: 252,
    left: 52,
    fontSize: FontSize.body2SemiBold_size,
    lineHeight: 20,
    color: Color.neutral2,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  iconDolaragora: {
    top: 248,
    left: 20,
    width: 25,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  buttomPerfilIcon: {
    height: "4.8%",
    width: "10.4%",
    top: "14.9%",
    right: "5.87%",
    bottom: "80.3%",
    left: "83.73%",
  },
  textoBoasVindasTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  textoBoasVindas: {
    marginTop: -286,
    top: "50%",
    left: 18,
    fontSize: 32,
    lineHeight: 37,
    width: 207,
  },
  baseMenuIcon: {
    height: "80%",
    top: "20%",
    position: "absolute",
  },
  iconTextp: {
    left: 7,
  },
  iconHome2: {
    height: "14.79%",
    width: "14.79%",
    top: "30.57%",
    right: "42.6%",
    bottom: "54.63%",
    left: "42.6%",
  },
  iconHome1: {
    height: "33.93%",
    width: "35.59%",
    top: "19.04%",
    right: "32.2%",
    bottom: "47.03%",
    left: "32.2%",
  },
  buttomHome: {
    right: "78.67%",
    left: "8%",
  },
  textoAlertas: {
    left: 4,
    fontFamily: FontFamily.caption1Regular,
  },
  iconAlertas3: {
    height: "25%",
    top: "27.17%",
    right: "46.31%",
    left: "44.29%",
  },
  iconAlertas2: {
    height: "32.33%",
    top: "19.83%",
    right: "34.03%",
    left: "56.56%",
  },
  iconAlertas1: {
    height: "16.15%",
    top: "36.02%",
    right: "58.58%",
    left: "32.02%",
  },
  buttomAlertas: {
    right: "60%",
    left: "26.67%",
  },
  baseAdicionarIcon: {
    height: "100%",
  },
  iconAdicionar: {
    height: "44.87%",
    width: "44.87%",
    top: "27.56%",
    right: "27.56%",
    bottom: "27.56%",
    left: "27.56%",
  },
  buttomAdicionar: {
    height: "43.33%",
    width: "13.87%",
    right: "43.2%",
    bottom: "56.67%",
    left: "42.93%",
  },
  textoComprar: {
    left: 2,
    fontFamily: FontFamily.caption1Regular,
  },
  iconComprar: {
    height: "36.65%",
    width: "30.54%",
    top: "12.68%",
    right: "33.9%",
    bottom: "50.68%",
    left: "35.56%",
  },
  buttomComprar: {
    width: "16%",
    right: "26.4%",
    left: "57.6%",
    top: "32.5%",
    height: "41.67%",
  },
  textoVender: {
    left: 3,
    fontFamily: FontFamily.caption1Regular,
  },
  iconVender1: {
    height: "21.32%",
    width: "24%",
    top: "14%",
    right: "34%",
    bottom: "64.68%",
    left: "42%",
  },
  iconVender11: {
    height: "27.67%",
    width: "33%",
    top: "19.5%",
    right: "33.5%",
    bottom: "52.83%",
    left: "33.5%",
  },
  butomVender: {
    right: "8.27%",
    left: "78.4%",
  },
  menu: {
    top: 693,
    left: 0,
    width: 375,
    height: 120,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HOME;
