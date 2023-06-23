import { cn } from "@/lib/utils";

export default function Container(props: any) {
  return (
    <div
      className={cn(
        "container px-6 mx-auto xl:px-5 mb-16",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}