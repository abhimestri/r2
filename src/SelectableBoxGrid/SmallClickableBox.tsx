import React from "react";

interface SmallBoxLayoutProps {
  isBoxSelected: any;
  stack: any;
  emptyBoxSize: any;
  inputList: any;
  isAllSelected: any;
  handleBoxClick: any;
  i: any;
  key: any;
}
const SmallBoxLayout = ({
  isBoxSelected,
  stack,
  emptyBoxSize,
  inputList,
  isAllSelected,
  handleBoxClick,
  i,
  key,
}: SmallBoxLayoutProps) => {
  return (
    <div>
      <div
        className={`w-[40px] h-[40px] border-solid border-[1px] border-[#000] ${
          isBoxSelected ? "bg-[#0bcc59]" : "bg-[#fff]"
        }`}
        onClick={() => {
          if (
            stack?.length + emptyBoxSize !== inputList?.flat().length &&
            !isAllSelected
          ) {
            handleBoxClick(`${i}-${key}`, isBoxSelected);
          }
        }}
      />
    </div>
  );
};

export default SmallBoxLayout;
