/* eslint-disable react/no-children-prop */
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { MdLock, MdComputer, MdEmail, MdWork } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaUserNinja } from "react-icons/fa";

import React, { useState } from "react";
import { TpaInputColors } from "../../styles/components";

interface TpaInputProps extends InputProps {
  isPassword?: boolean;
  iconType: "user" | "email" | "lock" | "computer" | "work";
}

const iconsOptions = {
  user: FaUserNinja,
  email: MdEmail,
  lock: MdLock,
  computer: MdComputer,
  work: MdWork,
};

export default function TpaInput({
  type,
  isPassword,
  iconType,
  ...props
}: TpaInputProps) {
  const { primary, secondary } = TpaInputColors;
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isPrimaryColor, setIsPrimaryColor] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement
        height="100%"
        children={
          <Icon
            color={isPrimaryColor ? primary : secondary}
            as={iconsOptions[iconType]}
          />
        }
      />
      <Input
        {...props}
        type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
        _placeholder={{
          color: secondary,
        }}
        onFocus={() => setIsPrimaryColor(true)}
        onBlur={() => setIsPrimaryColor(false)}
      />

      {isPassword && (
        <InputRightElement
          h="100%"
          children={
            <Icon
              color={primary}
              as={isVisiblePassword ? IoMdEyeOff : IoMdEye}
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            />
          }
        />
      )}
    </InputGroup>
  );
}
