import {useState} from 'react';
import {DateRangePicker} from 'react-date-range';
import styled from 'styled-components';
import {StyledDropdown} from './';
import {Stack} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import {addDays} from 'date-fns';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Wrapper = styled(DateRangePicker)`
  font-family : ${({theme})=>theme.secondary_font};
  font-weight: 300;
  font-size: 0.8rem;

  .rdrDayToday .rdrDayNumber span:after{
    display: none;
  }

  .rdrCalendarWrapper{
    padding: 2px;
    background-color:  #04050a !important;
    color: #F5F5F5 ;
  }

  .rdrDefinedRangesWrapper{
    display:none;
    background-color:  #04050a;
    border-color: #081028;
    color: #f5f5f5;
  }

  .rdrStaticRangeLabel{
    background-color:  #04050a;
    position: relative;
    border-color: #081028;
  }

  .rdrStaticRangeLabel span{
    color: #f5f5f5;
  }

  .rdrDateDisplayWrapper, .rdrInputRange{
    display: none ;
  }

  .rdrMonths, .rdrMonthAndYearWrapper{
    color:  #04050a;
    background: #081028 !important;
  }

  .rdrMonthName{
    color:  #04050a !important;
  }

  .rdrMonthAndYearPickers select{
    font-weight: 500;
    color: #F5F5F5;
    font-size: 1.125rem;
    border: none;
  }

  .rdrDayToday {
    outline: solid 0.2px;
    border-radius: 0.75rem;
    outline-offset: -6px;
    outline-color: #F5F5F5;
  }

  .rdrWeekDay, .rdrDayNumber span{
    color: #F5F5F5;
  }

  .rdrDayNumber{
    font-size: 0.8rem;
    padding: 0.3125rem;
  }
  .rdrDayStartPreview, .rdrDayPassive span{
    color: #00233C;
  }

  .rdrNextPrevButton{
    background-color:  #04050a;
  }

  .rdrNextPrevButton i{
    color: #F5F5F5;
  }

  .rdrInRange{
    background-color: #04050a33C !important;
    padding: 2px;  
  }

  .rdrStartEdge{
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    left: 2px;
  }
  .rdrDayStartPreview{
    border-top-width: 1px;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    left: 0px;
  }
  .rdrDayEndPreview{
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    right: 2px;
    right: 0px;
  }
  .rdrDayStartOfMonth .rdrInRange, 
  .rdrDayStartOfMonth .rdrEndEdge, 
  .rdrDayStartOfWeek .rdrInRange, .rdrDayStartOfWeek .rdrEndEdge{
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    left: 2px;
  }

  .rdrDayEndOfMonth .rdrInRange,  
  .rdrDayEndOfMonth .rdrStartEdge,  
  .rdrDayEndOfWeek .rdrInRange,  .rdrDayEndOfWeek .rdrStartEdge{
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    right: 2px;
  }

  .rdrDayStartOfMonth .rdrDayInPreview, 
  .rdrDayStartOfMonth .rdrDayEndPreview, 
  .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-left-width: 1px;
    left: 0px;
  }

  .rdrDayEndOfMonth .rdrDayInPreview, 
  .rdrDayEndOfMonth .rdrDayStartPreview, 
  .rdrDayEndOfWeek .rdrDayInPreview, .rdrDayEndOfWeek .rdrDayStartPreview{
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-right-width: 1px;
    right: 0px;
  }

  .rdrSelected{
    border-radius: 0.5rem;
  }

  .rdrEndEdge{
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    right: 2px;
  }

  .rdrNextButton i {
    margin: 0 0 0 7px;
    border-width: 4px 4px 4px 6px;
    border-color: transparent transparent transparent #F5F5F5;
    transform: translate(3px, 0px);
  }

  .rdrMonthAndYearWrapper select{
    background-color: #081028;
    overflow: hidden;
    border:none;
  }

  .rdrPprevButton i {
    border-width: 4px 6px 4px 4px;
    border-color: transparent #F5F5F5 transparent transparent;
    transform: translate(-3px, 0px);
  }

  .rdrSelected{
    border-radius: 0.5rem;
  }
`;

const DatePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  return (
    <div>
      <StyledDropdown>
        <StyledDropdown.Toggle className = "w-342" id="DropdownButton">
          <Stack direction='horizontal'>
            <FontAwesomeIcon icon={faCalendar} size='1x'/>
            <div className='mx-3 w-342'>
              {`${format(range[0].startDate, 'dd MMM yyyy')} - ${format(range[0].endDate, 'dd MMM yyyy')}`}
            </div>
          </Stack>
        </StyledDropdown.Toggle>
        <StyledDropdown.Menu className='w-auto'>
          <Wrapper
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={false}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="vertical"
            className="calendarElement"
            weekStartsOn = {1}
          />
        </StyledDropdown.Menu>
      </StyledDropdown>
    </div>
  );
};
export default DatePicker;
