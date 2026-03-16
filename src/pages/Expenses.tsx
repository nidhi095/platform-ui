import { useState } from 'react';
import { Search, Filter, List, Grid, FileText, ArrowUpRight, Coffee, Utensils, Car, ShoppingBag, ArrowLeft, MoreHorizontal, ReceiptText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExpenseDetailsSidebar from '../components/shared/ExpenseDetailsSidebar';

const expensesList = [
  { id: 1, title: 'Purchase of food items', date: 'Feb 24, 2026', vendor: 'Kalpavruksha Restaurant', status: 'Reimbursable', statusColor: 'text-emerald-600', amount: '120 INR', icon: <Utensils size={12} />, category: 'Food & Dining', match: '92%', tag: 'Auto parsed • Submitted 2 hours ago' },
  { id: 2, title: 'Food items purchase', date: 'Feb 21, 2026', vendor: 'Sri Bhagya Grand', status: 'Pending review', statusColor: 'text-gray-500', amount: '555 INR', icon: <Coffee size={12} />, category: 'Cafes', match: '88%', tag: 'Verified • Team coffee' },
  { id: 3, title: 'South Indian meal, sizwan noodles', date: 'Feb 12, 2026', vendor: 'Kalpavruksha Restaurant', status: 'Approved', statusColor: 'text-emerald-600', amount: '340 INR', icon: <Utensils size={12} />, category: 'Meal', match: '95%', tag: 'Items grouped automatically' },
  { id: 4, title: 'Food and beverages bill at Chicken Co...', date: 'Feb 07, 2026', vendor: 'Chicken County Restaurant', status: 'Needs note', statusColor: 'text-red-500', amount: '1,837 INR', icon: <ShoppingBag size={12} />, category: 'Popular', match: '84%', tag: 'High spend • Budget bucket' },
  { id: 5, title: 'Take away order of Gobi Manchurian...', date: 'Feb 01, 2026', vendor: 'Pallavi Restaurant', status: 'Approved', statusColor: 'text-emerald-600', amount: '298 INR', icon: <Car size={12} />, category: 'Delivery', match: '91%', tag: 'Take away • Repeat vendor' },
  { id: 6, title: 'Food and beverages purchase', date: 'Jan 30, 2026', vendor: 'Spice Garden', status: 'Queued', statusColor: 'text-blue-500', amount: '1,528 INR', icon: <Utensils size={12} />, category: 'General', match: '86%', tag: 'Synced • Business dining vendor' },
];

export default function Expenses() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <div className="max-w-6xl mx-auto pb-12 relative">
      
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7C3AED] mb-6 transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Back to Dashboard
      </Link>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search everything..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none" />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-500 flex items-center gap-2">ALL CATEGORIES <Filter size={14} /></button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-500 flex items-center gap-2"><Filter size={14} /> FILTERS</button>
          
          <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900 border border-gray-100' : 'text-gray-400'}`}
            >
              <List size={14} /> LIST
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900 border border-gray-100' : 'text-gray-400'}`}
            >
              <Grid size={14} /> GRID
            </button>
          </div>
          
          <button className="px-3 py-2 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-400 flex items-center gap-2"><Grid size={14} /> CSV</button>
          <button className="px-3 py-2 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-400 flex items-center gap-2"><FileText size={14} /> PDF</button>
        </div>
      </div>

      {/* Header Row for List View */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="col-span-5">Expense</div>
          <div className="col-span-2">Owner</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-2">Amount</div>
        </div>
      )}

      {/* Main Content Area */}
      {viewMode === 'list' ? (
        <div className="space-y-4">
          {expensesList.map((expense) => (
            <div key={expense.id} onClick={() => setIsSidebarOpen(true)} className="bg-white border border-gray-200 rounded-2xl p-4 grid grid-cols-12 gap-4 items-center hover:border-[#7C3AED]/40 transition-all cursor-pointer shadow-sm group">
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <ReceiptText size={20} className="text-gray-300" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex items-center gap-1 text-[9px] font-bold text-[#7C3AED] bg-indigo-50 px-1.5 py-0.5 rounded uppercase">
                      {expense.icon} {expense.category}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm truncate group-hover:text-[#7C3AED] transition-colors">{expense.title}</h4>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium mb-1.5">{expense.date} • {expense.vendor} • {expense.category}</p>
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-500 font-semibold bg-gray-50 border border-gray-100 w-fit px-2 py-0.5 rounded">
                    <Sparkles size={10} className="text-indigo-400" /> {expense.tag} • <span className="text-indigo-500">{expense.match} match</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-[#7C3AED] flex items-center justify-center text-[8px] font-bold">O</div>
                <span className="text-xs font-bold text-gray-700">Owner</span>
              </div>
              <div className="col-span-2 text-center">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${expense.statusColor}`}>{expense.status}</span>
              </div>
              <div className="col-span-3 flex items-center justify-between">
                <div>
                  <p className="text-[8px] text-gray-400 font-bold uppercase">Amount</p>
                  <p className="text-sm font-black text-gray-900">{expense.amount}</p>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 hover:text-[#7C3AED] transition-colors">
                  <ArrowUpRight size={14} /> OPEN
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* GRID VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expensesList.map((expense) => (
            <div key={expense.id} onClick={() => setIsSidebarOpen(true)} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#7C3AED]/40 transition-all cursor-pointer group">
              <div className="px-4 py-3 bg-gray-50/50 flex justify-between items-center border-b border-gray-100">
                <span className="text-[10px] font-bold text-[#7C3AED] uppercase flex items-center gap-1">{expense.icon} {expense.category}</span>
                <MoreHorizontal size={14} className="text-gray-400" />
              </div>
              <div className="p-4 bg-gray-100 flex items-center justify-center aspect-video relative overflow-hidden">
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded z-10">{expense.amount}</div>
                <ReceiptText size={32} className="text-gray-200" />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#7C3AED] transition-colors line-clamp-2">{expense.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold mb-4 uppercase">{expense.date} • {expense.vendor}</p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 text-[#7C3AED] flex items-center justify-center text-[8px] font-bold">O</div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{expense.status}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ExpenseDetailsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
