import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Modal from "react-native-modal";
import Postcode from "@actbase/react-daum-postcode";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;

const TopFrame = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BottomFrame = styled.View`
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputArea = styled.TextInput`
  width: 90%;
  height: 10%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
`;

const PrevButton = styled.TouchableOpacity`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const NextButton = styled.TouchableOpacity`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 20px;
`;

const SignUp = () => {
  const navigation = useNavigation();
  const [inputArray, setInputArray] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const ButtonAction = () => {
    if (inputArray === 3) {
      navigation.navigate("SignIn");
      SendInfo();
      setInputArray(0);
      setName("");
      setPhoneNumber("");
      setPostalCode("");
      setLocation("");
    } else {
      setInputArray(inputArray + 1);
      console.log(postalCode);
    }
  };

  const postalCodeSearch = () => {
    setModalVisible(true);
  };

  const SendInfo = async () => {
    try {
      const response = await axios.post("http://localhost:8080/sendInfo", {
        name,
        phoneNumber,
        postalCode,
        location
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ width:"100%", height:"100%"}} 
      >
        <Postcode
          style={{ width: "90%", height: "60%" }}
          jsOptions={{ animation: false, hideMapBtn: false }}
          onSelected={data => {
            console.log(data);
            setPostalCode(data.zonecode);
            setModalVisible(false);
          }}
        />
      </Modal>
      <TopFrame>
        <Text style={{ fontSize: 30, marginTop: "20%" }}>회원 정보 입력</Text>
        <LottieView
          style={{ width: "60%", height: "30%" }}
          source={require('../assets/cow.json')}
          autoPlay
          loop
        />

        {inputArray === 0 && (
          <>
            <Text style={{ fontSize: 20, color: "gray" }}>간단하게 몇가지 정보만 알려주세요!</Text>
            <InputArea
              placeholder="이름을 입력해 주세요"
              onChangeText={text => {
                setName(text);
                console.log('Name:', text);
              }}
            />
          </>
        )}
        {inputArray === 1 && (
          <>
            <Text style={{ fontSize: 20, color: "gray" }}>전화번호를 입력해 주세요!</Text>
            <InputArea
              placeholder="전화번호를 입력해 주세요"
              onChangeText={text => {
                setPhoneNumber(text);
                console.log('Phone Number:', text);
              }}
            />
          </>
        )}
        {inputArray === 2 && (
          <>
            <Text style={{ fontSize: 20, color: "gray" }}>우편번호를 찾아주세요!</Text>
            <NextButton onPress={postalCodeSearch} style={{ width: "90%", height: "10%", backgroundColor: "lightsalmon" }}>
              <Icon name="search1" size={30} />
              <Text style={{ fontSize: 25 }}>우편번호 찾기</Text>
            </NextButton>
          </>
        )}
        {inputArray === 3 && (
          <>
            <Text style={{ fontSize: 20, color: "gray" }}>상세한 농가 위치를 입력해 주세요!</Text>
            <InputArea
              placeholder="마을 입구 기준 오른쪽 네번째 빨간 기와집"
              onChangeText={text => setLocation(text)}
            />
          </>

        )}
      </TopFrame>
      <BottomFrame>
        {(inputArray !== 0 && inputArray !== 3) && (
          <PrevButton onPress={() => setInputArray(inputArray - 1)}>
            <Icon name="caretleft" size={40} />
            <Text style={{ fontSize: 25 }}>이전</Text>
          </PrevButton>
        )}
        {(inputArray === 0 && name.length >= 2) && (
          <NextButton onPress={ButtonAction} style={{ width: "100%", backgroundColor: "lightsalmon" }}>
            <Text style={{ fontSize: 25 }}>다음</Text>
          </NextButton>
        )}
        {(inputArray === 1 && phoneNumber.length >= 10) && (
          <NextButton onPress={ButtonAction}>
            <Text style={{ fontSize: 25 }}>다음</Text>
            <Icon name="caretright" size={40} />
          </NextButton>
        )}
        {inputArray === 2 && postalCode !== "" && (
          <NextButton onPress={ButtonAction}>
            <Text style={{ fontSize: 25 }}>다음</Text>
            <Icon name="caretright" size={40} />
          </NextButton>
        )}
        {inputArray === 3 && (
          <View style={{ width: "100%", height: "100%", display: "column", alignItems: "center", justifyContent: "space-around" }}>
            <NextButton onPress={ButtonAction} style={{ width: "100%", backgroundColor: "lightsalmon" }}>
              <Text style={{ fontSize: 25 }}>회원가입</Text>
            </NextButton>
            <Text onPress={() => setInputArray(inputArray - 1)}>이전으로 돌아가기</Text>
          </View>
        )}
      </BottomFrame>
    </Container>
  );
};

export default SignUp;
