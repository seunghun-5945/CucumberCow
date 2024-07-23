import React from "react";
import styled from "styled-components/native";
import { Image, Text } from "react-native";
import HomeLayout from "../components/HomeLayout";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const HeaderTopText = <Text style={{fontSize:40}}>수의사 호출하기</Text>
const HeaderBottomText = <Text>지금 당장 수의사의 진료를 필요로 하시나요?</Text>

const DoctorCallContent = () => {
  return (
    <Container>
      <Image source={require("../images/grass.png")}></Image>
    </Container>
  )
}

const DoctorCall = () => {
  return <HomeLayout Content={<DoctorCallContent/>} HeaderTopText={HeaderTopText} HeaderBottomText={HeaderBottomText}/>
};

export default DoctorCall;