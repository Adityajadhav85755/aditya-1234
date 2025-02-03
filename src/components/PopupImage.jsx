import React from "react";

export default function PopupImage({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-hidden relative max-w-3xl w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-1 text-red-700 hover:text-red-500 text-3xl font-bold focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={src}
          alt="Popup View"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
}
