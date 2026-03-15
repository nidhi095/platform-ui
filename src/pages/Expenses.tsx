import { useState } from 'react';
import { Search, Filter, List, Grid, FileText, ArrowUpRight, Coffee, Utensils, Car, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExpenseDetailsSidebar from '../components/shared/ExpenseDetailsSidebar';

const expensesList = [
  { id: 1, title: 'Purchase of food items', date: 'Feb 24, 2026', vendor: 'Kalpavruksha Restaurant', status: 'Reimbursable', statusColor: 'bg-emerald-100 text-emerald-700', amount: '120 INR', icon: <Utensils size={14} />, category: 'Food & Dining', match: '92% match' },
  { id: 2, title: 'Food items purchase', date: 'Feb 21, 2026', vendor: 'Sri Bhagya Grand', status: 'Pending review', statusColor: 'bg-gray-100 text-gray-700', amount: '555 INR', icon: <Coffee size={14} />, category: 'Cafes', match: '88% match' },
  { id: 3, title: 'South Indian meal, sizwan noodles', date: 'Feb 12, 2026', vendor: 'Kalpavruksha Restaurant', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700', amount: '340 INR', icon: <Utensils size={14} />, category: 'Meal', match: '95% match' },
  { id: 4, title: 'Food and beverages bill at Chicken...', date: 'Feb 07, 2026', vendor: 'Chicken County Restaurant', status: 'Needs note', statusColor: 'bg-red-100 text-red-700', amount: '1,837 INR', icon: <ShoppingBag size={14} />, category: 'Popular', match: '84% match' },
  { id: 5, title: 'Take away order of Gobi Manchurian...', date: 'Feb 01, 2026', vendor: 'Pallavi Restaurant', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700', amount: '298 INR', icon: <Car size={14} />, category: 'Delivery', match: '91% match' },
];

export default function Expenses() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto pb-12 relative">
      
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7C3AED] mb-6 transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Back to Dashboard
      </Link>

      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            ALL CATEGORIES <Filter size={14} />
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Filter size={14} /> FILTERS
          </button>
          
          <div className="flex bg-gray-100 p-1 rounded-md ml-2">
            <button className="p-1.5 bg-white shadow-sm rounded text-gray-800"><List size={16} /></button>
            <button className="p-1.5 text-gray-500 hover:text-gray-800"><Grid size={16} /></button>
          </div>
          
          <button className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 ml-2">
            <Grid size={14} /> CSV
          </button>
          <button className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <FileText size={14} /> PDF
          </button>
        </div>
      </div>

      {/* Expenses List */}
      <div className="space-y-3">
        {/* Table Headers */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <div className="col-span-6">Expense</div>
          <div className="col-span-2">Owner</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Amount</div>
        </div>

        {/* Expense Rows */}
        {expensesList.map((expense) => (
          <div 
            key={expense.id} 
            onClick={() => setIsSidebarOpen(true)}
            className="bg-white border border-gray-200 rounded-xl p-4 flex items-center grid grid-cols-12 gap-4 hover:border-[#7C3AED]/50 transition-colors cursor-pointer shadow-sm group"
          >
            
            {/* Left Side: Icon & Details */}
            <div className="col-span-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 border border-gray-200 border-dashed"></div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] bg-indigo-50 px-2 py-0.5 rounded">
                    {expense.icon} {expense.category}
                  </span>
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#7C3AED] transition-colors">{expense.title}</h4>
                </div>
                <p className="text-xs text-gray-500 mb-2">{expense.date} • {expense.vendor} • {expense.status}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <ArrowUpRight size={12} /> Auto parsed • Submitted 2 hours ago • <span className="text-emerald-500 font-medium">{expense.match}</span>
                </div>
              </div>
            </div>

            {/* Owner */}
            <div className="col-span-2 flex items-center">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-[#7C3AED] flex items-center justify-center text-xs font-bold">O</div>
                Owner
              </div>
            </div>

            {/* Status */}
            <div className="col-span-2 flex items-center">
              <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${expense.statusColor}`}>
                {expense.status}
              </span>
            </div>

            {/* Amount */}
            <div className="col-span-2 flex items-center justify-end gap-4">
              <span className="font-bold text-gray-900">{expense.amount}</span>
              <button className="text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors">
                <ArrowUpRight size={14} /> Open
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Slide-out Sidebar */}
      <ExpenseDetailsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}