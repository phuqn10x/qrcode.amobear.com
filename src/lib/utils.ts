import { usePathname } from "@/navigation";
import { type ClassValue, clsx } from "clsx";
import { Oooh_Baby, Poppins, Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";



export const raleway = Raleway({ weight: "400", subsets: ["latin"] });
export const raleway700 = Raleway({ weight: "700", subsets: ["latin"] });
export const poppins = Poppins({ weight: "700", subsets: ["latin"] });
export const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
export const oohBaby = Oooh_Baby({ weight: "400", subsets: ["latin"] });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useCurrentQrcodeType() {
  const pathname = usePathname();
  const type = pathname.split("/")[2]  === "" ?  "a1" : pathname.split("/")[2] ;

  
  return type;
}

export function scrollToElement(id : string) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 50;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
interface NestedDict {
  [key: string]: NestedDict | any;
}

export function flattenObject(
  obj: NestedDict,
  parentKey: string = "",
  result: Record<string, number> = {},
): Record<string, number> {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key] as NestedDict, newKey, result);
    } else {
      result[newKey] = obj[key] as number;
    }
  }
  return result;
}

let seed = 0;

export function rand(min: number, max: number) {
  seed = (seed * 9301 + 49297) % 233280;
  return min + (seed / 233280.0) * (max - min);
}
