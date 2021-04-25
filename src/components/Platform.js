import React from 'react';
import Container from '@material-ui/core/Container';
import InterviewSection from './InterviewSection';
import DashboardSection from './DashboardSection';



export default () => {
    return (
        <div className="platform-section" id="service" >
            <Container>
                <InterviewSection />
                <DashboardSection />
            </Container>
        </div>
    );
};
