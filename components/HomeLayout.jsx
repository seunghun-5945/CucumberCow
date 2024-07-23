import React from "react";
import styled from "styled-components/native";
import { Image, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Header = styled.View`
  width: 100%;
  height: 30%;
  background-color: lightgreen;
  border-radius: 0px 0px 25px 25px;
  border: 1px solid lightgray;
`;

const HeaderTop = styled.View`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Underline = styled.View`
  width: 60%;
  height: 2px;
  background-color: black;
  bottom: 1px;
  margin-top: 5%;
`;

const HeaderBottom = styled.View`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Main = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HomeLayout = ({ Content, HeaderTopText, HeaderBottomText  }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTop>
            {HeaderTopText}
          <Underline/>
        </HeaderTop>
        <HeaderBottom>
          {HeaderBottomText}
          {/* <Image style={{height:100, opacity:0.5, borderRadius:"50px"}} source={require("../images/grass.png")}></Image> */}
        </HeaderBottom>
      </Header>
      <Main>
        {Content}
      </Main>
    </Container>
  );
};

export default HomeLayout;