import styles from "./styles";
import { BigImageBG } from "components";

function NoInternetConnectionScreen() {
  return (
    <BigImageBG
      style={styles.noInternetImg}
      source={require("../../assets/images/no-internet.png")}
    />
  );
}
//export as default.
export default NoInternetConnectionScreen;
