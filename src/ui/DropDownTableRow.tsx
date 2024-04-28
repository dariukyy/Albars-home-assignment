import { FaBan, FaCheck, FaTimes } from "react-icons/fa";
import { convertDateFormat } from "../utils/helpers";
import Checkbox from "./Checkbox";
import Menus from "./Menus";
import Paragraph from "./Paragraph";
import Status from "./Status";
import Table from "./Table";

export type ObjectProps = {
  date: string;
  status: string;
};

type DropDownTableRowProps = {
  title: string;
  id: string;
  status: ObjectProps;
  code: string;
};

function DropDownTableRow({ title, id, status, code }: DropDownTableRowProps) {
  console.log(status.status);
  return (
    <Table.Row>
      <Checkbox />
      <Paragraph>{title}</Paragraph>
      <Paragraph>{code}</Paragraph>
      <Paragraph>{convertDateFormat(status.date)}</Paragraph>
      <Status code={status} />
      <Table.Empty></Table.Empty>
      <Table.Empty></Table.Empty>
      <Table.Empty></Table.Empty>
      {/* // Add Menus component */}
      <Menus.Menu>
        <Menus.Toggle id={id} />
        <Menus.List id={id}>
          <Menus.Button
            icon={<FaCheck />}
            onClick={() => console.log("clicked")}
          >
            <Paragraph>Validate</Paragraph>
          </Menus.Button>
          <Menus.Button icon={<FaTimes />}>
            <Paragraph>Expire</Paragraph>
          </Menus.Button>
          <Menus.Button icon={<FaBan />}>
            <Paragraph>Cancel</Paragraph>
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default DropDownTableRow;
