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
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ItemFrame = styled.TouchableOpacity`
  width: 45%;
  height: 35%;
  border: 1px solid lightgray;
  background-color: lightgreen;
  border-radius: 20px;
  overflow-x: scroll;
  margin-top: 10%;
`;

const TopFrame = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  fontSize: 20px;
`;

const BottomFrame = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTopText = <Text style={{fontSize:30}}>안녕하세요 농장주님!</Text>
const HomeText = <Text>무엇을 도와드릴까요?</Text>

const HomeContent = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ItemFrame onPress={()=> navigation.navigate("Test")}>
        <TopFrame><StyledText>진료 예약하기</StyledText></TopFrame>
        <BottomFrame>
          <LottieView
            style={{
              width: "80%",
              height: "80%"
            }}
            source={require('../assets/check.json')}
            autoPlay
            loop={true}
          />
        </BottomFrame>
      </ItemFrame>
      <ItemFrame onPress={()=> navigation.navigate("DoctorCall")}>
        <TopFrame><StyledText>응급호출</StyledText></TopFrame>
        <BottomFrame>
          <LottieView
            style={{
              width: "80%",
              height: "80%"
            }}
            source={require('../assets/ambulance.json')}
            autoPlay
            loop={true}
          />
        </BottomFrame>
      </ItemFrame>
      <ItemFrame>
        <TopFrame><StyledText>진료 내역 조회</StyledText></TopFrame>
        <BottomFrame>
          <LottieView
            style={{
              width: "100%",
              height: "100%"
            }}
            source={require('../assets/search.json')}
            autoPlay
            loop={true}
          />
        </BottomFrame>
      </ItemFrame>
      <ItemFrame>
        <TopFrame><StyledText>담당 닥터 정보</StyledText></TopFrame>
        <BottomFrame>
          <LottieView
            style={{
              width: "100%",
              height: "100%"
            }}
            source={require('../assets/doctor.json')}
            autoPlay
            loop={true}
          />
        </BottomFrame>
      </ItemFrame>
    </Container>
  )
}

const Home = () => {
  return <HomeLayout Content={<HomeContent/>} HeaderTopText={HeaderTopText} HeaderBottomText={HomeText}/>
}

export default Home;