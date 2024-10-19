export function Badge({ label }: { label: string }) {
  return (
    <p className=" px-4 py-1 rounded-full bg-[#F3F7FB] w-fit">
      <span className="bg-gradient-to-t from-[#6E8CFF] to-[#9966EC] bg-clip-text text-transparent font-bold text-xs font-primary-font uppercase">
        {label}
      </span>
    </p>
  );
}
