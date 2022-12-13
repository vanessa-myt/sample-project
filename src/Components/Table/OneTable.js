import { Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { SyncLoader } from "react-spinners";
import NoDataPrompt from "../NoDataPrompt/NoDataPrompt";
import "./OneTable.css";

export default function OneTable({
    tableHeaders,
    headerSelector,
    tableData,
    ActionBtn,
    ViewBtn,
    PendingBtn,
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
                width: "10%",
                reorder: false,
                wrap: true,
            };
        } else if (header === "ACTIONS" && !withActionData) {
            return {
                name: header,
                button: true,
                cell: ActionBtn,
                width: "8%",
                reorder: true,
            };
        } else if (header === " ") {
            return {
                name: header,
                button: true,
                cell: PendingBtn,
                // width: "10vw",
                reorder: true,
            };
        } else if (header === "STATUS") {
            return {
                name: header,
                selector: (row) => row[headerSelector[index]],
                button: true,
                width: "8%",
            };
        } else if (header.includes("INVOICE NO.")) {
            return {
                name: header,
                selector: (row) => row[headerSelector[index]],
                // sortable: true,
                width: "10%",
                wrap: true,
                reorder: true,
            };
        } 
        // else if (header.includes("FRANCHISEE")) {
        //     return {
        //         name: header,
        //         selector: (row) => row[headerSelector[index]],
        //         sortable: true,
        //         width: "20%",
        //         wrap: true,
        //         reorder: true,
        //     };
        // } else if (header.includes("FRANCHISEE FEE")) {
        //     return {
        //         name: header,
        //         selector: (row) => row[headerSelector[index]],
        //         sortable: true,
        //         width: "5%",
        //         reorder: true,
        //     };
        // } 
        else if (
            header.includes("DATE") ||
            header.includes("TOTAL") ||
            header.includes("BALANCE")
        ) {
            return {
                name: header,
                selector: (row) => row[headerSelector[index]],
                width: "10%",
                wrap: true,
                reorder: true,
            };
        } else {
            return {
                name: header,
                selector: (row) => row[headerSelector[index]],
                // sortable: true,
                width: "10%",
                wrap: true,
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
                flexWrap: "wrap",
                fontSize: "12px",
                whiteSpace: "pre",
            },
        },
        headCells: {
            style: {
                flexWrap: "wrap",
                fontSize: "12px",
                width: "100%",
                wordWrap: "breakWord",
            },
        },
    };

    return showLoader ? (
        <div className="d-flex justify-content-center my-5">
            <SyncLoader color="#169422" size={15} />
        </div>
    ) : (
        <DataTable
            grow
            pagination
            responsive
            striped
            fixedHeader
            columns={columns}
            data={tableData}
            customStyles={customStyles}
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={<NoDataPrompt />}
        />
    );
}
