import { Plus, UserPlus, Mail, Settings, MailOpen, ListFilter, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Invites() {
  return (
    <div className="max-w-6xl mx-auto pb-12">

      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7C3AED] mb-6 transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Back to Dashboard
      </Link>

      {/* Top Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            DH3 <Settings size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </h1>
          <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
            2 members <span className="bg-red-50 text-red-600 text-xs px-2 py-0.5 rounded-full border border-red-100 font-medium">Inactive</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#10B981] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-emerald-600 transition-colors">
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
        <Link to="/" className="hover:text-gray-800 pb-3">Dashboard</Link>
        <Link to="/expenses" className="hover:text-gray-800 pb-3">Expenses</Link>
        <Link to="/members" className="hover:text-gray-800 pb-3">Members</Link>
        <Link to="/invites" className="text-[#7C3AED] border-b-2 border-[#7C3AED] pb-3">Invites</Link>
      </div>

      {/* Content Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Workspace Invites</p>
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            3 invitations sent for this workspace 
            <span className="bg-indigo-50 text-[#7C3AED] text-xs px-3 py-1 rounded-full font-medium">3 invites</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <MailOpen size={16} className="text-gray-400" /> Invitation activity
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <ListFilter size={16} className="text-gray-400" /> Sort by recent
          </button>
        </div>
      </div>

      {/* Invites List */}
      <div className="space-y-4">
        {/* Invite 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#7C3AED] flex items-center justify-center shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                codestellartech@gmail.com <span className="bg-indigo-50 text-[#7C3AED] px-2 py-0.5 rounded text-[10px] font-bold">member</span>
              </h3>
              <p className="text-sm text-gray-500">by karthikb@codestellartech.com • Feb 27, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">accepted</span>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-md"><MoreHorizontal size={20} /></button>
          </div>
        </div>

        {/* Invite 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#7C3AED] flex items-center justify-center shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                codestellartech@gmail.com <span className="bg-indigo-50 text-[#7C3AED] px-2 py-0.5 rounded text-[10px] font-bold">member</span>
              </h3>
              <p className="text-sm text-gray-500">by karthikb@codestellartech.com • Feb 27, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold">revoked</span>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-md"><MoreHorizontal size={20} /></button>
          </div>
        </div>

        {/* Invite 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#7C3AED] flex items-center justify-center shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                nallapagan1997@gmail.com <span className="bg-indigo-50 text-[#7C3AED] px-2 py-0.5 rounded text-[10px] font-bold">member</span>
              </h3>
              <p className="text-sm text-gray-500">by karthikb@codestellartech.com • Feb 26, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold">revoked</span>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-md"><MoreHorizontal size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}