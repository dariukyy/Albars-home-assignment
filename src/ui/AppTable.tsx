import { IoReload } from "react-icons/io5";
import { GRID_COL_SIZES } from "../utils/constants";
import PersonRow from "./PersonRow";
import Table from "./Table";
import Icon from "./RefreshIcon";
import { useAppContext } from "../context/AppContext";
import HeaderCheckBox from "./HeaderCheckbox";
import TotalPersons from "./TotalPersons";
import PageCount from "./PageCount";
import FooterPaginationButtonsComponent from "./FooterPaginationButtonsComponent";
import { useSearchParams } from "react-router-dom";
import { useSort } from "../hooks/useSort";
import SortableHeader from "./SortableHeader";
import Menus from "./Menus";

function AppTable() {
  const { data, refreshLoading, refreshData, ShowPersonsPerPageValue } =
    useAppContext();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const indexOfLastPerosn = page * ShowPersonsPerPageValue;
  const indexOfFirstPerson = indexOfLastPerosn - ShowPersonsPerPageValue;

  //Sorting
  const { sortedData, handleSort } = useSort(data, "fullName", "asc");
  const currentData = sortedData.slice(indexOfFirstPerson, indexOfLastPerosn);

  return (
    <Menus>
      <Table columns={GRID_COL_SIZES}>
        <Table.Header>
          <HeaderCheckBox />
          <SortableHeader field="fullName" handleSort={handleSort}>
            Full name / Health check
          </SortableHeader>
          <SortableHeader field="combinedStatus" handleSort={handleSort}>
            Code
          </SortableHeader>
          <SortableHeader field="dateCount" handleSort={handleSort}>
            Expiration
          </SortableHeader>
          <SortableHeader field="dateCount" handleSort={handleSort}>
            Status
          </SortableHeader>
          <SortableHeader field="department" handleSort={handleSort}>
            Department
          </SortableHeader>
          <SortableHeader field="status" handleSort={handleSort}>
            User status
          </SortableHeader>
          <SortableHeader field="jobTitle" handleSort={handleSort}>
            Job title
          </SortableHeader>
          <Icon onClick={refreshData} isLoading={refreshLoading}>
            <IoReload />
          </Icon>
        </Table.Header>
        <Table.Body
          data={currentData}
          render={(item) => <PersonRow key={item.id} person={item} />}
        />
        <Table.Footer>
          <TotalPersons />
          <PageCount />
          <FooterPaginationButtonsComponent />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AppTable;
