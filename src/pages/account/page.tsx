export default function AccountPage() {
  return (
    <div>
      <div>
        <h2 className="mb-6 text-base font-semibold text-slate-800">
          Manage your Profile
        </h2>
        <div className="mb-5">
          <label className="text-sm font-normal text-slate-600">
            First Name
          </label>
          <p className="text-slate-800 text-lg">Fahmi</p>
        </div>
        <div className="mb-5">
          <label className="text-sm font-normal text-slate-600">
            Last Name
          </label>
          <p className="text-slate-800 text-lg">Lukis</p>
        </div>
        <div className="mb-5">
          <label className="text-sm font-normal text-slate-600">
            Email Address
          </label>
          <p className="text-slate-800 text-lg">fahmilukis04@gmail.com</p>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        Change Account Details
      </button>
      <br />
      <div className="h-[1px] w-full bg-slate-200 mt-6" />
      <br />
      <div>
        <h2 className="mb-6 text-base font-semibold text-slate-800">
          My Address
        </h2>
        <div className="mb-5">
          <label className="text-sm font-normal text-slate-600">
            Address 1
          </label>
          <p className="text-slate-800 text-lg">
            Jl. Jagakarsa Raya rt09/06 no.13, Jakarta Selatam, DKI Jakarta,
            12620
          </p>
        </div>
        <div className="mb-5">
          <label className="text-sm font-normal text-slate-600">
            Address 2
          </label>
          <p className="text-slate-800 text-lg">
            Jl. Prapanca Raya No. 25 Jakarta, Indonesia, 12160
          </p>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        Change My Address
      </button>
      <br />
      <div className="h-[1px] w-full bg-slate-200 mt-6" />
      <br />
      <button
        type="button"
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-slate-200 bg-red-900 text-white shadow-sm hover:bg-red-950 disabled:opacity-50 disabled:pointer-events-none"
      >
        Request Change Password
      </button>
      <br />
      <br />
    </div>
  );
}
