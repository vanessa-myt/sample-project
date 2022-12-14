import React from 'react'
import {Row} from 'react-bootstrap'

export class Receipt extends React.PureComponent {
    render() {
      const marginTop = "10px";
      const marginRight = "10px";
      const marginBottom = "10px";
      const marginLeft = "20px";
      const getPageMargins = () => {
        return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
      };
  
      return (
        <div>
          <style>{getPageMargins()}</style>
          <div className="print-area-po">
            <Row>
                <table>
                    <tr>
                        <th className='center'>Sample Receipt</th>
                    </tr>
                </table>
                <table>
                    <tr className='form-label'>
                        <th>Items</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <th>Fries Large</th>
                        <th>2</th>
                        <th>147</th>
                    </tr>
                </table>
            </Row>
          </div>
        </div>
      );
    }
  }
  
  export default Receipt;
  