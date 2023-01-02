import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
export const slides = [
  {
    key: 1,
    title: "title1",
    description: Translate(LocaleKeys.slidersIntro.firstSliderDesc),
    image: require("../../assets/images/car-retal-form.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    description: Translate(LocaleKeys.slidersIntro.secSliderDesc),

    image: require("../assets/images/travel-destination.png"),
    backgroundColor: "#febe29",
  },
];
