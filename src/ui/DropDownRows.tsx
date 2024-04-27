import { convertDateFormat } from "../utils/helpers";
import Checkbox from "./Checkbox";
import Paragraph from "./Paragraph";
import Status from "./Status";
import Table from "./Table";
import { motion } from "framer-motion";

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
  return (
    <motion.div>
      <Table.Row>
        <Checkbox />
        <Paragraph>Psichikos sveikatos patikra</Paragraph>
        <Paragraph>0000</Paragraph>
        <Paragraph>{convertDateFormat(statusOne.date)}</Paragraph>
        <Status code={statusOne} />
      </Table.Row>
      <Table.Row>
        <Checkbox />
        <Paragraph>Fizinės sveikatos patikra</Paragraph>
        <Paragraph>0001</Paragraph>
        <Paragraph>{convertDateFormat(statusTwo.date)}</Paragraph>
        <Status code={statusTwo} />
      </Table.Row>
      <Table.Row>
        <Checkbox />
        <Paragraph>Darbo prie kompiuterio pažyma</Paragraph>
        <Paragraph>0002</Paragraph>
        <Paragraph>{convertDateFormat(statusThree.date)}</Paragraph>
        <Status code={statusThree} />
      </Table.Row>
    </motion.div>
  );
}

export default DropDownRows;
