import Styled from "styled-components";

function Help() {
  return (
    <Main>
        <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
    </Main>
  )
}

const Main = Styled.div`
    background: #FBF1F1;
    padding: 20px;
`;

export default Help