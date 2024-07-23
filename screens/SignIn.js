import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;

const TopFrame = styled.View`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20%;
`;

const BottomFrame = styled.View`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const SignInBtn = styled.TouchableOpacity`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: white;
`;

const IconArea = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.View`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;

const SignIn = () => {
  const navigation = useNavigation();

  return ( 
    <Container>
      <TopFrame>
        <Text style={{fontSize:25, color:"white", fontWeight:"900"}}>안녕하세요</Text>
        <Text style={{fontSize:25, color:"white", fontWeight:"900"}}>손 안의 작은 수의사 오이소 입니다</Text>
        <LottieView
          style={{
            width: "60%",
            height: "60%"
          }}
          source={require('../assets/signUpLottie.json')}
          autoPlay
          loop={true}
        />

      </TopFrame>
      <BottomFrame>
        <SignInBtn
          onPress={()=> navigation.navigate("Home")}
        >
          <IconArea><Icon name="call" size={20} color="black" style={{ marginRight: 10 }} /></IconArea>
          <TextArea><Text style={{fontSize:20, color:"black"}}>전화번호 로그인</Text></TextArea>
        </SignInBtn>
        {/* <SignInBtn>
          <IconArea><Icon name="mail" size={20} color="black" style={{ marginRight: 10 }} /></IconArea>
          <TextArea><Text style={{fontSize:20, color:"black"}}>이메일 로그인</Text></TextArea>                    
        </SignInBtn> */}
        <Text style={{color:"gray"}}>_________________ 또는 _________________</Text>
        <SignInBtn style={{backgroundColor:"yellow"}}>
          <IconArea><Icon name="chatbubble" size={20} color="black" style={{ marginRight: 10 }} /></IconArea>
          <TextArea><Text style={{fontSize:20, color:"black"}}>카카오톡 로그인</Text></TextArea>   
        </SignInBtn>
        <SignInBtn style={{backgroundColor:"white"}}>
          <IconArea><Icon name="logo-google" size={20} color="black" style={{ marginRight: 10 }} /></IconArea>
          <TextArea><Text style={{fontSize:20, color:"black"}}>구글아이디 로그인</Text></TextArea>
        </SignInBtn>
          <Text onPress={()=> navigation.navigate("SignUp")}>회원가입하기</Text>
      </BottomFrame>
    </Container>
  );
};

export default SignIn;