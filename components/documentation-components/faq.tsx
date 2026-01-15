"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Why copy/paste instead of an npm package?",
    answer:
      "Npm packages force you into their specific API, theming engines, and versioning constraints. By copying the code directly, you have complete ownership. You can modify the accessibility, change the styling to match your brand precisely, or strip out unused features without fighting an abstraction layer.",
  },
  {
    question: "Is this free for commercial projects?",
    answer:
      "Yes. Alorik UI is completely open-source (MIT License). You can use these components in personal projects, client work, or commercial SaaS products without any fees or attribution requirements.",
  },
  {
    question: "What if I don't use TypeScript?",
    answer:
      "While the components are written in TypeScript for robustness and developer experience, they are standard React components. You can simply copy the code into a `.jsx` file and remove the type definitions (like `interface` or `: string`).",
  },
  {
    question: "How do I handle updates if I copy the code?",
    answer:
      "Because you own the code, updates are manual. We recommend treating this site as a reference manual. If we release an improved version of a component you use, you can compare the code and decide if you want to integrate the changes into your version.",
  },
];

export function FAQSection() {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-100 pt-12 mt-16 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-gray-50 text-gray-600">
          <HelpCircle size={24} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

// --- Sub-Component for individual items ---

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen
          ? "rgba(241, 245, 249, 0.5)"
          : "rgba(255, 255, 255, 0)",
      }} // Subtle background tint on open
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-gray-100 shadow-sm"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-5 text-left group"
      >
        <span
          className={`font-medium text-lg transition-colors duration-300 ${
            isOpen
              ? "text-gray-900"
              : "text-slate-700 group-hover:text-slate-900"
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`flex-shrink-0 ml-4 transition-colors duration-300 ${
            isOpen
              ? "text-gray-500"
              : "text-slate-400 group-hover:text-slate-600"
          }`}
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            // A custom bezier curve for a snappy yet smooth feeling
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-5 pt-1">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
