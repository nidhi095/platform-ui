import { X, UploadCloud, Image as ImageIcon, FileText, CheckCircle2 } from 'lucide-react';

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddExpenseModal({ isOpen, onClose }: AddExpenseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Add Expense</h2>
            <p className="text-sm text-gray-500">Fill in the details to record a new organization expense.</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* Auto-Scan Section */}
          <div className="bg-[#F8F9FF] border border-indigo-100 rounded-xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-1.5 rounded-md shadow-sm text-[#7C3AED]">
                <UploadCloud size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">Auto-Scan Receipts</h3>
              <p className="text-sm text-gray-500 ml-auto">Drop multiple bills at once. No manual entry needed.</p>
            </div>

            {/* Dropzone */}
            <div className="border-2 border-dashed border-indigo-200 bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-50/50 transition-colors mb-4">
              <UploadCloud size={28} className="text-gray-400 mb-3" />
              <p className="font-semibold text-gray-800 mb-1">Drop or click to scan</p>
              <p className="text-xs text-gray-500">Images or PDF • Multiple files supported</p>
            </div>

            {/* Uploading Files List */}
            <div className="space-y-3">
              {/* File 1: Uploading */}
              <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center gap-4 shadow-sm">
                <div className="bg-indigo-50 p-2 rounded text-[#7C3AED]"><ImageIcon size={20} /></div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-800">Lunch_Meeting_Bill.jpg</span>
                    <span className="text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-[#7C3AED] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><X size={16} /></button>
              </div>

              {/* File 2: Completed */}
              <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center gap-4 shadow-sm">
                <div className="bg-gray-50 p-2 rounded text-gray-400"><FileText size={20} /></div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-800">Uber_Airport_Trip.pdf</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><X size={16} /></button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs font-bold text-gray-400 tracking-wider">OR MANUAL ENTRY</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Manual Entry Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
              <input type="text" placeholder="E.g. Office supplies" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]" />
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input type="text" placeholder="0.00" className="w-full pl-8 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                <input type="date" defaultValue="2026-03-13" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] appearance-none">
                  <option>Select category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subcategory</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] appearance-none">
                  <option>Select subcategory</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}