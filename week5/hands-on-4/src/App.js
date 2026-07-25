import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        name="Java Full Stack - Batch 5.0"
        status="ongoing"
        startDate="01-Jul-2026"
        trainer="Rahul Sharma"
      />
      <CohortDetails
        name="React JS - Batch 3.0"
        status="completed"
        startDate="15-Mar-2026"
        trainer="Priya Verma"
      />
      <CohortDetails
        name="Spring Boot - Batch 2.0"
        status="ongoing"
        startDate="10-Jun-2026"
        trainer="Amit Singh"
      />
    </div>
  );
}

export default App;
