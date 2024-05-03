import { useState } from "react";

import { Person } from "../../data/data";

import DropDownBox from "../dropdown/DropDownBox";
import FullPageSpinner from "../../ui/FullPageSpinner";
import Paragraph from "../../ui/Paragraph";
import Status from "../footer/Status";
import Table from "../../ui/Table";
import DropDownRows from "../dropdown/DropDownRows";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi";
import { useAppContext } from "../../context/useAppContext";
import RowCheckbox from "../../ui/RowCheckbox";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

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
  const [rowCheckboxChecked, setRowCheckboxChecked] = useState(false);
  const { refreshLoading } = useAppContext();
  console.log(rowCheckboxChecked);

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
        <RowCheckbox setRowCheckboxChecked={setRowCheckboxChecked} />
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
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={person.id.toString()} />
            <Menus.List id={person.id.toString()}>
              <Modal.Open opens="see-details">
                <Menus.Button icon={<HiEye />}>
                  <Paragraph>See details</Paragraph>
                </Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button
                  icon={<HiTrash />}
                  onClick={() => console.log("clicked")}
                >
                  <Paragraph>Delete</Paragraph>
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete onCloseModal={close} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
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
              rowCheckboxChecked={rowCheckboxChecked}
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
