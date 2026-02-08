
import { useState } from 'react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "Why isn't this on the Play Store or App Store?",
        answer: "We are currently in **Public Beta**. Being a PWA (Web App) allows us to push updates instantly based on your feedback without waiting for store approvals. Once the features are perfect, we will launch native apps."
    },
    {
        question: "Is the app free to use?",
        answer: "Yes. During the Public Beta, all features (Route Planning, Expense Splitting, and Ride History) are **100% Free**. We want you to use it and tell us what to improve."
    },
    {
        question: "How is this better than a WhatsApp group?",
        answer: "WhatsApp is for chatting, not logistics. We provide structured tools: a pinned route, a confirmed guest list (with reliability scores), and an automatic expense calculator. No more scrolling through hundreds of messages to find the meeting point."
    },
    {
        question: "How do I get the 'Verified' badge?",
        answer: "Safety is our priority. You can upload your RC (Registration Certificate) or Driving License in your profile. Once vetted, you get the Blue Tick, making you a trusted rider in the community."
    },
    {
        question: "Does it work offline in the Ghats?",
        answer: "Yes. The 'Ride Pass' feature caches the essential route details, stops, and emergency contact numbers on your phone, so you are never stranded without info."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 px-4 bg-[#FDF8E1]" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-bungee uppercase text-4xl sm:text-5xl md:text-6xl text-[#362419] mb-4">
                        FREQUENTLY ASKED.
                    </h2>
                    <div className="w-24 h-1 bg-[#C98938] mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={clsx(
                                    "bg-white border-thick transition-all duration-300 cursor-pointer overflow-hidden relative",
                                    isOpen ? "shadow-none translate-x-[4px] translate-y-[4px]" : "neo-brutal-shadow hover:-translate-y-1"
                                )}
                                onClick={() => toggleFAQ(index)}
                                role="button"
                                aria-expanded={isOpen}
                                tabIndex={0}
                            >
                                <div className="p-6 md:p-8 flex justify-between items-start gap-4 select-none">
                                    <h3 className="font-space-grotesk font-bold text-lg md:text-xl text-[#362419] leading-tight">
                                        {faq.question}
                                    </h3>
                                    <div
                                        className="transition-transform duration-300 flex-shrink-0"
                                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                    >
                                        <Plus className="w-8 h-8 text-[#362419]" strokeWidth={3} />
                                    </div>
                                </div>

                                <div
                                    className="px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? '500px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                        paddingBottom: isOpen ? '2rem' : '0px'
                                    }}
                                >
                                    <p
                                        className="font-space-grotesk text-base md:text-lg text-gray-800 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
