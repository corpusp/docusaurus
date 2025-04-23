import React from 'react';
import Link from '@docusaurus/Link';
import { FaBook, FaSearch, FaTools } from 'react-icons/fa';

const iconMap = {
  intro: <FaBook />,
  inspector: <FaSearch />,
  herramientas: <FaTools />,
};

export default function DocSidebarItemLink({ item, ...props }) {
  const icon = iconMap[item.id] || null;

  return (
    <li className="menu__list-item">
      <Link className="menu__link" to={item.href || `/docs/${item.id}`}>
        {icon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
        {item.label}
      </Link>
    </li>
  );
}
