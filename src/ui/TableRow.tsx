import { useState } from "react";

import { Person } from "../data/data";

import DropDownBox from "./DropDownBox";
import FullPageSpinner from "./FullPageSpinner";
import Paragraph from "./Paragraph";
import Status from "./Status";
import Table from "./Table";
import DropDownRows from "./DropDownRows";
import Menus from "./Menus";
import { HiEye, HiTrash } from "react-icons/hi";
import { useAppContext } from "../context/useAppContext";
import RowCheckbox from "./RowCheckbox";
import { AnimatePresence, motion } from "framer-motion";

type PersonRowProps = {
  person: Person;
};
function Empty() {
  return (
    <>
      <Table.Empty />
      <Table.Empty />
      <Table.Empty />
    </>
  );
}

function TableRow({ person }: PersonRowProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { refreshLoading } = useAppContext();

  // Handle the dropdown open event
  function handleOpen() {
    setDropdownOpen((prev) => !prev);
  }

  const { statusOne, statusTwo, statusThree } = person;

  // Show a spinner while the data is being refreshed
  if (refreshLoading) return <FullPageSpinner />;

  return (
    <>
      <Table.Row dropdownOpen={dropdownOpen}>
        <RowCheckbox />
        <DropDownBox
          dropdownOpen={dropdownOpen}
          handleOpen={handleOpen}
          fullName={person.fullName}
        />
        <Empty />
        <Paragraph>{person.department}</Paragraph>
        <Status status={person.status} />
        <Paragraph>{person.jobTitle}</Paragraph>
        {/* // Add Menus component */}
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

      <AnimatePresence initial={false}>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <DropDownRows
              statusOne={statusOne}
              statusThree={statusThree}
              statusTwo={statusTwo}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TableRow;
