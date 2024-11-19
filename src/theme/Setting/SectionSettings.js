import React from "react";
import styled from "styled-components";

const SectionSettings = ({ section, options }) => (
  <Card>
    <h6>{section.name}</h6>
    <SettingGroup>
      <Label>Composant</Label>
      <Select
        value={section.component}
        onChange={(event) => section.setComponent(event.target.value)}
      >
        {Object.keys(options.components || {}).map((key) => (
          <option key={key} value={key}>
            {options.components[key].name || key}
          </option>
        ))}
      </Select>
    </SettingGroup>
    <SettingGroup>
      <Label>Type</Label>
      <Select
        value={section.type}
        onChange={(event) => section.setType(event.target.value)}
      >
        {Object.keys(options.types || {}).map((key) => (
          <option key={key} value={key}>
            {options.types[key].name || key}
          </option>
        ))}
      </Select>
    </SettingGroup>
    <SettingGroup>
      <Label>Type Produit</Label>
      <Select
        value={section.productFetch}
        onChange={(event) => section.setProductFetch(event.target.value)}
      >
        {Object.keys(options.productFetch || {}).map((key) => (
          <option key={key} value={key}>
            {options.productFetch[key].name || key}
          </option>
        ))}
      </Select>
    </SettingGroup>
  </Card>
);

export default SectionSettings;

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
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
