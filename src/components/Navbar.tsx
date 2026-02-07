
export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand Logo */}
                <div className="font-bungee text-xl md:text-2xl leading-none cursor-pointer">
                    <span className="text-[#362419]">JUGAADU</span>
                    <span className="text-[#C98938]">RIDER</span>
                </div>

                {/* CTA Button */}
                <div>
                    <a href="#install" className="font-bungee uppercase bg-[#C98938] text-[#362419] px-4 py-2 text-sm border-2 border-[#362419] neo-brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-150 inline-block no-underline">
                        Get App
                    </a>
                </div>
            </div>
        </nav>
    );
}
