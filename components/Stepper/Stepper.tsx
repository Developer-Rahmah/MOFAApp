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
        {content.map((_, i) => {
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
                    ━━━━
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
                    ━━━━
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
      {showButton && (
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
      )}
    </View>
  );
};

export default Stepper;
