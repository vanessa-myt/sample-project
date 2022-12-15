import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'

function ExportCSV({name, data, headers}) {
  return (
    <CSVLink filename={name} data={data} headers={headers}>
        <Button className="export-csv-icon">
            <FontAwesomeIcon
            icon={"fa-download"}
            alt={"close"}
            className={"csv-icon"}
            aria-hidden="true"
            />{" "}
            Export to Excel
        </Button>
  </CSVLink>
  )
}

export default ExportCSV