import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  LING_HIEGHT_NAV,
  SECONDARY_COLOR,
} from "../config/Consistent";
const stylesNav = StyleSheet.create({
  IconStyle: { marginBottom: 5 },
  LineNavItem: {
    position: "absolute",
    top: 0,
    backgroundColor: PRIMARY_COLOR,
    width: "100%",
    height: LING_HIEGHT_NAV,
  },
  containerItemNav: {
    flex: 1,
    paddingVertical: 15,
    position: "relative",
  },
});
export default stylesNav;
