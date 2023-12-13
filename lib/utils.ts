import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function timeAgo(timestamp: any) {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - timestamp;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Determine the appropriate time unit
  if (timeDifference < minute) {
    return Math.floor(timeDifference / 1000) + 's ago';
  } else if (timeDifference < hour) {
    return Math.floor(timeDifference / minute) + 'm ago';
  } else if (timeDifference < day) {
    return Math.floor(timeDifference / hour) + 'h ago';
  } else if (timeDifference < week) {
    return Math.floor(timeDifference / day) + 'd ago';
  } else if (timeDifference < month) {
    return Math.floor(timeDifference / week) + 'w ago';
  } else if (timeDifference < year) {
    return Math.floor(timeDifference / month) + 'mo ago';
  } else {
    return Math.floor(timeDifference / year) + 'y ago';
  }
}