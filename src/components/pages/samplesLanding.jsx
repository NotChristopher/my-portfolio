import styled from 'styled-components';
import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Buttons} from './'

const NavContainer = styled.div`
    display: inline;
    padding: 2rem;
`;

const NavSpacer = styled.span`
 margin : 1rem;`

const SamplesLanding = () => {

    return (
        <>
        <NavContainer>
        <NavLink to='/samplecode/buttons'>Buttons</NavLink><NavSpacer />
        <NavLink to='/samplecode/graphs'>Graphs and Charts</NavLink><NavSpacer />
        <NavLink to='/samplecode/api'>API</NavLink><NavSpacer />
        <NavLink to='/samplecode/crm-dashboard'>CRM dashboard</NavLink><NavSpacer />
        <NavLink to='/samplecode/comparasion-graphs'>Comparasion graphs</NavLink><NavSpacer />
        <NavLink to='/samplecode/filters'>Filters</NavLink><NavSpacer />
        <NavLink to='/samplecode/forms'>Forms</NavLink><NavSpacer />
        <NavLink to='/samplecode/datepickers'>Datepickers</NavLink><NavSpacer />
        </NavContainer>
        <Routes>
        <Route><Route path="/" element={<Buttons />} /></Route>
            <Route><Route path="/" element={<Navigate replace to="/samplecode/buttons" />} /></Route>
            <Route path="/samplecode/buttons" element={<Buttons />} />
        </Routes>
        </>
    )

};

export default SamplesLanding;