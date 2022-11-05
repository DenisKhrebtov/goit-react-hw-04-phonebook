import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const ContactNeme = styled.p`
  color: yellow;
`;
export const DeleteButton = styled.button`
  border-radius: 15px;
  color: red;
  :hover,
  :focus {
    background-color: red;
    color: white;
    transform: scale(1.1);
  }
`;
