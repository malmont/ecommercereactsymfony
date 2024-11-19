import React from "react";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";


const ImageSection = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.theme.colors.imageWrapperBackground || "linear-gradient(135deg, #a8edea, #fed6e3)"};
  padding: 20px;

  svg {
    font-size: 5rem;
    color: ${(props) => props.theme.colors.iconColor || "#555"};
  }
`;

const ContentSection = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.inputBorder || "#ccc"};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.inputBackground || "#fff"};
  margin-top: 15px;
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

export default function EmailCardTypeB({ titre, description, buttonText }) {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.EmailCardContainer>
      <ImageSection>
        <MdEmail />
      </ImageSection>
      <selectedStyle.FeatureCard>
        <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
        <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
        <InputContainer>
          <InputField type="email" placeholder="Enter your email" />
          <SubmitButton>{buttonText || "Submit"}</SubmitButton>
        </InputContainer>
      </selectedStyle.FeatureCard>
      </selectedStyle.EmailCardContainer>
  );
}
