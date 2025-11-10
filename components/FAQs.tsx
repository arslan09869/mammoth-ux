"use client";
import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { MetalText } from "./MetalText";

export default function FAQSection() {
  const faqs = [
    {
      q: (
        <>
          What is Mammoth U<MetalText size="sm">X</MetalText> {"  "}?
        </>
      ),
      a: "Mammoth UX Forge is a modern UI component library built using Tailwind CSS + ShadCN + Motion.",
    },
    {
      q: "Does it include templates?",
      a: "Yes! It includes production-ready templates for dashboards, landing pages & more.",
    },
    {
      q: "Is dark mode supported?",
      a: "Of course — everything adapts beautifully to dark mode.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 space-y-10">
      {faqs.map((item, i) => (
        <FAQCard key={i} {...item} />
      ))}
    </div>
  );
}

function FAQCard({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="
        relative w-full max-w-3xl mx-auto cursor-pointer
        border border-zinc-500/50 bg-transparent backdrop-blur-sm
        transition-all duration-300
        hover:border-zinc-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
        p-6 group/canvas-card
      "
    >
      {/* Plus Icons - Corner positions + animated rotation */}
      <CornerPlus pos="top-left" open={open} />
      <CornerPlus pos="top-right" open={open} />
      <CornerPlus pos="bottom-left" open={open} />
      <CornerPlus pos="bottom-right" open={open} />

      <div className="flex justify-between items-center select-none">
        <h3 className="text-lg text-zinc-800 dark:text-zinc-200">{q}</h3>

        <ChevronDown
          className={`h-6 w-6 text-zinc-700 dark:text-zinc-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* FAQ Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 text-zinc-600 dark:text-zinc-400 ${
          open ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        {a}
      </div>
    </div>
  );
}

function CornerPlus({ pos, open }: { pos: string; open: boolean }) {
  const base =
    "absolute w-4 h-4 text-zinc-600 dark:text-zinc-300 transition-transform duration-300";
  const positions: Record<string, string> = {
    "top-left": "-top-3 -left-3",
    "top-right": "-top-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
  };

  return (
    <Plus className={`${base} ${positions[pos]} ${open ? "rotate-90" : ""}`} />
  );
}
