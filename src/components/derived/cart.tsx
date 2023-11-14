import { Popover } from "@headlessui/react";

export default function CartHeader() {
  return (
    <Popover className="relative">
      <Popover.Button className="px-2 py-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-50 disabled:pointer-events-none">
        Cart (0)
      </Popover.Button>
      <Popover.Panel className="absolute z-10 right-0 mt-3 w-screen sm:w-64 transform overflow-hidden pl-6">
        <div className="grid p-6 gap-6 text-base font-semibold bg-white border shadow-lg rounded-lg text-slate-700">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
          <button
            type="button"
            className="py-3 px-4 text-center text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            Cart Detail
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
