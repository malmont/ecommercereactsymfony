import React from 'react';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { styles } from '../../../../../theme/AllStyles';
import styled from 'styled-components';



const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.inputBorder || '#ccc'};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.inputBackground || '#fff'};
  margin-top: 15px; /* Ajoute un espacement entre le texte et le champ d'entrée */
`;

const InputField = styled.input`
  border: none;
  padding: 10px;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
  color: ${(props) => props.theme.colors.inputText || '#333'};
  background: none;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground || '#007BFF'};
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || '#0056b3'};
  }
`;

export default function EmailCardTypeB() {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.EmailCardContainer>
      <selectedStyle.TitleExplore>Luminae Store</selectedStyle.TitleExplore>
      <selectedStyle.DescriptionExplore>
        Register your email not to miss the last-minute offers! Free delivery.
      </selectedStyle.DescriptionExplore>
      <InputContainer>
        <InputField type="email" placeholder="Enter your email" />
        <SubmitButton>Submit</SubmitButton>
      </InputContainer>
    </selectedStyle.EmailCardContainer>
  );
}
