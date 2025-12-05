// src/components/ActivityModal.jsx
import React from 'react';

const ActivityModal = ({ activity, onClose }) => {
  if (!activity) return null; // Jangan tampilkan jika tidak ada data

  // Menangani penutupan pop-up ketika mengklik latar belakang gelap
  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    // Latar belakang gelap (Overlay)
    <div 
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Konten Modal */}
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-6 shadow-2xl transform scale-100 transition-transform duration-300">
        
        {/* Header Modal */}
        <div className="flex justify-between items-start border-b pb-3 mb-4 sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold text-gray-800">
            Detail Kegiatan: {activity.sinopsis.substring(0, 30)}...
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition"
            aria-label="Tutup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        {/* Gambar di Modal */}
        <img 
          src={activity.image} 
          alt="Dokumentasi Kegiatan" 
          className="w-full h-auto rounded-lg mb-4" 
        />

        {/* Teks Lengkap Artikel */}
        <p className="text-sm text-gray-600 mb-2">
          Tanggal: {activity.date}
        </p>
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {/* Ini adalah teks penuh yang panjang */}
          {activity.fullText}
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;   