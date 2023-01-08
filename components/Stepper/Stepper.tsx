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
  } = props;
  const [step, setStep] = useState<number[]>([0]);
  const pushData = (val: number) => {
    setStep((prev) => [...prev, val]);
  };

  const removeData = () => {
    setStep((prev) => {
      prev.pop();
      return prev;
    });
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
                onNext();
              }}
              text={"تابع"}
              textStyle={{ lineHeight: 23 }}
            />
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
