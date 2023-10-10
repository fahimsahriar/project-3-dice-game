import styled from "styled-components";

function DiceRoll({currentDice, rollDice}) {
  return (
    <DiceSection>
      <img
        onClick={rollDice}
        src={`images/dices/dice_${currentDice}.png`}
        alt=''
      />
      <p>Click on dice to roll</p>
    </DiceSection>
  );
}

const DiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  justify-content: center;

  img {
    cursor: pointer;
    margin-bottom: 20px;
  }
  p{
    margin-bottom: 20px;
  }
`;

export default DiceRoll;
