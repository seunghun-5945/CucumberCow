import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import HomeLayout from "../components/HomeLayout";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListBox = styled.View`
  width: 90%;
  height: 80%;
  background-color: lightgray;
`;

const ReservationItemArea = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonArea = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReservationBtn = styled.TouchableOpacity`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: salmon;
`;

const HeaderTopText = <Text style={{fontSize:40}}>진료 예약</Text>
const HeaderBottomText = <Text>예약 진료를 확인하거나 지금 바로 예약하세요!</Text>

const TestContent = () => {
  return (
    <Container>
      <ListBox>
        <ReservationItemArea>

        </ReservationItemArea>
        <ButtonArea>
          <ReservationBtn><Text style={{fontSize: 25}}>진료 예약하기</Text></ReservationBtn>
        </ButtonArea>

      </ListBox>
    </Container>
  )
}

const Test = () => {
  return <HomeLayout Content={<TestContent/>} HeaderTopText={HeaderTopText} HeaderBottomText={HeaderBottomText}/>
}

export default Test;