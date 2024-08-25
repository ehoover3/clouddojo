import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  text: string;
  subtext?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, text, subtext }) => {
  return (
    <RouterLink to={to} className='navLink'>
      <span className='navLinkText'>{text}</span>
      {subtext && <span className='navLinkSubtext'>{subtext}</span>}
    </RouterLink>
  );
};

export default NavLink;
