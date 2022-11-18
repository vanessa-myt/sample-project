// import React, { useState } from "react";
// import TableFooter from "./TableFooter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import useTable from "./Pagination";
// import { useNavigate } from 'react-router-dom';
// import "./Table.scss";

// //images
// // import { formatDateSlash, getformatDate } from "../../Helpers/Utils/Common";
// import TableLoader from "./TableLoader";


// function Table({
//   id,
//   clickable,
//   type,
//   tableData,
//   onSelectChange,
//   headingColumns,
//   subHeadingColumns,
//   movableColumns,
//   breakOn = "small",
//   givenClass,
//   withSubData,
//   setID,
//   handleClicked,
//   action,
//   setAction,
//   useLoader = false,
//   isReady,
//   exportToExcel,
//   containerId,
//   toggleSort,
//   setToggleSort,
// }) {
//   //SUB HEADER NAVIGATION
//   const [index, setIndex] = useState(0);

//   const [clickedID, setClickedID] = useState()
  
//   const handleClick = (row_id, row_status, row_user ) => {
//     setID({ id: row_id, status: row_status, name: row_user })
//     setClickedID(row_id)
//   }
//   const navigateto = useNavigate();

//   //console.log(clickedID)
//   if (clickedID) {
//     navigateto("/student-profile/" + clickedID)
//   }

//   //PAGINATION
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [page, setPage] = useState(1);
//   const { slice, range } = useTable(tableData, page, rowsPerPage);

//   const next = () => {
//     var i = index;
//     if (tableData[0].branch_data.length - 1 > index) {
//       setIndex(i + 1);
//     }
//   };

//   const previous = () => {
//     var i = index;
//     if (index > 0) {
//       setIndex(i - 1);
//     }
//   };

//   let tableClass = "table-container__table";

//   if (breakOn === "small") {
//     tableClass += " table-container__table--break-sm";
//   } else if (breakOn === "medium") {
//     tableClass += " table-container_table--break-md";
//   } else if (breakOn === "large") {
//     tableClass += " table-container_table--break-lg";
//   }

//   /***
//    * TABLE W/ SUBHEADERS
//    */

//   //SubHeader Data
//   if (withSubData) {
//     const mainData = tableData.map((row) => {
//       let rowData = [];
//       let i = 0;

//       for (const key in row) {
//         rowData.push({
//           key: headingColumns[i],
//           val: row[key],
//         });
//         i++;
//       }

//       return (
//         <tr key={row.index}>
//           <td>{row.branch}</td>
//           <td>{row.branch_code}</td>
//           <td>{row.fusion_location_code}</td>
//           <td>{row.outlet_type}</td>
//           <td className="first-index">{row.csr_on_duty}</td>
//           {row.branch_data.map((branch) => {
//             return (
//               <>
//                 <td>{branch.data.bank}</td>
//                 <td>{branch.data.bank_acc_num}</td>
//                 <td>{branch.data.deposit_ref_num}</td>
//                 <td>{branch.data.to_be_remitted}</td>
//                 <td>{branch.data.remitted_amount}</td>
//                 <td>{branch.data.over_short}</td>
//                 <td>{branch.data.reasons}</td>
//               </>
//             );
//           })}
//         </tr>
//       );
//     });

//     return (
//       <div className="table-container">
//         <div className="search-table-container row"></div>
//         <table className={tableClass}>
//           <thead>
//             <tr>
//               {headingColumns.map((data, index) => {
//                 return <th key={index}>{data}</th>;
//               })}
//               <th colSpan="7">
//                 <button className="type-navigation-btn">
//                   <button
//                     className="previous-nav-btn"
//                     onClick={() => previous()}
//                   >
//                     <FontAwesomeIcon
//                       icon={"angle-left"}
//                       alt={"open"}
//                       className={"nav-icon"}
//                       aria-hidden="true"
//                     />
//                   </button>
//                   {isReady && tableData[0].branch_data[index].shippingType}
//                   <button className="next-nav-btn" onClick={() => next()}>
//                     <FontAwesomeIcon
//                       icon={"angle-right"}
//                       alt={"open"}
//                       className={"nav-icon"}
//                       aria-hidden="true"
//                     />
//                   </button>
//                 </button>
//               </th>
//             </tr>
//             <tr>
//               <th className=""></th>
//               <th className=""></th>
//               <th className=""></th>
//               <th className=""></th>
//               <th className=""></th>
//               <th className=""></th>
//               <th className="first-index"></th>
//               {subHeadingColumns.map((data, index) => {
//                 return <th key={index}>{data}</th>;
//               })}
//             </tr>
//           </thead>

//           <tbody>
//             {!isReady && useLoader ? (
//               <td colSpan={15} key={index}>
//                 No data found
//               </td>
//             ) : (
//               mainData
//             )}
//           </tbody>
//         </table>
//         <TableFooter
//           range={range}
//           slice={slice}
//           setPage={setPage}
//           page={page}
//           footerClass={givenClass}
//           setRowsPerPage={setRowsPerPage}
//           rowsPerPage={rowsPerPage}
//         />
//       </div>
//     );
//   } 
  
//   else {
//     const data = slice.map((row, index) => {
//       let i = 0;
//       let rowData = [];

//       if (type === "users") {
//         for (const key in row) {
//           rowData.push({
//             key: headingColumns[i - 1],
//             val: row[key],
//           });
//           i++;
//         }
//       } else {
//         for (const key in row) {
//           rowData.push({
//             key: headingColumns[i],
//             val: row[key],
//           });
//           i++;
//         }
//       }

//       //table for manager

//       if (type === "manager") { 
//         return (
//           <>
//           {!isReady && useLoader ? 
//             <TableLoader tableHeaders={headingColumns} /> : 
//               <tr key={row.index}>
//                 <td
//                     key={row.index}
//                     data-heading={row.index}
//                     className={"text-left"}
//                     align="center"
//                     onClick={() => handleClick(row.id, row.status, row.user)}
//                   >
//                     {row.role}
//                 </td>
//                 <td
//                     key={row.index}
//                     data-heading={row.index}
//                     className={"text-left"}
//                     align="center"
//                     onClick={() => handleClick(row.id, row.status, row.user)}
//                   >
//                     {row.first_name + "  " + row.last_name}
//                 </td>
//                 <td
//                     key={row.index}
//                     data-heading={row.index}
//                     className={"text-left"}
//                     align="center"
//                     onClick={() => handleClick(row.id, row.status, row.user)}
//                   >
//                     {row.username}
//                 </td>
//                 <td className={" text-left"} data-heading={"ACTION"} align="center" >
//                   <select
//                     className="form-control input-subtitle table-dropdown action-btn"
//                     name="employment"
//                     id={row.id}
//                     onChange={onSelectChange}
//                     >
//                     <option value="action-btn form-control input-subtitle table-dropdown">Select</option>
//                     <option value="update">UPDATE</option>
//                     <option value="delete">DELETE</option>
//                     </select>
//                 </td>
//               </tr>
//           }
//           </>
//         );
//       }
      
//       return (
//         <tr key={row.index}>
//           {rowData.slice(1).map((data, index) => (
//             <td
//               key={index}
//               data-heading={data.key}
//               className={data.val + " text-left"}
//             >
//               {data.value}
//             </td>
//           ))}
//         </tr>
//       );
//     });

//     //TABLE
//     if (type === "reports") { 
//       return (
//         <div className="table-container transaction-table-cont">
//           <div className="search-table-container row"></div>
//           <table className={tableClass + " max-width" + " table-loader"}>
//             <thead>
//               <tr>
//                 {headingColumns.map((data, index) => {
//                   return (
//                     <th key={index} className="text-left">
//                       {data}
//                     </th>
//                   );
//                 })}
//               </tr>
//             </thead>

//             <tbody>
//               {
//                 tableData ? (
//                   tableData.map((data, index) => {
//                     return (
//                         <tr>
//                           <td>{data.first_name + " " + data.last_name}</td>
//                           <td>{data.department_name}</td>
//                           <td>{data.program_name}</td>
//                         </tr>
//                     );
//                 })
//                 ) : (
//                       <td>No Data Found</td>
//                   )
//               }
//             </tbody>
//           </table>
//           <TableFooter
//             range={range}
//             slice={slice}
//             setPage={setPage}
//             page={page}
//             footerClass={givenClass}
//             setRowsPerPage={setRowsPerPage}
//             rowsPerPage={rowsPerPage}
//           />
//         </div>
//       );
//     }
    
//     //COMMON TABLE
//     else {
//       return (
//         <div className="table-container transaction-table-cont">
//           <div className="search-table-container row"></div>
//           <table className={tableClass + " max-width" + " table-loader"}>
//             <thead>
//               <tr>
//                 {headingColumns.map((data, index) => {
//                   return (
//                     <th key={index} className="text-left">
//                       {data}
//                     </th>
//                   );
//                 })}
//               </tr>
//             </thead>
//             <tbody>
//               {!isReady && useLoader ? (
//                 <TableLoader tableHeaders={headingColumns} data={tableData} />
//               ) : (
//                 data
//               )}
//             </tbody>
//           </table>
//           <TableFooter
//             range={range}
//             slice={slice}
//             setPage={setPage}
//             page={page}
//             footerClass={givenClass}
//             setRowsPerPage={setRowsPerPage}
//             rowsPerPage={rowsPerPage}
//           />
//         </div>
//       );
//     }
//   }
// }


// export default Table;