import { cn, poppins } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div>
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.subtitle && (
        <p className="mt-2 mb-4 opacity-50">{props.subtitle}</p>
      )}
    </div>
  );
}

interface StyleTitleProps {
  title: string;
  label?: string;
  subtitle?: string;
}

export function StyleTitle(props: StyleTitleProps) {
  return (
    <div className="w-[550px] text-center my-8">
      <h2 className="flex items-center justify-center">
        <span className={cn(poppins.className,"text-2xl")}>{props.title}</span>
        {props.label && (
          <span className="text-lg font-medium leading-none text-foreground/100 ml-1.5 h-7 w-7 border rounded-lg flex items-center justify-center">
            {props.label.toUpperCase()}
          </span>
        )}
      </h2>
      {props.subtitle && (
        <p className="my-4 opacity-70 leading-6">{props.subtitle}</p>
      )}
    </div>
  );
}
