import React from 'react'
import {Row} from 'react-bootstrap'

import "./Receipt.css"

export class Receipt extends React.PureComponent {
    render() {
      const marginTop = "-1080px";
      const marginRight = "10px";
      const marginBottom = "-200px";
      const marginLeft = "10px";
      const getPageMargins = () => {
        return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
      };
  
      return (
        <div>
          <style>{getPageMargins()}</style>
          <div className="print-area rounded p-4 single-widtd">
            <Row>
              <table>
                  <tr>
                    <td className='align-center print-text'>MYT SOFTDEV SOLUTIONS INC.</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>INNOVATIVE.INTUITIVE.POWERFUL</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>3F THE GREENERY, MABOLO, CEBU CITY</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>FRONTEND CORE PROJECT</td>
                  </tr>
                  <tr>
                      <th className='align-center print-text'>Sample Receipt</th>
                  </tr>
                </table>
            </Row>
            <hr/>
            <Row className='center'>
                <table>
                    <tr>
                        <td className='align-left print-text'>Items</td>
                        <td className='align-center print-text'>Qty</td>
                        <td className='align-right print-text'>Amount</td>
                    </tr>
                    <tr>
                        <td className='align-left print-text'>Fries Large</td>
                        <td className='align-center print-text'>2</td>
                        <td className='align-right print-text'>147</td>
                    </tr>
                    <tr >
                        <td className='align-left print-text'>Fries Large</td>
                        <td className='align-center print-text'>2</td>
                        <td className='align-right print-text'>147</td>
                    </tr>
                    <tr>
                        <td className='align-left print-text'>Fries Large</td>
                        <td className='align-center print-text'>2</td>
                        <td className='align-right print-text'>147</td>
                    </tr>
                </table>
              </Row>
                <hr/>
              <Row className='center'>
                <table>
                  <tr>
                    <td className='align-left print-text'>SUBTOTAL</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>VAT EXEMPTION</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>TOTAL DISCOUNT</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th className='align-left print-text'>TOTAL</th>
                    <td className='align-center print-text'>Item/s</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                </table>
                <hr/>
                <table>
                  <tr>
                    <td className='align-left print-text'>PAYMENT TYPE</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>PAID AMOUNT</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>CHANGE</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>VAT Sales</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>VAT Examept Sales</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>Total Sales</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>Total VAT</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>Zero-Rated Sales</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>Total Amount</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>Total Discount</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>VAT Exempt</td>
                    <td className='align-center print-text'>:</td>
                    <td className='align-right print-text'>0.00</td>
                  </tr>
                </table>
                ===============================================================================
                <table>
                  <tr>
                    <td className='align-center print-text'>dine-in</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>Table NO. 3 PAX 3</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>MOBILE NO. 09673203748</td>
                  </tr>
                </table>
                ===============================================================================
                <table>
                  <tr>
                    <td className='align-center print-text'>OR No. 00000000000041</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>Dec.21, 2022 08:49:01</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>THIS SERVES AS AN OFFICIAL RECEIPT</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>THANK YOU PLEASE COME AGAIN!</td>
                  </tr>
                </table>
                =====================================================================================================================================
                <table>
                  <tr>
                    <td className='align-left print-text'>ID</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>123456</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>NAME</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>DONNA CUESTA</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>SIGNATURE</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>_____________________</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td className='align-left print-text'>ID</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>_____________________</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>NAME</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>_____________________</td>
                  </tr>
                  <tr>
                    <td className='align-left print-text'>SIGNATURE</td>
                    <td className='print-text'>:</td>
                    <td className='left print-text'>_____________________</td>
                  </tr>
                </table>
                =====================================================================================================================================
                <table>
                  <tr>
                    <td className='align-center print-text'>POS System Provider</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>MYT SoftDev Solutions, Inc.</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>301 The Greenery, Pope John Paul II Ave.</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>Cebu City, Cebu</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>TIN 497-280-919-0000</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>BIR ACCREDITATION: #000-000000000-000000</td>
                  </tr>
                  <tr>
                    <td className='align-center print-text'>Issued: 00/00/0000 - Until: 00/00/0000</td>
                  </tr>
                </table>
            </Row>
          </div>
        </div>
      );
    }
  }
  
  export default Receipt;
  