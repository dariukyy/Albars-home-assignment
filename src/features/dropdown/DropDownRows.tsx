import { useMemo } from "react";
import DropDownTableRow from "./DropDownTableRow";

export type ObjectProps = {
  date: string;
  status: string;
};

type DropDownRowsProps = {
  statusOne: ObjectProps;
  statusTwo: ObjectProps;
  statusThree: ObjectProps;
  rowCheckboxChecked: boolean;
};

function DropDownRows({
  statusOne,
  statusTwo,
  statusThree,
  rowCheckboxChecked,
}: DropDownRowsProps) {
  // Generate unique id for each DropDownTableRow
  const id = useMemo(
    () => Math.random().toString(36) + Date.now().toString(36),
    []
  );
  const id2 = useMemo(
    () => Math.random().toString(36) + Date.now().toString(36),
    []
  );
  const id3 = useMemo(
    () => Math.random().toString(36) + Date.now().toString(36),
    []
  );

  return (
    <>
      <DropDownTableRow
        rowCheckboxChecked={rowCheckboxChecked}
        title="Psichinės sveikatos patikra"
        id={id}
        status={statusOne}
        code="0000"
      />

      <DropDownTableRow
        rowCheckboxChecked={rowCheckboxChecked}
        title="Fizinės sveikatos patikra"
        id={id2}
        status={statusTwo}
        code="0001"
      />
      <DropDownTableRow
        rowCheckboxChecked={rowCheckboxChecked}
        title="Darbo prie kompiuterio pažyma"
        id={id3}
        status={statusThree}
        code="0002"
      />
    </>
  );
}

export default DropDownRows;
