import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  const navItems = [
    { title: "Profile & Score (100/100)", path: "/profile" },
    { title: "1. Admission & Placement (20/20)", path: "/admission-placement" },
    { title: "2. Academic Activities (15/15)", path: "/academic-activities" },
    { title: "3. Ph.D. Activity (10/10)", path: "/phd-activity" },
    { title: "4. Dept. & College Responsibility (5/5)", path: "/responsibility" },
    { title: "5. Publications (Journal/Books) (10/10)", path: "/publications" },
    { title: "6. IPR (Patent/Copy Right)/ Incubation/Innovation (10/10)", path: "/ipr" },
    { title: "7. Consultancy/MoU/ Start-Up/Expert (10/10)", path: "/consultancy" },
    { title: "8. Funded Projects (10/10)", path: "/funded-projects" },
    { title: "9. Seminar Grant/MOOC/ NPTEL/ATAL (5/5)", path: "/seminar-grant" },
    { title: "10. FDP/Conferences (5/5)", path: "/fdp-conferences" },
  ];

  return (
    <div className={`w-64 bg-indigo-700 text-white h-screen fixed left-0 top-0 flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">KSRCE PORTAL</h2>
      </div>
      <nav className="flex-1">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-3 text-sm ${
                isActive
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
              }`
            }
          >
            <div className="whitespace-normal">{item.title}</div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
