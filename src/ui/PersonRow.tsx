import { useState } from "react";

import { useAppContext } from "../context/AppContext";
import { Person } from "../data/data";

import Checkbox from "./Checkbox";
import DropDownBox from "./DropDownBox";
import FullPageSpinner from "./FullPageSpinner";
import Paragraph from "./Paragraph";
import Status from "./Status";
import Table from "./Table";
import DropDownRows from "./DropDownRows";
import Menus from "./Menus";
import { HiEye, HiTrash } from "react-icons/hi";

type PersonRowProps = {
  person: Person;
};

function PersonRow({ person }: PersonRowProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { refreshLoading } = useAppContext();

  function handleOpen() {
    setDropdownOpen((prev) => !prev);
  }

  const { statusOne, statusTwo, statusThree } = person;

  if (refreshLoading) return <FullPageSpinner />;

  return (
    <>
      <Table.Row dropdownOpen={dropdownOpen}>
        <Checkbox />
        <DropDownBox
          dropdownOpen={dropdownOpen}
          handleOpen={handleOpen}
          fullName={person.fullName}
        />
        <Table.Empty />
        <Table.Empty />
        <Table.Empty />
        <Paragraph>{person.department}</Paragraph>
        <Status status={person.status} />
        <Paragraph>{person.jobTitle}</Paragraph>
        {/* Menus  */}
        <Menus.Menu>
          <Menus.Toggle id={person.id.toString()} />
          <Menus.List id={person.id.toString()}>
            <Menus.Button icon={<HiEye />}>
              <Paragraph>See details</Paragraph>
            </Menus.Button>

            <Menus.Button
              icon={<HiTrash />}
              onClick={() => console.log("clicked")}
            >
              <Paragraph>Delete</Paragraph>
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>

        {/* DropDown */}
      </Table.Row>
      {dropdownOpen && (
        <DropDownRows
          statusOne={statusOne}
          statusThree={statusThree}
          statusTwo={statusTwo}
        />
      )}
    </>
  );
}

export default PersonRow;
