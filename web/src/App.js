import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Box } from "./components/Box/Box";

const grayBorder = css`
  border-bottom: 1px solid rgb(214, 214, 214);
`;

const lightGrayBorder = css`
  border: 1px solid rgb(231, 231, 231);
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  background-color: white;
  ${grayBorder}
`;

const Main = styled.main`
  flex: 1;
`;

const Img = styled.img`
  height: 70px;
  width: auto;
`;

const Footer = styled.footer``;

const ImgSplash = styled.img`
  height: 400px;
`;

const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoreInfo = styled.span`
  color: rgb(118, 118, 118);
  font-weight: 500;
`;

const PickupOrDeliver = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PickupTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin: 0;
  padding: 8px;
  border-radius: 8px;
  ${lightGrayBorder}
  width: 343px;
	max-width: 343px;
`;

const PickupTimeRange = styled.span`
  font-weight: 700;
  display: block;
`;

const MethodInfoBox = styled.div`
  padding: 24px;
	margin-top: 20px;
	background-color: rgb(234, 243, 245);
	text-align: center;
`

const GrayText = styled.span`
  font-size: 14px;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0ch;
  text-transform: none;
  color: rgb(118, 118, 118);
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
`;

const HR = styled.hr`
  display: block;
  width: 100%;
  margin: 0px;
  border: medium none;
  height: 1px;
  background: rgb(231, 231, 231) none repeat scroll 0% 0%;
`;

const FullMenuText = styled.span`
  font-size: 16px;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0ch;
  text-transform: none;
  color: rgb(25, 25, 25);
  margin: 0px;
  padding: 0px;
  display: block;
`;

const CategoryBar = styled.div`
  position: sticky;
  top: 70px;
  flex: 1 1 0%;
  white-space: nowrap;
  & a:not(:first-child) {
    margin-left: 24px;
  }
`;

const contentUrl =
  "https://cie-assets.nyc3.digitaloceanspaces.com/student-proj";

const menuCategories = [
  { name: "Appetizers" },
  { name: "Primi Piatti" },
  { name: "Secondi Piatti" },
  { name: "Sides" },
  { name: "Desserts" },
];

const CategoryLink = styled(Link, { shouldForwardProp: isPropValid })`
  ${(p) =>
    p.isSelectedMenuItem &&
    `
      font-weight: 700;
    `};
  font-size: 14px;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  text-decoration: none;
  line-height: 20px;
  letter-spacing: -0.04ch;
  text-transform: none;
  color: rgb(25, 25, 25);
  margin: 0px;
  margin-bottom: 12px;
  padding: 0px;
  display: inline-block;
  font-variant-ligatures: no-common-ligatures;
`;

function CategoryMenuItem({ catName, setActiveCat, activeCat }) {
  return (
    <CategoryLink
      isSelectedMenuItem={activeCat === catName}
      onClick={() => {
        setActiveCat(catName);
      }}
      to={`/#${catName}`}
    >
      {catName}
    </CategoryLink>
  );
}

function CategorySection({ catName }) {
  return <div id={catName}>{catName} I am the category section!!!</div>;
}

function CategoryBarContainer() {
  const [activeCat, setActiveCat] = useState("");

  return (
    <CategoryBar>
      {menuCategories.map((cat, idx) => {
        return (
          <CategoryMenuItem
            key={idx}
            setActiveCat={setActiveCat}
            activeCat={activeCat}
            catName={cat.name}
          />
        );
      })}
    </CategoryBar>
  );
}

const HeroContainer = styled.div`
	margin: 24px auto 0px;
	padding: 0px 16px;
  max-width: 960px;
`;


function App() {
  return (
    <AppContainer>
      <Header>
        <Img src={`${contentUrl}/Vincenzo-Italian-Pizzeria.png`} />
      </Header>
      <Main>
        <HeroContainer>
          <ImgSplash src={`${contentUrl}/pizza-splash.png`} />
          <h1>Vincenzo's Italian Pizzeria</h1>
          <StoreInfoBox>
            <StoreInfo>315 S Coast Hwy 101, Encinitas, CA 92024</StoreInfo>
            <StoreInfo>Open Hours: 10:00 AM - 11:00 PM</StoreInfo>
          </StoreInfoBox>
          <PickupOrDeliver>
            <PickupTimeBox>
              <PickupTimeRange>24 - 34 mins</PickupTimeRange>
              <GrayText>ready for pickup</GrayText>
            </PickupTimeBox>
          </PickupOrDeliver>
          <MethodInfoBox>This is a Pickup order
          You'll need to go to Vincenzo's Italian Pizzeria to pick up this order: 315 S Coast Hwy 101. 
          </MethodInfoBox>
          <HR />
          <Box mt={16}>
            <FullMenuText>Full Menu</FullMenuText>
            <GrayText>10:00 am - 11:00pm</GrayText>
          </Box>
        </HeroContainer>
        <CategoryBarContainer />
        {menuCategories.map((cat, idx) => (
          <CategorySection catName={cat.name} catNum={idx} />
        ))}
      </Main>
      <Footer>I'm a footer</Footer>
    </AppContainer>
  );
}

export default App;
