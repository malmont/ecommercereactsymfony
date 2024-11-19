import React from "react";
import styled from "styled-components";

const SettingCard = ({ label, value, onChange, options }) => (
  <Card>
    <SettingGroup>
      <Label>{label}</Label>
      <Select value={value} onChange={onChange}>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key].name || key}
          </option>
        ))}
      </Select>
    </SettingGroup>
  </Card>
);

export default SettingCard;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SettingGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
