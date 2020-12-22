import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { FONT_SIZE_ICON } from "../config/Consistent";
const IconsBottomNavigation = ({ label, fontIsFocusOrNot }) => {
  const IconStyle = { marginBottom: 8 };

  switch (label) {
    case "الرئيسية":
      return (
        <FontAwesome5
          name={"home"}
          size={FONT_SIZE_ICON}
          color={fontIsFocusOrNot}
          style={IconStyle}
        />
      );
    case "المزيد":
      return (
        <FontAwesome5
          size={FONT_SIZE_ICON}
          color={fontIsFocusOrNot}
          name={"ellipsis-h"}
          style={IconStyle}
        />
      );
    case "مواعيدي":
      return (
        <FontAwesome5
          size={FONT_SIZE_ICON}
          color={fontIsFocusOrNot}
          name={"calendar-alt"}
          style={IconStyle}
        />
      );
    case "اللقاءات":
      return (
        <FontAwesome5
          size={FONT_SIZE_ICON}
          color={fontIsFocusOrNot}
          name={"handshake"}
          style={IconStyle}
        />
      );
    default:
      return <View></View>;
  }
};
export default IconsBottomNavigation;
