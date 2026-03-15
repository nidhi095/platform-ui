import { useState } from 'react';
import { Plus, UserPlus, Mail, Settings, TrendingUp, BarChart3, ReceiptText, Banknote, CreditCard } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import AddExpenseModal from '../components/shared/AddExpenseModal';
import EditOrganizationModal from '../components/shared/EditOrganizationModal'; // NEW IMPORT

const chartData = [
  { name: '12', value: 0 }, { name: '13', value: 6500 }, { name: '14', value: 2000 },
  { name: '15', value: 3500 }, { name: '16', value: 1000 }, { name: '17', value: 0 },
  { name: '18', value: 0 }, { name: '21', value: 2500 }, { name: '22', value: 0 },
  { name: '24', value: 1500 }, { name: '26', value: 1000 }, { name: '28', value: 0 },
  { name: '05', value: 1000 }, { name: '08', value: 3000 }, { name: '13', value: 0 },
];

const pieData = [
  { name: 'Food & Dining', value: 61, color: '#7C3AED' },
  { name: 'Transportation', value: 34, color: '#A78BFA' },
  { name: 'Other', value: 5, color: '#E5E7EB' }
];

const topVendors = [
  { id: 1, name: 'GOKUL FUEL POINT', amount: '₹4,990', txns: 1 },
  { id: 2, name: 'Empire Restaurant', amount: '₹2,623', txns: 1 },
  { id: 3, name: 'FATTOUSH MULTI CUISINE RESTAURANT', amount: '₹2,478', txns: 1 },
  { id: 4, name: 'Kantara', amount: '₹1,662', txns: 1 },
  { id: 5, name: 'Fattoush Restaurant', amount: '₹1,393', txns: 1 },
];

export default function Dashboard() {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isEditOrgModalOpen, setIsEditOrgModalOpen] = useState(false); // NEW STATE

  return (
    <div className="max-w-6xl mx-auto pb-12 relative">
      {/* Top Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            DH3 
            {/* THIS ICON NOW OPENS THE EDIT MODAL! */}
            <Settings 
              size={20} 
              className="text-gray-400 cursor-pointer hover:text-[#7C3AED] transition-colors" 
              onClick={() => setIsEditOrgModalOpen(true)}
            />
          </h1>
          <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
            2 members <span className="bg-red-50 text-red-600 text-xs px-2 py-0.5 rounded-full border border-red-100 font-medium">Inactive</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsExpenseModalOpen(true)}
            className="bg-[#10B981] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-emerald-600 transition-colors"
          >
            <Plus size={16} /> Add Expense
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <UserPlus size={16} /> Add Member
          </button>
          <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors">
            <Mail size={16} /> Invite
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8 flex gap-8 text-sm font-medium text-gray-500">
        <Link to="/" className="text-[#7C3AED] border-b-2 border-[#7C3AED] pb-3">Dashboard</Link>
        <Link to="/expenses" className="hover:text-gray-800 pb-3">Expenses</Link>
        <Link to="/members" className="hover:text-gray-800 pb-3">Members</Link>
        <Link to="/invites" className="hover:text-gray-800 pb-3">Invites</Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#7C3AED] text-white p-6 rounded-2xl relative overflow-hidden shadow-sm">
          <p className="text-white/80 text-xs font-semibold mb-1 tracking-wider">TOTAL SPENT</p>
          <h2 className="text-4xl font-bold mb-2">₹15,940</h2>
          <div className="flex items-center gap-2 text-sm mt-4">
            <span className="bg-white/20 px-2 py-1 rounded-md text-xs font-medium">↗ 49.7%</span>
            <span className="text-white/80 text-xs">vs previous month</span>
          </div>
        </div>

        <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl shadow-sm">
          <p className="text-[#7C3AED] text-xs font-semibold mb-1 tracking-wider uppercase">Txns</p>
          <h2 className="text-4xl font-bold text-[#7C3AED] mb-2">12</h2>
          <p className="text-[#7C3AED]/70 text-sm mt-4">this month</p>
        </div>

        <div className="bg-[#10B981] text-white p-6 rounded-2xl shadow-sm">
          <p className="text-white/80 text-xs font-semibold mb-1 tracking-wider uppercase">Avg</p>
          <h2 className="text-4xl font-bold mb-2">₹1,328</h2>
          <p className="text-white/80 text-sm mt-4">per txn</p>
        </div>
      </div>

      {/* Top Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl md:col-span-2 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <TrendingUp size={18} className="text-[#7C3AED]" /> Spending Over Time
            </h3>
            <span className="text-xs text-gray-400 font-bold tracking-wider">DAILY</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} tickFormatter={(value) => value === 0 ? '0' : `₹${value/1000}k`} dx={-10} />
                <Tooltip cursor={{stroke: '#E5E7EB', strokeWidth: 2}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Line type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={3} dot={false} activeDot={{r: 6, fill: '#7C3AED', stroke: '#fff', strokeWidth: 2}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* By Category */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col">
          <h3 className="font-semibold mb-6 flex items-center gap-2 text-gray-800">
            <BarChart3 size={18} className="text-gray-400" /> By Category
          </h3>
          <div className="space-y-6 flex-1 justify-center flex flex-col">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2 text-gray-700">🍴 Food & Dining</span>
                <span className="font-semibold">₹9,775 <span className="text-gray-400 font-normal ml-1">61%</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-[#7C3AED] h-2 rounded-full" style={{width: '61%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2 text-gray-700">🚗 Transportation</span>
                <span className="font-semibold">₹5,490 <span className="text-gray-400 font-normal ml-1">34%</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-[#A78BFA] h-2 rounded-full" style={{width: '34%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2 text-gray-700">⋯ Other</span>
                <span className="font-semibold">₹675 <span className="text-gray-400 font-normal ml-1">4%</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gray-300 h-2 rounded-full" style={{width: '4%'}}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Grid Row: Donut Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Payment Methods */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-6 text-gray-800 flex items-center gap-2"><CreditCard size={18} className="text-[#A78BFA]" /> Payment Methods</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center">
                <Banknote size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Cash</p>
                <p className="text-xs text-gray-400">12 txns</p>
              </div>
            </div>
            <span className="font-bold text-gray-900">₹15,940</span>
          </div>
        </div>

        {/* Categories Donut Chart */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center relative">
          <div className="h-32 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Donut Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-bold text-gray-800">3</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Categories</span>
            </div>
          </div>
          {/* Legend */}
          <div className="flex gap-3 mt-4 text-[10px] text-gray-500 font-medium">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#7C3AED]"></div>Food & Dining</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#A78BFA]"></div>Transportation</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-200"></div>Other</span>
          </div>
        </div>

        {/* Top Subcategories */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-6 text-gray-800 flex items-center gap-2"><BarChart3 size={18} className="text-[#10B981]" /> Top Subcategories</h3>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Delivery</p>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[#7C3AED] h-2 rounded-full" style={{width: '80%'}}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Grid Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Top Vendors */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">🏆 Top Vendors</h3>
          <div className="space-y-4">
            {topVendors.map((vendor) => (
              <div key={vendor.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                    {vendor.id}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#7C3AED] transition-colors">{vendor.name}</p>
                    <p className="text-xs text-gray-400">{vendor.txns} transactions</p>
                  </div>
                </div>
                <span className="font-semibold text-sm">{vendor.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dummy Recent Receipts */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
           <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
             <ReceiptText size={18} className="text-[#A78BFA]" /> Recent Receipts
           </h3>
           <div className="grid grid-cols-4 gap-4 mt-8">
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="aspect-[3/4] bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                   <ReceiptText size={20} className="text-gray-300" />
                </div>
              ))}
           </div>
        </div>

      </div>

      {/* Modals */}
      <AddExpenseModal isOpen={isExpenseModalOpen} onClose={() => setIsExpenseModalOpen(false)} />
      <EditOrganizationModal isOpen={isEditOrgModalOpen} onClose={() => setIsEditOrgModalOpen(false)} />
    </div>
  );
}