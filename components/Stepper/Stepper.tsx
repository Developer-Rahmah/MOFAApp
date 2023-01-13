import React, { FC, useState, ReactElement } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ScrollView,
} from "react-native";
import styles from "./styles";
import ArrowRight from "../../assets/svgs/arrow-right.svg";
import { Colors, Fonts } from "lib/constants";
import { Button } from "..";
import Modal from "react-native-modal";
import Close from "../../assets/svgs/close2.svg";
import Success from "../../assets/svgs/done.svg";

export interface StepperProps {
  active: number;
  content: ReactElement[];
  onNext: Function;
  onBack: Function;
  onFinish: Function;
  wrapperStyle?: ViewStyle;
  stepStyle?: ViewStyle;
  stepTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  showButton?: boolean;
  customizeStep?: any;
  stepTitles?: any;
  customizeBtn: any;
  navigation: any;
}

const search = (keyName: number, myArray: number[]): boolean => {
  let value = false;
  myArray.map((val) => {
    if (val === keyName) {
      value = true;
    }
  });
  return value;
};

export const Stepper: FC<StepperProps> = (props) => {
  const {
    active,
    content,
    onBack,
    onNext,
    onFinish,
    wrapperStyle,
    stepStyle,
    stepTextStyle,
    buttonStyle,
    buttonTextStyle,
    showButton = true,
    customizeStep: customizeStep,
    stepTitles,
    customizeBtn,
    navigation,
  } = props;
  const [step, setStep] = useState<number[]>([0]);
  const [visible, setVisible] = useState<boolean>(false);

  const pushData = (val: number) => {
    setStep((prev) => [...prev, val]);
  };

  const removeData = () => {
    setStep((prev) => {
      prev.pop();
      return prev;
    });
  };
  const onDone = () => {
    setVisible(false);
    navigation.goBack();
  };
  return (
    <View style={wrapperStyle}>
      <View style={styles.secWrapper}>
        {stepTitles
          ? stepTitles.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && (
                    <View style={[styles.stepWrapper, { flex: 0.2 }]} />
                  )}
                  <View
                    style={[
                      styles.step,
                      {
                        opacity: search(i, step) ? 1 : 0.3,
                        width: "20%",
                        height: 60,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      },
                      stepStyle,
                      { borderRadius: 0 },
                    ]}
                  >
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 12,
                        fontFamily: Fonts.regular,
                        textAlign: "center",
                        lineHeight: 20,
                      }}
                    >
                      {item}
                    </Text>
                    <View
                      style={{
                        height: 2,
                        opacity: search(i, step) ? 1 : 0.3,
                        backgroundColor: Colors.primaryColor,
                        width: "100%",
                        marginTop: 10,
                      }}
                    />
                  </View>
                </React.Fragment>
              );
            })
          : content.map((_, i) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && <View style={styles.stepWrapper} />}
                  <View
                    style={[
                      styles.step,
                      { opacity: search(i, step) ? 1 : 0.3 },
                      stepStyle,
                    ]}
                  >
                    {search(i, step) ? (
                      <Text
                        style={[
                          {
                            color: "white",
                          },
                          stepTextStyle,
                        ]}
                      >
                        {customizeStep ? customizeStep : "━━━━"}
                      </Text>
                    ) : (
                      <Text
                        style={[
                          {
                            color: "white",
                          },
                          stepTextStyle,
                        ]}
                      >
                        {customizeStep ? customizeStep : "━━━━"}
                      </Text>
                    )}
                  </View>
                </React.Fragment>
              );
            })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content[active]}
      </ScrollView>

      {showButton &&
        (customizeBtn ? (
          <View
            style={{
              //   position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Button
              locked={content.length - 1 === active}
              width="90%"
              style={{ alignSelf: "center" }}
              onPress={() => {
                pushData(active + 1);
                if (active == 3) {
                  setVisible(true);
                } else {
                  onNext();
                }
              }}
              text={"تابع"}
              textStyle={{ lineHeight: 23 }}
            />
            <Modal
              onBackdropPress={() => setVisible(false)}
              animationIn="fadeIn"
              isVisible={visible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View>
                    <View
                      style={{
                        justifyContent: "flex-start",
                        width: "100%",
                      }}
                    >
                      <TouchableOpacity onPress={onDone}>
                        <Close width={30} height={30} fill={Colors.black} />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Success />
                      <Text
                        style={[
                          styles.label,
                          {
                            paddingTop: 34,
                            paddingBottom: 21,
                            fontSize: 24,
                            fontFamily: Fonts.Almarai700,
                          },
                        ]}
                      >
                        تم تقديم الطلب
                      </Text>
                      <Text style={[styles.label]}>
                        طلبك لتجديد جواز السفر تم بنجاح
                      </Text>
                    </View>
                  </View>
                  {/* <Button
                    width={345}
                    onPress={onDone}
                    locked={false}
                    text={"done"}
                  /> */}
                </View>
              </View>
            </Modal>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.nextWrapper}>
              <TouchableOpacity
                disabled={content.length - 1 === active}
                style={[styles.iconContainer, buttonStyle]}
                onPress={() => {
                  pushData(active + 1);
                  onNext();
                }}
              >
                <ArrowRight />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
};

export default Stepper;
