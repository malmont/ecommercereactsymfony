import React from "react";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  overflow: hidden;
  @media (max-width: 768px) {

    flex-direction: column;
    text-align: center;
  }
`;

const IconSection = styled.div`
  flex: 0 0 100px;
  background: ${(props) =>
    props.theme.colors.iconBackground || "linear-gradient(135deg, #a8edea, #fed6e3)"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.iconColor || "#555"};
  }
`;

const ContentSection = styled.div`
  flex: 1;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.inputBorder || "#ccc"};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.inputBackground || "#fff"};
  margin-top: 15px;
  width: 100%;
  height: 100px;
  padding: 4px;
`;

const InputField = styled.input`
  border: none;
  padding: 10px;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
  color: ${(props) => props.theme.colors.inputText || "#333"};
  background: none;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground || "#007BFF"};
  color: ${(props) => props.theme.colors.buttonText || "#fff"};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
    border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || "#0056b3"};
  }
`;

export default function EmailCardTypeF({ titre, description, buttonText }) {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <CardContainer>
      <IconSection>
        <MdEmail />
      </IconSection>
      <ContentSection>
        <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
        <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
        <InputContainer>
          <InputField type="email" placeholder="Enter your email" />
          <SubmitButton>{buttonText || "Submit"}</SubmitButton>
        </InputContainer>
      </ContentSection>
    </CardContainer>
  );
}
