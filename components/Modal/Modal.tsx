'use client';

interface EidModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<EidModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 text-center relative w-80 shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 ঈদ মোবারক!</h2>
        <p className="mb-4 text-black">আপনার ও আপনার পরিবারের জন্য ঈদের শুভেচ্ছা 🌙</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          বন্ধ করুন
        </button>
      </div>
    </div>
  );
};

export default Modal;
