import React, {useState} from "react"
import 'jspdf-autotable';
import jsPDF from "jspdf";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Exports.css"


export default function ExportPDF({type, name, data, data2=[], header, header2=[]}){
  
  var infos = [];
  var infosummary = [];
  var footers = []
  var footersSummary = [];

  data.map((info, index) => {
  infos.push(Object.values(info));
    })

  function print(){
  const doc = new jsPDF('l', 'mm', "tabloid");

  doc.text(name, 20, 20);
  doc.autoTable({
      headStyles: {
        fillColor: "#EC0B8C", 
      },
      footStyles:{
        fontStyle:"bold",
        fillColor: "#2A96C6"
      },
      styles:{
        fontSize: 7
      },
      theme: "striped",
      margin: { top: 25 },
      head: [header2],
      body: infosummary, 
      foot:footersSummary
    })
  doc.autoTable({
      headStyles: {
        fillColor: "#EC0B8C", 
      },
      footStyles:{
        fontStyle:"bold",
        fillColor: "#2A96C6"
      },
      styles:{
        fontSize: 7
      },
      columnStyles: {
        10: {cellWidth: 20},
      },
      theme: "striped",
      margin: { top: 25 },
      head: [header],
      foot:footers,
      body: infos, 
      startY: doc.lastAutoTable.finalY + 10
    })

  doc.save(name + '.pdf')
  }
  

  return (
    <Button className="export-pdf-icon mb-2" onClick={print}>
       <FontAwesomeIcon
          icon={"fa-download"}
          alt={"close"}
          className={"pdf-icon"}
          aria-hidden="true"
          // style={{color:'#aacc00'}}
        />
        {" "}
          Export to PDF
    </Button>)
}