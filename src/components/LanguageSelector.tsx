import { ReactNode } from 'react';
import Select, { StylesConfig } from "react-select";
import i18n from '../i18n';

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
    transition: "none",
    WebkitTransition: "none",
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
    color: isFocused ? "var(--primary-text)" : "var(--secondary-text)",
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
  const defaultValue = options.find((option) => option.value === i18n.language) || options[0]

  const handleOnChange = (newValue: any) => {
    const newLanguage = newValue.value
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage)
  };

  return (
    <Select options={options} defaultValue={defaultValue} isSearchable={false} styles={customStyle} onChange={handleOnChange} />
  )
}