import { ReactNode } from 'react';
import Select, { StylesConfig } from "react-select";

const options = [
  { value: 'en', label: 'en', fixed: true },
  { value: 'pt', label: 'pt' },
]

const customStyle: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "var(--hover)" : "var(--background)",
    border: isFocused ? "1px solid var(--secondary-text)" : "1px solid var(--hover)",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid var(--secondary-text)",
      boxShadow: "none"
    }
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--primary-text)",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "var(--hover)" : "var(--background)",
  }),
  menuList: (styles) => ({
    ...styles,
    backgroundColor: "var(--hover)",
    border: "1px solid var(--secondary-text)",
    borderRadius: "0.25rem"
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "var(--primary-text)",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--primary-text)",
    "&:hover": {
      color: "var(--primary-text)",
    }
  }),
}

export default function LanguageSelector(): ReactNode {
  return (
    <Select options={options} defaultValue={options[0]} isSearchable={false} styles={customStyle} />
  )
}