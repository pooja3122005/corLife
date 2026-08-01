import { useState } from "react";
import { X } from "lucide-react";

export default function RequestDemo({ isOpen = false, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleClose = () => {
    onClose?.();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 font-sans backdrop-blur-xs overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative flex w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Info Panel */}
        <div className="relative flex w-full flex-col justify-between bg-[#032B56] p-6 sm:p-8 text-white md:w-5/12">
          <div>
            <h1 className="font-serif text-2xl tracking-wide text-white">Corlife</h1>

            <h2 className="mt-6 sm:mt-8 font-serif text-xl sm:text-2xl font-normal leading-snug text-white md:text-3xl">
              Let's get a patient's vitals on your screen.
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light leading-relaxed text-slate-200">
              Tell us a little about your team. A clinician - not a bot - gets back to you within one business day.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-light text-slate-200">
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">•</span>
                <span>A live demo wearable, streaming to the Corlife dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">•</span>
                <span>Straight answers on integration, compliance and pricing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">•</span>
                <span>No commitment, no sales pressure</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 border-t border-slate-700/60 pt-5 sm:pt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
              PREFER TO REACH US DIRECTLY?
            </p>
            <a
              href="mailto:corlifehealth@gmail.com"
              className="mt-2 block text-xs sm:text-sm text-white hover:underline cursor-pointer truncate"
            >
              corlifehealth@gmail.com
            </a>
            <p className="mt-1 text-xs sm:text-sm font-medium text-white">
              +91 93423 60785
            </p>
            <p className="mt-2 sm:mt-3 text-xs text-slate-400">
              Care Operations &middot; available 24 / 7 / 365
            </p>
          </div>

          {/* Decorative SVG hidden on mobile to save vertical space */}
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-6 overflow-hidden opacity-30 pointer-events-none">
            <svg viewBox="0 0 500 50" className="w-full stroke-teal-400 fill-none stroke-[2]">
              <path d="M0 25 L150 25 L160 10 L170 40 L180 5 L190 35 L200 25 L500 25" />
            </svg>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="relative flex w-full flex-col justify-between bg-white p-6 sm:p-8 pt-10 md:w-7/12">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 sm:right-5 sm:top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. Jane Okafor"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@hospital.org"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Riverside Cardiac Center"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  YOUR ROLE
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                >
                  <option value="" disabled hidden>
                    Select...
                  </option>
                  <option value="clinician">Clinician / Doctor</option>
                  <option value="administrator">Hospital Admin</option>
                  <option value="it_lead">Health IT Lead</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WHAT WOULD YOU LIKE TO SEE?
                </label>
                <span className="font-mono text-xs text-slate-400">(optional)</span>
              </div>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="We're exploring remote monitoring for post-cardiac discharge..."
                className="mt-1 w-full resize-y rounded-lg border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#032B56] py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#021f3f] active:scale-[0.99]"
            >
              Request demo
            </button>
          </form>

          <p className="mt-5 sm:mt-6 text-xs text-slate-400 text-center sm:text-left">
            By submitting, you agree to be contacted about Corlife. We never share your details.
          </p>
        </div>
      </div>
    </div>
  );
}