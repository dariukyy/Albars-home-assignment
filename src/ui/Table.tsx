import { ReactNode, createContext, useContext } from "react";
import styled from "styled-components";
import { Person, Persons } from "../data/data";

const StyledTable = styled.div`
  border: 1px solid var();

  font-size: 1.4rem;
  background-color: #fff;
  /* background-color: var(--color-grey-0); */
  border-radius: 7px;
`;

const CommonRow = styled.li<ContextValueProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 1rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  font-weight: 600;
  font-size: 1.3rem;
  text-align: left;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  & > * {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;

    &:first-child,
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:not(:last-child) {
      border-right: 2px solid #f3f4f6;
    }

    & div {
    }
  }
`;

const StyledRow = styled(CommonRow)<{ dropdownOpen?: boolean }>`
  /* padding: 1rem 0; */
  font-size: 1.2rem;
  text-align: left;
  height: 5rem;
  background-color: ${(props) => (props.dropdownOpen ? "#dcfce7" : "#fff")};
  border-bottom: 2px solid #f3f4f6;

  &:hover {
    background-color: ${(props) =>
      props.dropdownOpen ? "#dcfce7" : "#f9fafb"};
  }

  & > * {
    display: flex;
    justify-content: left;
    align-items: center;

    &:first-child,
    &:last-child {
      justify-content: center;
    }
  }
`;

const StyledBody = styled.ul`
  margin-top: 0.4rem;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const StyledFooter = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: center;
  border: 3px solid #f3f4f6;
  margin-top: 1.3rem;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 5.6rem;

  & > * {
    height: 100%;
    border-right: 3px solid #f3f4f6;
    padding: 0 3rem;
  }

  & > *:last-child {
    padding-right: 0.5rem;
  }

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

type ChildrenProps = {
  children: ReactNode;
};

type ContextValueProps = {
  columns: string;
};

type TableProps = {
  columns: string;
  children: ReactNode;
};

type BodyProps = {
  data: Persons;
  render: (item: Person, index: number) => ReactNode;
};

type RowProps = {
  children: ReactNode;
  dropdownOpen?: boolean;
};

const TableContext = createContext<ContextValueProps | null>(null);

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: ChildrenProps) {
  const { columns } = useContext(TableContext)!;

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children, dropdownOpen }: RowProps) {
  const { columns } = useContext(TableContext)!;

  return (
    <StyledRow role="row" columns={columns} dropdownOpen={dropdownOpen}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }: BodyProps) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Footer({ children }: ChildrenProps) {
  return <StyledFooter>{children}</StyledFooter>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
Table.Empty = Empty;

export default Table;
