import { Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import NoDataPrompt from "./NoDataPrompt/NoDataPrompt"
import "./Table.css";

export default function Table({
    tableHeaders,
    headerSelector,
    tableData,
    ActionBtn,
    ViewBtn,
    PendingBtn,
    showLoader,
    withActionData,
    onRowClicked,
    SaleBtn,
    ContractBtn,
    SaleBillingBtn,
    checkBtn,
    tableType,
}) {
    const columns = tableHeaders.map((header, index) => {
        if (header === "-") {
            return {
                name: "",
                selector: (row) => row[headerSelector[index]],
                button: true,
                cell: ViewBtn,
                width: "4vw",
                reorder: false,
                wordWrap: "break-word",
            };
        } else if (header === "ACTIONS" && !withActionData) {
            return {
                name: header,
                button: true,
                cell: ActionBtn,
                width: "7vw",
                reorder: false,
                center: true,
            };
        } else if (header === " ") {
            return {
                name: header,
                button: true,
                cell: PendingBtn,
                width: "10vw",
                reorder: true,
                wordWrap: "break-word",
            };
        }else {
            return {
                name: header,
                selector: (row) => row[headerSelector[index]],
                sortable: true,
                // width: "10vw",
                reorder: true,
                wrap: true,
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
        <div className="d-flex justify-content-center my-5">
            
        </div>
    ) : (
        <DataTable
            responsive={true}
            pagination={true}
            striped
            fixedHeader
            fixedHeaderScrollHeight="50vh"
            columns={columns}
            data={tableData}
            customStyles={customStyles}
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={<NoDataPrompt />}
            defaultSortFieldId={tableType === "itemList" && 2}
        />
    );
}