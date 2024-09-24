import React, { useState, useCallback, useEffect } from "react";
import BoxWrapper from "./BoxWrapper";

const SelectableBoxGrid = ({ inputList }: any) => {
  const [stack, setStack] = useState<any>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleBoxClick = (id: string, isBoxSelected: boolean) => {
    if (isBoxSelected) {
      const updatedStack = stack?.filter((item: any) => item !== id);
      setStack([...updatedStack]);
    } else {
      setStack([...stack, id]);
    }
  };

  const emptyBoxSize = inputList
    ?.flat()
    ?.filter((item: any) => item === 0)?.length;

  const smallContainer = useCallback(
    (input: any, i: any) => {
      return (
        <BoxWrapper
          input={input}
          inputList={inputList}
          i={i}
          stack={stack}
          handleBoxClick={handleBoxClick}
          emptyBoxSize={emptyBoxSize}
          isAllSelected={isAllSelected}
        />
      );
    },
    [stack]
  );

  const gridlength = inputList?.length;
  useEffect(() => {
    if (
      stack?.length + emptyBoxSize === inputList?.flat().length &&
      !isAllSelected
    ) {
      setIsAllSelected(true);
    }
  }, [stack, inputList, emptyBoxSize, isAllSelected]);

  useEffect(() => {
    if (stack?.length && isAllSelected) {
      const id = setInterval(() => {
        setStack([...stack?.slice(0, -1)]);
      }, 1000);
      return () => clearInterval(id);
    }
    if (!stack?.length && isAllSelected) {
      setIsAllSelected(false);
    }
  }, [isAllSelected, stack]);

  return (
    <div className={`grid grid-rows-${gridlength}`}>
      {inputList?.map((input: any, i: any) => {
        return smallContainer(input, i);
      })}
    </div>
  );
};

export default SelectableBoxGrid;
