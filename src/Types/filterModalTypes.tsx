// import { MouseEventHandler } from "react";

export interface FilterModalProps {
  closeDropdown: () => void; // Function without arguments
  showDropdown: boolean;
  title: string;
  options: string[];
}
