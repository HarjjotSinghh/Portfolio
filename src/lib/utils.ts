import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const FADE_IN_ANIMATION_DURATION = 1500;
export const FADE_IN_ANIMATION_DELAY = 1000;
