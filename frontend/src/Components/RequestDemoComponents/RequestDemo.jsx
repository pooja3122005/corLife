// import { useState } from "react";
// import { X } from "lucide-react";

// export default function RequestDemo({ isOpen = false, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organization: "",
//     role: "",
//     notes: "",
//   });

//   if (!isOpen) return null;

//   const handleClose = () => {
//     onClose?.();
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     handleClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 font-sans backdrop-blur-xs overflow-y-auto"
//       onClick={handleClose}
//     >
//       <div
//         className="relative flex w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl flex-col md:flex-row my-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Left Info Panel */}
//         <div className="relative flex w-full flex-col justify-between bg-[#032B56] p-6 sm:p-8 text-white md:w-5/12">
//           <div>
//             <h1 className="font-serif text-2xl tracking-wide text-white">Corlife</h1>

//             <h2 className="mt-6 sm:mt-8 font-serif text-xl sm:text-2xl font-normal leading-snug text-white md:text-3xl">
//               Let's get a patient's vitals on your screen.
//             </h2>

//             <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light leading-relaxed text-slate-200">
//               Tell us a little about your team. A clinician - not a bot - gets back to you within one business day.
//             </p>

//             <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-light text-slate-200">
//               <li className="flex items-start">
//                 <span className="mr-3 text-amber-500">•</span>
//                 <span>A live demo wearable, streaming to the Corlife dashboard</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-3 text-amber-500">•</span>
//                 <span>Straight answers on integration, compliance and pricing</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-3 text-amber-500">•</span>
//                 <span>No commitment, no sales pressure</span>
//               </li>
//             </ul>
//           </div>

//           <div className="mt-6 sm:mt-8 border-t border-slate-700/60 pt-5 sm:pt-6">
//             <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
//               PREFER TO REACH US DIRECTLY?
//             </p>
//             <a
//               href="mailto:corlifehealth@gmail.com"
//               className="mt-2 block text-xs sm:text-sm text-white hover:underline cursor-pointer truncate"
//             >
//               corlifehealth@gmail.com
//             </a>
//             <p className="mt-1 text-xs sm:text-sm font-medium text-white">
//               +91 93423 60785
//             </p>
//             <p className="mt-2 sm:mt-3 text-xs text-slate-400">
//               Care Operations &middot; available 24 / 7 / 365
//             </p>
//           </div>

//           {/* Decorative SVG hidden on mobile to save vertical space */}
//           <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-6 overflow-hidden opacity-30 pointer-events-none">
//             <svg viewBox="0 0 500 50" className="w-full stroke-teal-400 fill-none stroke-[2]">
//               <path d="M0 25 L150 25 L160 10 L170 40 L180 5 L190 35 L200 25 L500 25" />
//             </svg>
//           </div>
//         </div>

//         {/* Right Form Panel */}
//         <div className="relative flex w-full flex-col justify-between bg-white p-6 sm:p-8 pt-10 md:w-7/12">
//           <button
//             type="button"
//             onClick={handleClose}
//             className="absolute right-4 top-4 sm:right-5 sm:top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95"
//             aria-label="Close modal"
//           >
//             <X size={18} />
//           </button>

//           <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-2">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
//                   NAME
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Dr. Jane Okafor"
//                   className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
//                   WORK EMAIL
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="jane@hospital.org"
//                   className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
//                   ORGANIZATION
//                 </label>
//                 <input
//                   type="text"
//                   name="organization"
//                   value={formData.organization}
//                   onChange={handleChange}
//                   placeholder="Riverside Cardiac Center"
//                   className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
//                   YOUR ROLE
//                 </label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
//                 >
//                   <option value="" disabled hidden>
//                     Select...
//                   </option>
//                   <option value="clinician">Clinician / Doctor</option>
//                   <option value="administrator">Hospital Admin</option>
//                   <option value="it_lead">Health IT Lead</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center space-x-1">
//                 <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
//                   WHAT WOULD YOU LIKE TO SEE?
//                 </label>
//                 <span className="font-mono text-xs text-slate-400">(optional)</span>
//               </div>
//               <textarea
//                 name="notes"
//                 rows={3}
//                 value={formData.notes}
//                 onChange={handleChange}
//                 placeholder="We're exploring remote monitoring for post-cardiac discharge..."
//                 className="mt-1 w-full resize-y rounded-lg border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-2 w-full rounded-full bg-[#032B56] py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#021f3f] active:scale-[0.99]"
//             >
//               Request demo
//             </button>
//           </form>

//           <p className="mt-5 sm:mt-6 text-xs text-slate-400 text-center sm:text-left">
//             By submitting, you agree to be contacted about Corlife. We never share your details.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function RequestDemo({ isOpen = false, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  if (!isOpen) return null;

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleClose = () => {
    if (loading) return; // Prevent closing while API call is in progress
    setErrors({});
    onClose?.();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for field when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.role) newErrors.role = "Please select your role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        organization: "",
        role: "",
        notes: "",
      });

      showToast(
        "success",
        "Thank you! Our team will contact you within one business day."
      );

      // Close modal after delay so user reads the message
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (err) {
      showToast("error", err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 font-sans backdrop-blur-xs overflow-y-auto"
      onClick={handleClose}
    >
      {/* Toast Notification Container */}
      {toast.show && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 rounded-xl p-4 text-sm font-medium shadow-2xl transition-all duration-300 ${
            toast.type === "success"
              ? "bg-slate-900 text-white border border-teal-500/30"
              : "bg-red-900 text-white border border-red-500/30"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="text-teal-400 h-5 w-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="text-red-400 h-5 w-5 flex-shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div
        className="relative flex w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Info Panel */}
        <div className="relative flex w-full flex-col justify-between bg-[#032B56] p-6 sm:p-8 text-white md:w-5/12">
          <div>
            <h1 className="font-serif text-2xl tracking-wide text-white">
              Corlife
            </h1>

            <h2 className="mt-6 sm:mt-8 font-serif text-xl sm:text-2xl font-normal leading-snug text-white md:text-3xl">
              Let's get a patient's vitals on your screen.
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light leading-relaxed text-slate-200">
              Tell us a little about your team. A clinician - not a bot - gets
              back to you within one business day.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-light text-slate-200">
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">•</span>
                <span>
                  A live demo wearable, streaming to the Corlife dashboard
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">•</span>
                <span>
                  Straight answers on integration, compliance and pricing
                </span>
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
            <svg
              viewBox="0 0 500 50"
              className="w-full stroke-teal-400 fill-none stroke-[2]"
            >
              <path d="M0 25 L150 25 L160 10 L170 40 L180 5 L190 35 L200 25 L500 25" />
            </svg>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="relative flex w-full flex-col justify-between bg-white p-6 sm:p-8 pt-10 md:w-7/12">
          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="absolute right-4 top-4 sm:right-5 sm:top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95 disabled:opacity-50"
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
                  disabled={loading}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. Jane Okafor"
                  className={`mt-1 w-full rounded-lg border bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                    errors.name
                      ? "border-red-400 focus:ring-red-400/20"
                      : "border-slate-200 focus:border-teal-500 focus:ring-teal-500/20"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@hospital.org"
                  className={`mt-1 w-full rounded-lg border bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400/20"
                      : "border-slate-200 focus:border-teal-500 focus:ring-teal-500/20"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                )}
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
                  disabled={loading}
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Riverside Cardiac Center"
                  className={`mt-1 w-full rounded-lg border bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                    errors.organization
                      ? "border-red-400 focus:ring-red-400/20"
                      : "border-slate-200 focus:border-teal-500 focus:ring-teal-500/20"
                  }`}
                />
                {errors.organization && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.organization}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  YOUR ROLE
                </label>
                <select
                  name="role"
                  disabled={loading}
                  value={formData.role}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                    errors.role
                      ? "border-red-400 focus:ring-red-400/20"
                      : "border-slate-200 focus:border-teal-500 focus:ring-teal-500/20"
                  }`}
                >
                  <option value="" disabled hidden>
                    Select...
                  </option>
                  <option value="clinician">Clinician / Doctor</option>
                  <option value="administrator">Hospital Admin</option>
                  <option value="it_lead">Health IT Lead</option>
                  <option value="other">Other</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.role}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WHAT WOULD YOU LIKE TO SEE?
                </label>
                <span className="font-mono text-xs text-slate-400">
                  (optional)
                </span>
              </div>
              <textarea
                name="notes"
                rows={3}
                disabled={loading}
                value={formData.notes}
                onChange={handleChange}
                placeholder="We're exploring remote monitoring for post-cardiac discharge..."
                className="mt-1 w-full resize-y rounded-lg border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#032B56] py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#021f3f] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Request demo"
              )}
            </button>
          </form>

          <p className="mt-5 sm:mt-6 text-xs text-slate-400 text-center sm:text-left">
            By submitting, you agree to be contacted about Corlife. We never
            share your details.
          </p>
        </div>
      </div>
    </div>
  );
}