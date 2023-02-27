import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';

interface ToggleButtonProps extends IconBaseProps {
  toggle: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggle,
  onClick,
  ...rest
}) => {
  return toggle ? (
    <FiEye size={20} onClick={onClick} {...rest} />
  ) : (
    <FiEyeOff size={20} onClick={onClick} {...rest} />
  );
};

export default ToggleButton;
