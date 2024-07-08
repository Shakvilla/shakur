import React from "react";

export interface ISidebarProps {
  selectedStacks: string[];
  setSelectedStacks: React.Dispatch<React.SetStateAction<string[]>>;
}
