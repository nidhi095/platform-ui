import { X, Copy, Paperclip, Expand, MapPin, ReceiptText } from 'lucide-react';

interface ExpenseDetailsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpenseDetailsSidebar({ isOpen, onClose }: ExpenseDetailsSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out border-l border-gray-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
          <h2 className="font-semibold text-gray-900">Expense Details</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-md transition-colors"><Copy size={16} /></button>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-md transition-colors"><Paperclip size={16} /></button>
            <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-50 rounded-md transition-colors bg-gray-50"><X size={16} /></button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          
          {/* Receipt Image Placeholder */}
          <div className="relative aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center border border-gray-200 overflow-hidden group">
            {/* Transparent Checkerboard Pattern CSS */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), repeating-linear-gradient(45deg, #ccc 25%, #fff 25%, #fff 75%, #ccc 75%, #ccc)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
            
            <ReceiptText size={48} className="text-gray-300 z-10" />
            
            <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm hover:bg-white z-10">
              <Expand size={14} /> Expand
            </button>
          </div>

          {/* Title & Amount */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-bold text-gray-900">Purchase of food items</h1>
              <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded text-xs font-semibold">Reimbursable</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">120 INR</h2>
            <p className="text-sm text-gray-500 flex items-center gap-1.5"><MapPin size={14} /> Kalpavruksha Restaurant</p>
          </div>

          {/* Editable Fields Form */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Editable fields</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">EXPENSE TITLE</label>
                <input type="text" defaultValue="Purchase of food items" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] focus:border-[#7C3AED]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">AMOUNT</label>
                <input type="text" defaultValue="120 INR" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] focus:border-[#7C3AED]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">MERCHANT</label>
                <input type="text" defaultValue="Kalpavruksha Restaurant" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] focus:border-[#7C3AED]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">DATE</label>
                <input type="date" defaultValue="2026-02-24" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] focus:border-[#7C3AED]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">CATEGORY</label>
                <select className="w-full px-3 py-2 bg-indigo-50 border border-indigo-100 rounded-md text-sm text-[#7C3AED] font-medium focus:outline-none focus:ring-1 focus:ring-[#7C3AED]">
                  <option>🍴 Food & Dining</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">OWNER</label>
                <div className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></div>
                  Owner
                </div>
              </div>
            </div>
          </div>

          {/* AI Match Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <div>
              <p className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-wider mb-1">AI MATCH SCORE</p>
              <p className="text-emerald-600 font-semibold flex items-center gap-1"><span className="text-lg">◎</span> 92% Match</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-wider mb-1">REIMBURSEMENT</p>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-semibold">Eligible</span>
            </div>
          </div>

          {/* Extracted Items */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-800 mb-4">Extracted Items</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
              <div className="flex justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-gray-600">Food Items (Assorted)</span>
                <span className="font-medium">114.28 INR</span>
              </div>
              <div className="flex justify-between px-4 py-3 border-b border-gray-100 text-gray-400">
                <span>CGST (2.5%)</span>
                <span>2.86 INR</span>
              </div>
              <div className="flex justify-between px-4 py-3 border-b border-gray-100 text-gray-400">
                <span>SGST (2.5%)</span>
                <span>2.86 INR</span>
              </div>
              <div className="flex justify-between px-4 py-4 bg-gray-50 font-bold text-gray-900">
                <span>Total Amount</span>
                <span>120.00 INR</span>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">NOTES</h3>
            <textarea 
              placeholder="Add a note for finance team, attach context, or describe the purchase..."
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] focus:border-[#7C3AED] min-h-[100px] resize-y"
            ></textarea>
          </div>

        </div>
      </div>
    </>
  );
}