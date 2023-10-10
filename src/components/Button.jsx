import Styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

function Button(props) {
  return (
    <>
      <Link to={props.link}>
        <Btn onClick={ props.toggleHelp? props.toggleHelp : props.resetScore} $primary={props.primary}>{props.text}</Btn>
      </Link>
    </>
  );
}
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

export default Button;
