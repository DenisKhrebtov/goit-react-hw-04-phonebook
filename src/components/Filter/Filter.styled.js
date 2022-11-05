import styled from 'styled-components';

export const Label = styled.label`
  color: tomato;
  border: 1px solid black;
  border-radius: 50px;
  display: inline-block;
  text-align: center;
`;
export const Input = styled.input`
  padding-left: 5px;
  margin: 10px;
  border-radius: 3px;
  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;
