import Styled from "styled-components";
import Button from "./Button";

function StartGame() {
  return (
    <>
      <Container>
        <LeftSide>
          <Image src='images/dices 1.png' alt='' />
        </LeftSide>
        <RightSide>
          <Header>DICE ROLL</Header>
          <Button text={"Play Now"} link={'play'} primary={true} />
        </RightSide>
      </Container>
    </>
  );
}

const Container = Styled.div`
    display: flex;
    height: calc(100vh - 104px);
    margin: 50px 60px;
`;
const LeftSide = Styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const RightSide = Styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Image = Styled.img`
    width:90%;
`;
const Header = Styled.h1`
    font-size: 96px;
    font-weight: bold;
`;
export default StartGame;
