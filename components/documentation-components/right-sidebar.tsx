"use client"
export default function RightDocumentSidebar() {
  return (
    <div>
      <div className="hidden xl:block w-64 border-l border-slate-200 p-8 h-screen sticky top-0">
        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
          On This Page
        </h5>
        <ul className="space-y-3 text-sm text-slate-500">
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Introduction
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Installation
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Components
            </a>
          </li>
          <li className="pl-4 border-l border-slate-200">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Beam Button
            </a>
          </li>
          <li className="pl-4 border-l border-slate-200">
            <a href="#" className="hover:text-gray-600 transition-colors">
              System Button
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}