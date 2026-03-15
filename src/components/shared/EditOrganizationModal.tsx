import { X, Settings, Music } from 'lucide-react';

interface EditOrganizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditOrganizationModal({ isOpen, onClose }: EditOrganizationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-50 p-2.5 rounded-xl text-[#7C3AED]">
              <Settings size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-0.5">Edit Organization</h2>
              <p className="text-sm text-gray-500">Update details, address & logo</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors bg-gray-50">
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Logo Uploader */}
          <div className="w-full md:w-56 flex-shrink-0">
            <label className="block text-sm font-medium text-gray-700 mb-3">Organization Logo</label>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#7C3AED] hover:shadow-sm transition-all shadow-sm">
              
              {/* Fake App Logo matching your screenshot */}
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-4 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/20"></div>
                <Music size={28} className="text-pink-500 relative z-10" fill="currentColor" />
              </div>
              
              <p className="text-sm font-semibold text-gray-900 mb-1">Click to change logo</p>
              <p className="text-xs text-gray-400 mb-3">JPG, PNG — max 2MB</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Shown on PDF exports</p>
            </div>
          </div>

          {/* Right Column: Form Fields */}
          <div className="flex-1 space-y-5">
            
            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                defaultValue="Codestellar Technologies Pvt Ltd." 
                className="w-full px-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-colors font-medium" 
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
              <input 
                type="text" 
                placeholder="Brief description..." 
                className="w-full px-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-colors" 
              />
            </div>

            {/* Address */}
            <div>
              <div className="flex items-baseline gap-2 mb-1.5">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Shown on PDF reports</span>
              </div>
              <textarea 
                defaultValue="Cabin No.3.2, Nextcoworks, Munivenkatppa Layout, Ranka Colony Bannerghatta Road, Bangalore Karnataka, 560076, India" 
                className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-colors min-h-[100px] resize-none leading-relaxed" 
              ></textarea>
            </div>

            {/* GST Number */}
            <div>
              <div className="flex items-baseline gap-2 mb-1.5">
                <label className="block text-sm font-medium text-gray-700">GST Number</label>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Shown on PDF reports</span>
              </div>
              <input 
                type="text" 
                placeholder="e.g. 22AAAAA0000A1Z5" 
                className="w-full px-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-colors" 
              />
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white mt-auto">
          <button 
            onClick={onClose} 
            className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}