"use client";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Locales.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { AiOutlineTranslation } from "react-icons/ai";

export default function Locales() {
  const { t, i18n } = useTranslation();

  const [selectedKeys, setCurrentLanguage] = React.useState(
    new Set([i18n.language])
  );
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <>
      <div>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly color="primary" variant="light">
              <AiOutlineTranslation className="AiOutlineTranslation"/>
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label='Single selection example'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={handleLanguageChange}>
            {languageOptions.map((option) => (
              <DropdownItem key={option.code} className={i18n.language === option.code ? "i18n_button_active" : "i18n_button"}>{option.label}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

const languageOptions = [
  {
    code: "zh",
    label: "简体中文",
  },
  {
    code: "zhHK",
    label: "繁体中文",
  },
  {
    code: "en",
    label: "English",
  },
  {
    code: "fr",
    label: "Français",
  },
  {
    code: "ko",
    label: "한국어",
  },
  {
    code: "ja",
    label: "日本語",
  },
  {
    code: "ar",
    label: "بالعربية",
  },
  {
    code: "bt",
    label: "Português",
  },
];
