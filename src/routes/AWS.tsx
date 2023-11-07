import { Link } from "react-router-dom";

export default function AWS() {
  return (
    <div>
      <h2>AWS</h2>
      <ul>
        <li>
          <Link to='/aws/cloud-practitioner'>AWS Cloud Practitioner</Link>
        </li>
        <li>
          <Link to='/aws/solutions-architect-associate'>Solutions Architect Associate</Link>
        </li>

        <li>
          <Link to='/aws/developer-associate'>Developer Associate</Link>
        </li>

        <li>
          <Link to='/aws/sysops-administrator-associate'>SysOps Administrator Associate</Link>
        </li>

        <li>
          <Link to='/aws/solutions-architect-professional'>Solutions Architect Professional</Link>
        </li>

        <li>
          <Link to='/aws/devops-engineer-professional'>DevOps Engineer Professional</Link>
        </li>

        <li>
          <Link to='/aws/advanced-networking-specialty'>Advanced Networking Specialty</Link>
        </li>

        <li>
          <Link to='/aws/data-analytics-specialty'>Data Analytics Specialty</Link>
        </li>

        <li>
          <Link to='/aws/database-specialty'>Database Specialty</Link>
        </li>

        <li>
          <Link to='/aws/machine-learning-specialty'>Machine Learning Specialty</Link>
        </li>

        <li>
          <Link to='/aws/security-specialty'>Security Specialty</Link>
        </li>

        <li>
          <Link to='/aws/sap-on-aws-specialty'>SAP on AWS Specialty</Link>
        </li>
      </ul>
    </div>
  );
}
