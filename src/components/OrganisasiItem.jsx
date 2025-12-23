// src/components/OrganisasiItem.jsx
import React, { useState } from 'react';

// Komponen Item Organisasi
const OrganisasiItem = ({ jabatan, nama, warnaAwal, warnaHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    p-4
    h-24
    shadow-lg
    rounded-lg
    text-white
    font-bold
    text-center
    cursor-pointer
    relative
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    ${isHovered ? warnaHover : warnaAwal}
  `;

  // Kelas untuk Teks
  const textClasses = `
    absolute
    inset-0
    flex
    items-center
    justify-center
    p-4
    transition-transform
    duration-300
    ease-in-out
  `;
  
  const jabatanStyle = {
    transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
  };

  const namaStyle = {
    transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
  };


  return (
    <div
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={textClasses}
        style={jabatanStyle}
      >
        <span>{jabatan}</span>
      </div>

      <div
        className={textClasses}
        style={namaStyle}
      >
        <span className="text-lg">{nama}</span>
      </div>
    </div>
  );
};

export default OrganisasiItem;