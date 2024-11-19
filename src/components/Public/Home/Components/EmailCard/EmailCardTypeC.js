import React from "react";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/All_styles";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";


const IconContainer = styled.div`
  background: ${(props) =>
    props.theme.colors.iconBackground || "linear-gradient(135deg, #a8edea, #fed6e3)"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.iconColor || "#555"};
  }
`;

const ContentSection = styled.div`
  text-align: center;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.inputBorder || "#ccc"};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.inputBackground || "#fff"};
  margin-top: 20px;
`;

const InputField = styled.input`
  border: none;
  padding: 10px;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
  color: ${(props) => props.theme.colors.inputText || "#333"};
  background: none;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground || "#007BFF"};
  color: ${(props) => props.theme.colors.buttonText || "#fff"};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || "#0056b3"};
  }
`;

export default function EmailCardTypeC({ titre, description, buttonText }) {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.EmailCardContainer>
      <IconContainer>
        <MdEmail />
      </IconContainer>
      <ContentSection>
        <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
        <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
        <InputContainer>
          <InputField type="email" placeholder="Enter your email" />
          <SubmitButton>{buttonText || "Submit"}</SubmitButton>
        </InputContainer>
      </ContentSection>
      </selectedStyle.EmailCardContainer>
  );
}
