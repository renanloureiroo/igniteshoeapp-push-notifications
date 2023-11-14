import { useTheme } from "native-base";
import * as Linking from "expo-linking";
import {
  DefaultTheme,
  LinkingOptions,
  NavigationContainer,
} from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["igniteshoesapp://", "com.renanloureiro.igniteshoes://"],
  config: {
    screens: {
      details: {
        path: "details/:productId",
        parse: {
          productId: (productId: string) => productId,
        },
      },
    },
  },
};

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const deepLinking = Linking.createURL("details", {
    queryParams: {
      productId: "7",
    },
  });

  console.log(deepLinking);

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
}
