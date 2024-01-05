const APP_NAME = "Your App Name";
const APP_VERSION = "1.0.0";
const APP_DESCRIPTION = "My App Description";
const APP_AUTHOR = "My Name";

//Login Screen

const AUTH_TYPES = {
  EMAIL: true,
  MOBILE: true,
  EMAIL_WITH_OTP: true,
  GOOGLE_PROVIDER: false,
}; //true for enable and false for disable, Either Email or Mobile must be true

const COLORS = {
  primary: "#2E3190",
  secondary: "#444262",
  tertiary: "#312651",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  white2: "#FFFFFF",
  lightWhite: "#FAFAFC",

  tabWhite: "#EDEDED",
};

const FONT = {
  thin: "Inter_100Thin",
  extraLight: "Inter_200ExtraLight",
  light: "Inter_300Light",
  regular: "Inter_400Regular",
  medium:"Inter_500Medium",
  semiBold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extraBold: "Inter_800ExtraBold",
  black: "Inter_900Black",
  
};

const SIZES = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export {APP_NAME, COLORS, FONT, SIZES, SHADOWS,AUTH_TYPES,APP_VERSION,APP_DESCRIPTION,APP_AUTHOR };
