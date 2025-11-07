"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import clsx from "clsx";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        <PlusIcon
          className={clsx("transition-transform", {
            "rotate-45": isOpen,
          })}
        />
      </div>

      <div className={clsx("mt-3 text-white/80", { hidden: !isOpen })}>
        {answer}
      </div>
    </div>
  );
};

const items = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat laudantium minima eligendi maxime quasi necessitatibus, sint odit sed sapiente, esse architecto tenetur.",
  },
  {
    id: 2,
    question: "How does the pricing work for teams?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat laudantium minima eligendi maxime quasi necessitatibus, sint odit sed sapiente, esse architecto tenetur.",
  },
  {
    id: 3,
    question: "Can I change my plan later?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat laudantium minima eligendi maxime quasi necessitatibus.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat laudantium minima eligendi maxime quasi necessitatibus.",
  },
];

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-linear-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4 max-w-[648px] mx-auto">
          {items.map(({ id, question, answer }) => (
            <AccordionItem key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
