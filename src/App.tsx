import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./routes/Home";
import AWS from "./routes/AWS";
import AWSCloudPractitioner from "./routes/AWSCloudPractitioner";
import AWSSolutionsArchitectAssociate from "./routes/AWSSolutionsArchitectAssociate";
import AWSDeveloperAssociate from "./routes/AWSDeveloperAssociate";
import AWSSysOpsAdministratorAssociate from "./routes/AWSSysOpsAdministratorAssociate";
import AWSSolutionsArchitectProfessional from "./routes/AWSSolutionsArchitectProfessional";
import AWSDevOpsProfessional from "./routes/AWSDevOpsProfessional";
import AWSAdvancedNetworkingSpecialty from "./routes/AWSAdvancedNetworkingSpecialty";
import AWSSDataAnalyticsSpecialty from "./routes/AWSDataAnalyticsSpecialty";
import AWSDatabaseSpecialty from "./routes/AWSDatabaseSpecialty";
import AWSMachineLearningSpecialty from "./routes/AWSMachineLearningSpecialty";
import AWSSecuritySpecialty from "./routes/AWSSecuritySpecialty";
import AWSSAPOnAWSSpecialty from "./routes/AWSSAPOnAWSSpecialty";

import Azure from "./routes/Azure";
import CompTIA from "./routes/CompTIA";
import NoMatch from "./routes/NoMatch";
import Navigation from "./layouts/Navigation";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path='aws' element={<AWS />} />
          <Route path='aws/cloud-practitioner' element={<AWSCloudPractitioner />} />
          <Route path='aws/solutions-architect-associate' element={<AWSSolutionsArchitectAssociate />} />
          <Route path='aws/developer-associate' element={<AWSDeveloperAssociate />} />
          <Route path='aws/sysops-administrator-associate' element={<AWSSysOpsAdministratorAssociate />} />
          <Route path='aws/solutions-architect-professional' element={<AWSSolutionsArchitectProfessional />} />
          <Route path='aws/devops-engineer-professional' element={<AWSDevOpsProfessional />} />
          <Route path='aws/advanced-networking-specialty' element={<AWSAdvancedNetworkingSpecialty />} />
          <Route path='aws/data-analytics-specialty' element={<AWSSDataAnalyticsSpecialty />} />
          <Route path='aws/database-specialty' element={<AWSDatabaseSpecialty />} />
          <Route path='aws/machine-learning-specialty' element={<AWSMachineLearningSpecialty />} />
          <Route path='aws/security-specialty' element={<AWSSecuritySpecialty />} />
          <Route path='aws/sap-on-aws-specialty' element={<AWSSAPOnAWSSpecialty />} />

          <Route path='azure' element={<Azure />} />

          <Route path='comptia' element={<CompTIA />} />

          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
