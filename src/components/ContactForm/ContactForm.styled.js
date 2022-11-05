import styled from 'styled-components';

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;
export const AddLabel = styled.label`
  color: yellow;
  /* margin-right: 10px; */
`;

export const InputName = styled.input`
  padding-left: 5px;
  border-radius: 3px;
  margin-left: 15px;
  width: 155px;

  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;

export const InputNumber = styled.input`
  padding-left: 5px;
  border-radius: 3px;
  margin-left: 15px;
  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;

export const AddBtn = styled.button`
  align-self: center;
  border-radius: 9px;
  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;
