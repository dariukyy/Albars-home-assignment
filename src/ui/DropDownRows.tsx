import DropDownTableRow from "./DropDownTableRow";

export type ObjectProps = {
  date: string;
  status: string;
};

type DropDownRowsProps = {
  statusOne: ObjectProps;
  statusTwo: ObjectProps;
  statusThree: ObjectProps;
};

function DropDownRows({
  statusOne,
  statusTwo,
  statusThree,
}: DropDownRowsProps) {
  const id = Math.random().toString(36).substr(2) + Date.now().toString(36);
  const id2 = Math.random().toString(36).substr(2) + Date.now().toString(36);
  const id3 = Math.random().toString(36).substr(2) + Date.now().toString(36);
  return (
    <div>
      <DropDownTableRow
        title="John Doe"
        id={id}
        status={statusOne}
        code="0000"
      />
      <DropDownTableRow
        title="John Doe"
        id={id2}
        status={statusTwo}
        code="0001"
      />
      <DropDownTableRow
        title="John Doe"
        id={id3}
        status={statusThree}
        code="0002"
      />
    </div>
  );
}

export default DropDownRows;
