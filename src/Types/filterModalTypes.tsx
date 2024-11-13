import { MouseEventHandler } from "react";

export interface FilterModalProps {
  closeDropdown: MouseEventHandler<HTMLImageElement>;
  showDropdown: boolean;
  title: string;
  options: string[];
}
