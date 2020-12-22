import React, { useEffect } from "react";
import {
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
} from "react-native";
import {
  PRIMARY_COLOR,
  FONT_SIZE_ICON,
  DURATION_TIME_LENGTH,
  MIN_SCALING_ICON,
  MAX_SCALING_ICON,
  DURATION_SCALING_ICON,
  SECONDARY_COLOR,
  DELAY_SCALING_TIME,
} from "../config/Consistent";
import stylesNav from "../style/stylesNav";
import IconsBottomNavigation from "./IconsBottomNavigation";

function NavItemBottom({
  descriptors,
  state,
  index,
  route,
  navigation,
  itemsNum,
}) {
  const isFocused = state.index === index;
  let PART_WIDTH = Dimensions.get("screen").width / itemsNum;
  const fontIsFocusOrNot = isFocused ? PRIMARY_COLOR : SECONDARY_COLOR;
  const lineAnimation = new Animated.Value(-PART_WIDTH);
  const IS_VISIBLE = isFocused ? 1 : 0;
  const labelAnimation = new Animated.Value(1);

  const { options } = descriptors[route.key];

  const onPing = () => {
    labelAnimation.setValue(1);
    if (isFocused)
      Animated.timing(labelAnimation, {
        delay: DELAY_SCALING_TIME,
        toValue: MAX_SCALING_ICON,
        duration: DURATION_SCALING_ICON,
        useNativeDriver: true,
        easing: Easing.cubic,
      }).start(() => onReturnScaling());
    // }, 1000);
  };
  const onReturnScaling = () => {
    if (isFocused)
      Animated.timing(labelAnimation, {
        toValue: MIN_SCALING_ICON,
        duration: 200,
        useNativeDriver: true,
      }).start(() => onPing());
  };
  const startWidth = () => {
    console.log("animation start>>>");
    Animated.timing(lineAnimation, {
      toValue: 0,
      duration: DURATION_TIME_LENGTH,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    if (isFocused) {
      startWidth();
      onPing();
    }
    // if (!isFocused) clearWidth();
  }, [isFocused]);

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;
  return (
    <TouchableOpacity onPress={onPress} style={stylesNav.containerItemNav}>
      <Animated.View
        style={[
          stylesNav.LineNavItem,
          {
            transform: isFocused ? [{ translateX: lineAnimation }] : [],
            opacity: IS_VISIBLE,
          },
        ]}
      />
      <Animated.View
        style={{
          alignItems: "center",
          transform: [{ scale: labelAnimation }],
        }}
      >
        <IconsBottomNavigation
          label={label}
          fontIsFocusOrNot={fontIsFocusOrNot}
        />
        <Text
          style={{
            textAlign: "center",
            color: fontIsFocusOrNot,
            fontWeight: isFocused ? "bold" : "100",
            fontSize: FONT_SIZE_ICON,
          }}
        >
          {label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
export default NavItemBottom;
