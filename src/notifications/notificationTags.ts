import { OneSignal } from "react-native-onesignal";

export const tagUserEmailCreate = (email: string) => {
  OneSignal.User.addEmail(email);
};
