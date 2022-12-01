import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import './Chart.css';
import '../../Pages/Dashboard/Dahsboard.css';
//Images
import Search from "../../Assets/Dashboard/search.png";
import User from "../../Assets/Dashboard/user.png";
//Component
import Navbar from "../../Components/Navbar/Navbar";

//import Chart
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend,} from "chart.js";

function Chart() {

    const [inactive, setInactive] = useState(false);

    //Dummy Data
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }; 

      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
      );

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'MANAGE'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <Col xs='6'>
                    <h1 className='page-title left'>CHART</h1>
                </Col>
                
                <Col xs='6'>
                    <div className='branch-wrapper right'>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Search' 
                            className='search-input-text'                    
                        />
                        <div className="branch-icon">
                            <img className='search-icon' src={Search}></img>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs="6">
                    <h6 className='text-label me-5'>Doughnut Chart</h6>
                    <Row>
                        <Doughnut className="chart-size ms-5" data={data}/>
                    </Row>
                </Col>
                <Col xs="6">
                    <label className='text-label me-5'>Line Chart</label>
                    <Row>
                        <Line className="chart-size ms-5" data={data}/>
                    </Row>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs="6">
                    <h6 className='text-label me-5'>Pie Chart</h6>
                    <Row>
                        <Pie className="chart-size ms-5" data={data}/>
                    </Row>
                </Col>
                <Col xs="6">
                    <label className='text-label me-5'>Bar Chart</label>
                    <Row>
                        <Bar className="chart-size ms-5" data={data}/>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Chart;