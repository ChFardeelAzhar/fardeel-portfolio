"use client";

import React from "react";
import { Category } from "@/lib/data";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = counts[cat.id] ?? 0;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`bubble-hover px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all border ${
              isSelected
                ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                : "bg-white text-slate-600 border-slate-200/90 hover:text-slate-950 hover:border-slate-300"
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? "bg-slate-800 text-slate-300"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
