import styled from "styled-components";
import ReactApexChart from 'react-apexcharts';
import {multiLineAreaSeries, LineOptions} from '../../mock/chartOptions.js';
import {ButtonGroup, ToggleButton, Dropdown, Button, Col} from 'react-bootstrap';
import { useState} from 'react';
import { DatePicker } from "../ui/index.js";
import {orders,products} from '../../mock/products.js'


const Wrapper = styled.div`

  padding: 5rem;
  background-color:#19191a;
  border-radius: .5rem;
  color: #ffff;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const TitleWrapper = styled.div`
  padding: 1rem;
  padding-bottom:2rem;
`;

const Title = styled.h2`
  color: #ffff;
`;

const SubText = styled.p`
  color: #fff;
`;

const StyledInfogridItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #04050a;
  padding: 2rem;
  border-radius: .8rem;
  h5 {
    white-space: nowrap;
    font-family: ${({theme}) => theme.primary_font};
    font-style: normal;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 1.125rem;
    color: ${({theme}) => theme.neutral_20};
  }

  .info {
    padding:1.4 rem;
    font-family: ${({theme}) => theme.primary_font};
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${({theme}) => theme.neutral_05};
  }

  .subtitle {
    font-size: 0.75rem;
    white-space: nowrap;
    color: ${({theme}) => theme.accent1_20};
  }

  @media (${({theme}) => theme.media_xs}) {
    width: 12rem;
    height: 6rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    max-width:100vw;
    min-width:fit-content;

    &:first-child{
      width: 25rem;
      height: 7rem;
      padding-left: 3rem;
      padding-top: 1rem;
    }

    h5 {
      font-size: 0.8rem;
      line-height: 0.875rem;
      margin-bottom: 0.5rem;
    }

    .info {
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-bottom: 4px;
    }

    .subtitle {
      font-size: 0.875rem;
    }
  }

  @media (${({theme}) => theme.media_sm}) {
    width: 48.5%;
    height: 6rem;
    padding: 0.75rem;
    border-radius: 0.5rem;

    &:first-child{
      width: 100% !important;
      height: 7rem;
      padding-left: 5rem;
      padding-top: 1rem;
    }
    
    h5 {
      font-size: 0.85rem;
      line-height: 0.875rem;
      margin-bottom: 0.5rem;
    }

    .info {
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-bottom: 4px;
    }

    .subtitle {
      font-size: 0.875rem;
    }
  }

  @media(${({theme})=>theme.media_md}) {
    width: auto;
    max-width: 20rem;
    height: 7.5rem; 
    border-radius: 1rem;
    padding:1rem 1.25rem;

    &:first-child{
      width: auto;
      height: 7.5rem;
      padding-left: 1.75rem;
      padding-top: 1rem;
      .info {
        font-size: 1.25rem;
        line-height: 1rem;
        padding-bottom: 0.5rem;
      }
    }

    h5 {
      font-size: 0.875rem;
      line-height: 1.125rem;
      margin-top:0;
      margin-bottom: 0.5rem;
    }

    .info {
      font-size: 1.25rem;
      line-height: 2rem;
      margin-top:0;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
      line-height: 1.125rem;
      margin-top: 0;
    }
  }

  @media (${({theme}) => theme.media_lg}) {
    padding: 1.5rem;
    height: 8rem;
    max-width: 15.6rem;

    &:first-child{
      width: 100% !important;
      height: 8rem;
      padding-left: 1rem;
      padding-top: 1.4rem;
      .info {
        font-size: 1.25rem;
        line-height: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
    
    h5 {
      font-size: 0.875rem;
      line-height: 1.125rem;
      margin-bottom: 0.5rem;
    }

    .info {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }

  @media (${({theme}) => theme.media_xl}) {

    &:first-child{
      width: 100% !important;
      height: 8rem;
      padding-left: 1rem;
      padding-top: 1.5rem;
      .info {
        font-size: 1.25rem;
        line-height: 1rem;
        padding-bottom: 0.5rem;
      }
    }

    h5 {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    .info {
      font-size: 1.25rem;
      line-height: 2rem;
    }

    .subtitle {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }

  @media (${({theme}) => theme.media_xxl}) {

    &:first-child{
      width: 100% !important;
      height: 8rem;
      padding-left: 1rem;
      padding-top: 1.5rem;
      .info {
        font-size: 1.4rem;
        line-height: 1.4rem;
        padding-bottom: 0.25rem;
      }
    }

    h5 {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    .info {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    .subtitle {
      font-size: 1rem;
      line-height: 1.187rem;
    }
  }

`;

const InfogridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.625rem;
  @media (${({theme})=>theme.media_xs}){
    padding: 0.875rem;   
    justify-content: center; 
    gap: 0.75rem;
  }
  @media (${({theme}) => theme.media_sm}) {
    padding: 0.875rem;
    justify-content: center; 
    gap: 0.75rem;
  }
  @media (${({theme}) => theme.media_md}) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const ButtonGroupWrapper = styled.div`
 margin-top:.5rem;
 display: flex;
 justify-content: end;
 margin-left:auto;
 margin-right: 2rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  padding: 1rem;
  gap: .5;
`;

const ChartContainer = styled.div` 
  background-color: #19191a;
  border-radius: 1rem;
  padding:2rem;
  text-align: right;

  
  /* .apexcharts-svg{
    overflow: visible !important;
    
    foreignObject{
      overflow: visible !important;
    }
  } */
  .pexcharts-legend{
    margin-bottom: 40px;
  }

  @media(${({theme})=>theme.media_xs}){
    margin-bottom: 3rem;
  }
  @media(${({theme})=>theme.media_sm}){
    margin-bottom: 3rem;
  }
  @media(${({theme})=>theme.media_md}){
    margin-bottom: 7rem;
  }
`;

const Container = styled.div`
     background-color: #04050a;
`;

const TableContainer = styled.div`
    background-color:#19191a ;
    margin-top: 2rem;
    padding: 2rem;
    justify-content:space-between;
    border-radius: .8rem;
`;

const ExportButton = styled(Button)`

`;

const Img = styled.img`
  width: 8rem;
  border-radius: .8rem;
`;


const Row = styled.div`
  display: flex;
  color: #ffff;
  gap: 2;
  align-text: left;
  padding: 2rem;
  background: black;
  border-radius: .8rem;
  margin-bottom: .7rem;
  h2, p{
      align-self: center;
  }
  
`;

const TitleRow = styled.div`
  display: flex;
  color: #ffff;
  gap: 2;
  align-text: left;
  padding: 2rem;
  border-radius: .8rem;
  margin-bottom: .7rem;
  h2, p{
      align-self: center;
  }
  
`;

const Dashboard = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [subTitle, setSubTitle] = useState([]);
  const series = [1.5,1];
  const labels = ['web', 'mobile'];
  const [options] = useState({
  
    chart: {
      type: 'donut',
      events: {
        dataPointSelection: function(event, chartContext, config) {
          setSelectedLabel(labels[config.dataPointIndex]);
          setSubTitle(labels[config.dataPointIndex]);
        },
      },
    },
    stroke: {
      show: false,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    colors: ['#03a1fc', '#fc0339'],
    labels: labels,
    states: {
      hover: {
        filter: 'none',
      },
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: false,
      formatter: () => '',
      textAnchor: 'start',
      distributed: true,
      offsetX: 0,
      offsetY: 100,
      style: {
        fontSize: '12px',
        fontFamily: 'FontAwesome',
        colors: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return '';
        },
        title: {
          formatter: function(seriesName) {
            return seriesName;
          },
        },
      },
    },
    legend: {
      show: false},
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
  });

  const nameFormat = (name) => {
   return name.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d)
  }

    return(
        <Container>
    <Wrapper>
      <TitleWrapper>
        <Title>
          Sales Dashboard
        </Title>
        <SubText>
          Overview of a sales report example
        </SubText>
      </TitleWrapper>
      <InfogridWrapper>
        <StyledInfogridItem>
          <><h5>Total Value</h5>
            <div className='info'>
          {orders[0]?.totalVal} </div>
          </>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Top Country</h5>
            <div className='info'>
          {orders[0]?.topCountry}</div></>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Web Customers</h5>
            <div className='info'>
            {orders[0]?.numOnlineCustomers} customers</div></>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Average Order Value</h5>
            <div className='info'>
          {orders[0]?.avgOrder} </div></>
        </StyledInfogridItem>
        <StyledInfogridItem>
        <>
        <h5>G/A</h5>
        <ReactApexChart options={options} series={series} type="donut" width={125} />
        <div className="info my-1">{selectedLabel[1] != null ? selectedLabel : '-'}</div>
        </>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Recent Form</h5>
            <div className='info'>
            {orders[0]?.newCustomers} customers</div></>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Transfer Value</h5>
            <div className='info'>
            2000 customers</div></>
        </StyledInfogridItem>
        <StyledInfogridItem>
          <><h5>Trophies</h5>
            <div className='info'>
            {orders[0]?.shippingCost}</div></>
        </StyledInfogridItem>
      </InfogridWrapper>
      <ButtonGroupWrapper>
      </ButtonGroupWrapper>
      <DatePicker />
    </Wrapper>
    <ChartContainer>
         <>
          <ReactApexChart options={LineOptions} series={multiLineAreaSeries} height={'500'} type='area'/>
        </> 
        
      </ChartContainer>
        <TableContainer>

        <Title>Top Products</Title>
        <SubText>Monthly breakdown of top product sales</SubText>
        <TitleRow>
             <StyledCol>

             </StyledCol>
             <StyledCol>
               Product Name
             </StyledCol>
             <StyledCol>
               Units Sold
             </StyledCol>
             <StyledCol>
               Retail Price
             </StyledCol>
           </TitleRow>
            {products.map(item =>
            <>
            <Row className={item.index}>
             
               <StyledCol>
              <Img src = {item.src} />
              </StyledCol>
              <StyledCol>
              <h2>{item.name}</h2>
              </StyledCol>
              <StyledCol>
              <p>{item.unitsSold}</p>
              </StyledCol>
              <StyledCol>
              <p>{item.retailPrice}</p>
              </StyledCol>
            </Row>
            </>
            )}

         <a href = "/mail" ><ExportButton disabled>Send Report</ExportButton></a>
        </TableContainer>
        </Container>
    )
}

export default Dashboard;