import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PersonalInfo from "./Component/PersonalInfo/PersonalInfo";
import Story from "./Component/Story/Story";
import Posts from "./Component/Posts/Posts";

export default function PersonalFeed() {
  // const [userAllData, setUserAllData] = useState();

  // useEffect(() => {
  //   fetch("/data/personalFeed/personalInfoData.json")
  //     .then((res) => res.json())
  //     .then((res) => setUserAllData(res.results));
  // }, []);

  return (
    <PersonalFeedWrapper>
      <Nav />
      <Main>
        <PersonalInfo />
        <Story />
        <Posts />
      </Main>
    </PersonalFeedWrapper>
  );
}

const PersonalFeedWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
`;

const Nav = styled.nav`
  border: 1px solid black;
  height: 54px;
`;

const Main = styled.main`
  border: 1px solid yellow;
  // padding: 30px 86.5px 0px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;
