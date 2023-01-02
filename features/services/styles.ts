import {
  Colors,
  commonStyles,
  Fonts,
  getCrossElevation,
  Layout,
} from "lib/constants";
import fonts from "lib/constants/Fonts";
import { StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.twilight_blue,
    paddingTop: 77,
  },
  space: {
    height: 32,
  },

  name: {
    marginTop: 0,
    lineHeight: 80,
    color: Colors.primary,
    fontSize: 79,
    fontFamily: Fonts.black,
    letterSpacing: -3,
    ...commonStyles.crossTextAlign,
  },
  sectionTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    ...commonStyles.cossRowDirection,
  },
  sectionTitleTxt: {
    fontSize: 21,
    color: Colors.blue_zodiac,
    marginLeft: 4,
    fontFamily: Fonts.black,
  },
  topSemiCircle: {
    zIndex: -1,
    position: "absolute",
    backgroundColor: Colors.bostonBlue,
    height: semiCircleSize,
    width: semiCircleSize,
    borderRadius: semiCircleSize / 2,
    top: Layout.window.height * 0.2,
    right: -semiCircleSize * 0.6,
  },
  bottomSemiCircle: {
    zIndex: -1,
    position: "absolute",
    backgroundColor: Colors.semiCircle,
    height: semiCircleSize,
    width: semiCircleSize,
    borderRadius: semiCircleSize / 2,
    top: Layout.window.height * 0.5,
    left: -semiCircleSize * 0.6,
  },
  leftContainer: {
    alignItems: "center",
    ...commonStyles.cossRowDirection,
  },

  paddingRight: {
    paddingRight: 10,
  },
  listFooter: {
    height: 16,
    width: 16,
  },

  li: {
    padding: 16,
    backgroundColor: Colors.white,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    ...getCrossElevation(),
  },
  liFirstItem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  internalLi: {
    flexDirection: "row",
    alignItems: "center",
  },
  liRightView: {
    flex: 1,
    paddingLeft: 8,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  liLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },

  dobTxt: {
    fontSize: 14,
    color: Colors.dark_gray,
    fontFamily: Fonts.light,
  },
  title: {
    color: Colors.primary,
    fontSize: 46,
    fontFamily: fonts.bold,
    marginLeft: 5,
    marginTop: -8,
  },
  searchBarContainer: {
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 16,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  sliderContainer: {
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 112,
    width: 112,
    borderRadius: 10,
  },
  content: {
    margin: 16,
    color: Colors.black,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  desc: {
    margin: 16,
    color: Colors.primaryColor,
    fontSize: 24,
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  firstSliderContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    width: 330,
    height: 136,
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  nameSliderTxt: {
    fontFamily: Fonts.Almarai700,
    paddingStart: 12,
    fontSize: 18,
    color: Colors.white,
  },
  passportIDTxt: {
    fontFamily: Fonts.regular,
    paddingStart: 12,
    fontSize: 12,
    paddingVertical: 8,
    color: Colors.white,
  },
  idSliderTxt: {
    fontFamily: Fonts.regular,
    paddingStart: 12,
    fontSize: 12,
    color: Colors.white,
  },
  singleNeutralIDCardContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    margin: 8,
    height: 35,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  docsTxt: {
    fontFamily: Fonts.Almarai700,
    paddingStart: 12,
    fontSize: 16,

    color: Colors.black,
  },
  sliderItemContainer: {
    width: 335,
    paddingLeft: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 0,
    marginHorizontal: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  helloContainer: {
    flexDirection: "row",
  },
  helloTxt: {
    fontFamily: Fonts.Almarai700,
    paddingStart: 12,
  },
  weatherTxt: {
    fontFamily: Fonts.regular,
    paddingStart: 12,
    fontSize: 12,
  },
  slideContainer: {
    // flex: 0.3,
    paddingVertical: 20,
  },
  sliderListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  dotSlider: {
    marginTop: 16,
  },
  iconsContainer: {
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    // width: "50%",
    flexDirection: "row",
    // justifyContent: "space-around",
  },
  iconContainer: {
    width: 32,
    height: 32,
    marginEnd: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  serviceName: {
    fontSize: 12,
    color: Colors.black,
    textAlign: "center",
  },
  serviceItemContainer: {
    width: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  listHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerListTxt: {
    fontSize: 16,
    alignItems: "center",
    color: Colors.black,
    fontFamily: Fonts.Almarai700,
    padding: 10,
  },
  viewAllTxt: {
    fontSize: 14,
    color: Colors.black,
    padding: 10,
  },
  viewAllIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

// export styles as default.
export default styles;
