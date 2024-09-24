import SmallClickableBox from "./SmallClickableBox";

export interface BoxWrapperProps {
  input: any;
  stack: any;
  i: any;
  emptyBoxSize: any;
  inputList: any;
  isAllSelected: any;
  handleBoxClick: any;
}
const BoxWrapper = ({
  input,
  inputList,
  i,
  stack,
  handleBoxClick,
  emptyBoxSize,
  isAllSelected,
}: BoxWrapperProps) => {
  return (
    <div className={`flex col-span-${input?.length}`}>
      {input?.map((data: any, key: any) => {
        const isBoxSelected = stack?.find(
          (item: any) => item === `${i}-${key}`
        );
        if (data) {
          return (
            <SmallClickableBox
              isBoxSelected={isBoxSelected}
              stack={stack}
              emptyBoxSize={emptyBoxSize}
              inputList={inputList}
              isAllSelected={isAllSelected}
              handleBoxClick={() =>
                handleBoxClick(`${i}-${key}`, isBoxSelected)
              }
              i={i}
              key={key}
            />
          );
        }
        return (
          <div style={{ width: "40px", height: "40px", border: "none" }} />
        );
      })}
    </div>
  );
};

export default BoxWrapper;
