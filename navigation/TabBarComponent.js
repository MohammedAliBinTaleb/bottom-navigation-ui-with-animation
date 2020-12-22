import React, { Fragment } from "react";
import { View, Text } from "react-native";

export default function TabBarComponent() {
  return (
    <Fragment>
      {({ state, descriptors, navigation }) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          {state.routes.map((route, index) => {
            return (
              <NavItemBottom
                itemsNum={state.routes.length}
                route={route}
                index={index}
                descriptors={descriptors}
                navigation={navigation}
                state={state}
              />
            );
          })}
        </View>
      )}
    </Fragment>
  );
}
