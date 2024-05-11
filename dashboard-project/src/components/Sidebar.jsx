import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsSpeedometer, BsPeople, BsGear } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function Sidebar() {
  const location = useLocation();
  const activeClass = 'rounded-md bg-gray-600 text-white p-2';

  const sideBarArray = [
    { name: 'Dashboard', path: '/dashboard', icon: <BsSpeedometer /> },
    { name: 'Admin', path: '/admin', icon: <BsGear /> },
    { name: 'Students', path: '/students', icon: <BsPeople /> }
    
  ];

  return (
    <aside className="bg-gray-400 w-64 px-4 py-8">
      <h2 className="text-lg font-semibold mb-4"></h2>
      <ul>
        {sideBarArray.map((item, index) => (
          <li key={item.path} className={`mb-6 ${index < sideBarArray.length - 1 ? 'mb-6' : ''}`}>
            <NavLink
              exact={true}
              to={item.path}
              className={`flex items-center text-gray-900 ${location.pathname === item.path ? activeClass : ''}`}
              style={{ color: 'white ' }}
            >
              <IconContext.Provider value={{ className: 'mr-2 ml-1', size: '1.5em' }}> 
                {item.icon}
              </IconContext.Provider>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

