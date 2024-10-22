import React from 'react';

// Define the props type if necessary, or use this without props
interface SidebarProps {
  // You can add any props like menu items or links here
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
