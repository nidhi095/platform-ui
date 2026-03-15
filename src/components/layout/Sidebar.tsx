import { LayoutDashboard, Building2, ArrowLeft, Image as ImageIcon, Wallet, Moon, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#F8F9FB] border-r border-gray-200 flex flex-col justify-between p-4 fixed left-0 top-0">
      <div>
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="bg-indigo-600 p-1.5 rounded-md text-white">
            <Wallet size={20} />
          </div>
          <span className="font-bold text-lg text-gray-800">Expense Manager</span>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Navigation</p>
            <Link to="/" className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <LayoutDashboard size={18} /> Overview
            </Link>
            <Link to="/" className="flex items-center gap-3 px-2 py-2 text-indigo-600 bg-indigo-100 rounded-md font-medium">
              <Building2 size={18} /> Organizations
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Platform</p>
            <button className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md w-full text-left">
              <ArrowLeft size={18} /> Back to Platform
            </button>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Apps</p>
            <button className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md w-full text-left">
              <ImageIcon size={18} /> AI Image Editor
            </button>
            <button className="flex items-center gap-3 px-2 py-2 text-indigo-600 bg-indigo-100 rounded-md font-medium w-full text-left">
              <Wallet size={18} /> Expense Manager
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-500">
        <button className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-md w-full text-left">
          <Moon size={18} /> Dark Mode
        </button>
        <button className="flex items-center gap-3 px-2 py-2 text-red-500 hover:bg-red-50 rounded-md w-full text-left">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}