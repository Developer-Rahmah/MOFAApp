import { useEffect, useState } from "react";
import {
  FlatList,
  I18nManager,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../../components/Text/Text";
import styles from "./styles";
// import { slides } from "helpers/slides";
import { commonStyles } from "lib/constants";
import { getSlideIndexForHorizontalList } from "helpers/general";
import { LocaleKeys, Translate } from "localization";
import { useNavigation } from "@react-navigation/native";
import Routes from "routes/Routes";
import SkipAr from "../../assets/svgs/skip-ar.svg";
import SkipEn from "../../assets/svgs/skip-en.svg";
import Footer from "../../assets/svgs/footer.svg";
import DotsSlider from "components/dotsSlider/dotsSlider";
import SliderListItem from "components/sliderListItem";

function SlidersIntroScreen() {
  const navigation = useNavigation();
  const slides = [
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

      image: require("../../assets/images/travel-destination.png"),
      backgroundColor: "#febe29",
    },
  ];

  //state
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {}, [activeSlide]);

  const _keyExtractor = (item: any) => item.title;
  /**
   * Handles on scroll end.
   */
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveSlide(getSlideIndexForHorizontalList(e));
  };

  /**
   * Renders news item.
   */
  const renderSlide = ({ item }: { item: any }) => {
    return (
      <SliderListItem
        containerStyle={commonStyles.paddingH16}
        imgUri={item.image}
        description={item.description}
      />
    );
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={[styles.slide]}>
        <View>
          <FlatList
            keyExtractor={_keyExtractor}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumScrollEnd}
            horizontal
            renderItem={renderSlide}
            data={slides}
            pagingEnabled
          />
          <View>
            <DotsSlider index={activeSlide} length={slides.length} />
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
            {I18nManager.isRTL ? <SkipAr /> : <SkipEn />}
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </>
  );
}

export default SlidersIntroScreen;
