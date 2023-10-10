import Styled from "styled-components";
import { useState } from "react";
import Footer from "./Footer";
import DiceRoll from "./DiceRoll";
import Button from "./Button";
import Help from "./Help";

function GamePlay() {
  const number = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [errorMsg, seterrorMsg] = useState();
  const [showHelp, setshowHelp] = useState(false);

  const setselectedNumber = (value) => {
    setNumber(value);
    seterrorMsg("");
  };

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const rollDice = () => {
    if (!selectedNumber) {
      seterrorMsg("Please select a number");
      return;
    }
    const number = Math.floor(getRandomArbitrary(1, 7));
    setCurrentDice(() => number);
    console.log(number);
    if (selectedNumber == number) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - selectedNumber);
    }
    setNumber(undefined);
    return number;
  };

  const resetScore = () => {
    setScore(0);
  };
  const toggleHelp = () => {
    setshowHelp((prev) => !prev);
  };

  return (
    <Container>
      <Footer />
      <Heading>
        <Score>
          <h1>{score}</h1>
          <p>Total Score</p>
        </Score>
        <FirstBoxContainer>
          <ErrorSection>
            <p>{errorMsg}</p>
          </ErrorSection>
          <BoxContainer>
            {number.map((i) => (
              <Box
                $isselected={i === selectedNumber}
                key={i}
                onClick={() => setselectedNumber(i)}
              >
                {i}
              </Box>
            ))}
          </BoxContainer>
          <div>
            <p>Selected Number</p>
          </div>
        </FirstBoxContainer>
      </Heading>
      <DiceRoll currentDice={currentDice} rollDice={rollDice} />
      <LastPortion>
        <Button text='Reset' primary={true} resetScore={resetScore} />
        <Btn onClick={toggleHelp}>{showHelp ? "Hide" : "Show"} Help</Btn>
        {showHelp ? <Help /> : ""}
      </LastPortion>
    </Container>
  );
}
const Container = Styled.div`
    /* height: calc(100vh - 104px); */
    margin: 50px 60px;
`;

const Heading = Styled.div`
    display: flex;
    justify-content: space-between;
`;
const Score = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ErrorSection = Styled.div`
  p{
    color:red;
  }
`;
const FirstBoxContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap:10px;
`;
const BoxContainer = Styled.div`
    display: flex;
    gap:10px;
`;
const Box = Styled.div`
    border: 1px solid black;
    height: 72px;
    width:72px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease-out;
    background: ${(props) => (props.$isselected ? "black" : "white")};
    color: ${(props) => (props.$isselected ? "white" : "black")};

    &:hover{
        background:black;
        color:white;
        transition: 0.3s ease-in;
    }
`;

const Btn = Styled.button`
  background: ${(props) => (props.$primary ? "#000" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#000")};

  font-size: 1em;
  font-weight: bold;
  padding: 0.55em 1em;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 220px;
  transition: 0.3s ease-out;

  &:hover{
    background:black;
    color:white;
    background: ${(props) => (props.$primary ? "white" : "black")};
    color: ${(props) => (props.$primary ? "black" : "white")};
    transition: 0.3s ease-in;
  }

  Link{
    text-decoration: none;
  }
`;

const LastPortion = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: center; */
  align-items: center;
`;

export default GamePlay;
