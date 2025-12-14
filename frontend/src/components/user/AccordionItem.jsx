import { useState } from "react";

export default function AccordionItem({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`
                rounded-xl border transition-all duration-300 overflow-hidden
                ${open ? "border-indigo-300 bg-indigo-50/40" : "border-slate-300 bg-white"}
            `}
        >
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                    {title}
                </h3>

                <span
                    className={`
                        text-indigo-600 text-xl transition-transform duration-300
                        ${open ? "rotate-180" : ""}
                    `}
                >
                    ▾
                </span>
            </button>

            {/* Content */}
            <div
                className={`
                    transition-all duration-500 ease-in-out
                    ${open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="px-6 py-5 text-gray-700 leading-relaxed border-t border-slate-200 bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
}
