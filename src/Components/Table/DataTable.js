import { SyncLoader } from "react-spinners";
import DataTable from "react-data-table-component";
import NoDataPrompt from "../NoDataPrompt/NoDataPrompt";
import "./Table.css";

export default function Table({
  tableHeaders,
  headerSelector,
  tableData,
  ActionBtn,
  PendingBtn,
  ViewBtn,
  showLoader,
  withActionData,
}) {
  const columns = tableHeaders.map((header, index) => {
    if (header === "-") {
      return {
        name: "",
        selector: (row) => row[headerSelector[index]],
        button: true,
        cell: ViewBtn,
        width: "7vw",
        reorder: false,
      };
    } else if (header === "*") {
      return {
        name: "",
        selector: (row) => row[headerSelector[index]],
        button: true,
        cell: ViewBtn,
        width: "7vw",
        reorder: false,
      };
    } else if (header === "ACTIONS" && !withActionData) {
      return {
        name: header,
        button: true,
        cell: ActionBtn,
        width: "6vw",
        reorder: true,
      };
    } else {
      return {
        name: header,
        selector: (row) => row[headerSelector[index]],
        sortable: true,
        // width: "10vw",
        reorder: true,
      };
    }
  });

  const paginationComponentOptions = {
    rowsPerPageText: "",
    noRowsPerPage: true,
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "5.2vh",
      },
    },
  };

  return showLoader ? (
    <div className="d-flex justify-content-center my-5"></div>
  ) : (
    <DataTable
      pagination
      striped
      fixedHeader
      fixedHeaderScrollHeight="50vh"
      columns={columns}
      data={tableData}
      customStyles={customStyles}
      paginationComponentOptions={paginationComponentOptions}
      noDataComponent={<NoDataPrompt />}
    />
  );
}
