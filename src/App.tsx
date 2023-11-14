import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "./layouts/Navigation";

// pages
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import CertPath from "./pages/CertPath";
import NoMatch from "./pages/NoMatch";

// data
import { org_aws, org_azure, org_comptia } from "./data/Organizations";
import {
  cert_aws_cloudpractitioner,
  cert_aws_solutionsarchitectassociate,
  cert_aws_developerassociate,
  cert_aws_sysopsadministratorassociate,
  cert_aws_solutionsarchitectprofessional,
  cert_aws_devopsengineerprofessional,
  cert_aws_advancednetworkingspecialty,
  cert_aws_dataanalyticsspecialty,
  cert_aws_databasespecialty,
  cert_aws_machinelearningspecialty,
  cert_aws_securityspecialty,
  cert_aws_saponawsspecialty,
} from "./data/Certifications";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path='aws' element={<Organization title='AWS Certifications' organization={org_aws} />} />
          <Route path='azure' element={<Organization title='Azure Certifications' organization={org_azure} />} />
          <Route path='comptia' element={<Organization title='CompTIA Certifications' organization={org_comptia} />} />

          <Route path='aws/cloud-practitioner' element={<CertPath pathTitle='Cloud Practitioner' cert={cert_aws_cloudpractitioner} />} />
          <Route
            path='aws/solutions-architect-associate'
            element={<CertPath pathTitle='Solutions Architect Associate' cert={cert_aws_solutionsarchitectassociate} />}
          />
          <Route path='aws/developer-associate' element={<CertPath pathTitle='Developer Associate' cert={cert_aws_developerassociate} />} />
          <Route
            path='aws/sysops-administrator-associate'
            element={<CertPath pathTitle='SysOps Administrator Associate' cert={cert_aws_sysopsadministratorassociate} />}
          />
          <Route
            path='aws/solutions-architect-professional'
            element={<CertPath pathTitle='Solutions Architect Professional' cert={cert_aws_solutionsarchitectprofessional} />}
          />
          <Route
            path='aws/devops-engineer-professional'
            element={<CertPath pathTitle='DevOps Engineer Professional' cert={cert_aws_devopsengineerprofessional} />}
          />
          <Route
            path='aws/advanced-networking-specialty'
            element={<CertPath pathTitle='Advanced Networking Specialty' cert={cert_aws_advancednetworkingspecialty} />}
          />
          <Route
            path='aws/data-analytics-specialty'
            element={<CertPath pathTitle='Data Analytics Specialty' cert={cert_aws_dataanalyticsspecialty} />}
          />
          <Route path='aws/database-specialty' element={<CertPath pathTitle='Database Specialty' cert={cert_aws_databasespecialty} />} />
          <Route
            path='aws/machine-learning-specialty'
            element={<CertPath pathTitle='Machine Learning Specialty' cert={cert_aws_machinelearningspecialty} />}
          />
          <Route path='aws/security-specialty' element={<CertPath pathTitle='Security Specialty' cert={cert_aws_securityspecialty} />} />
          <Route path='aws/sap-on-aws-specialty' element={<CertPath pathTitle='SAP on AWS Specialty' cert={cert_aws_saponawsspecialty} />} />

          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
