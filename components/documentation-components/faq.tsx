"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    question: "Why copy/paste instead of an npm package?",
    answer:
      "Npm packages force you into their specific API, theming engines, and versioning constraints. By copying the code directly, you have complete ownership. You can modify accessibility, adapt styles to your brand, and remove unused logic without fighting abstractions.",
  },
  {
    question: "Is this free for commercial projects?",
    answer:
      "Yes. Alorik UI is fully open-source under the MIT License. You can use it for personal projects, client work, and commercial products without fees or attribution.",
  },
  {
    question: "What if I don't use TypeScript?",
    answer:
      "The components are written in TypeScript for safety, but they work as standard React components. You can paste them into `.jsx` files and remove the type annotations.",
  },
  {
    question: "How do I handle updates if I copy the code?",
    answer:
      "Updates are manual by design. Treat Alorik UI as a reference. When a component improves, compare changes and adopt only what fits your codebase.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              FAQ Section                                   */
/* -------------------------------------------------------------------------- */

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-slate-100 pt-14 mt-20 max-w-3xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-slate-50 text-slate-600">
          <HelpCircle size={22} />
        </div>
        <h2
          id="faq-heading"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                FAQ Item                                    */
/* -------------------------------------------------------------------------- */

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen
          ? "rgba(241, 245, 249, 0.6)"
          : "rgba(255, 255, 255, 0)",
      }}
      className={`rounded-xl border transition-all ${
        isOpen
          ? "border-slate-100 shadow-sm"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl"
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 300, damping: 30 }
          }
          className="ml-4 text-slate-400"
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }
            }
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
