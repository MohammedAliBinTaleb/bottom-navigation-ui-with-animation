import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Search from "./Search";
import More from "./More";
import NavItemBottom from "../navigation/NavItemBottom";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={({ state, descriptors, navigation }) => {
          return (
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
          );
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "الرئيسية" }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ tabBarLabel: "مواعيدي" }}
        />
        <Tab.Screen
          name="Explore"
          component={Search}
          options={{ tabBarLabel: "اللقاءات" }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{ tabBarLabel: "المزيد" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
