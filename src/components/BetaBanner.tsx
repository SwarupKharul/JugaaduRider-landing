import { useState } from 'react';

export function BetaBanner() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-[#362419] border-b-2 border-[#C98938]">
            <div className="flex items-center justify-center px-8 py-2">
                <p className="text-[#FDF8E1] text-xs md:text-sm font-medium text-center">
                    <span className="font-bungee text-[10px] md:text-xs text-[#C98938]">BETA</span> — Launching for limited riders only.{' '}
                    <a
                        href="https://app.jugaadurider.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bungee text-[10px] md:text-xs text-[#C98938] underline hover:text-[#FDF8E1] transition-colors duration-200"
                    >

                    </a>
                </p>

                {/* Close button */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute right-2 md:right-4 text-[#FDF8E1] hover:text-[#C98938] transition-colors duration-200 p-1"
                    aria-label="Close banner"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
