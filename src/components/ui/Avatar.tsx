import clsx from "clsx";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
}

const Avatar = ({ initials, size = "md" }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700",

        {
          "h-8 w-8 text-xs": size === "sm",
          "h-10 w-10 text-sm": size === "md",
          "h-12 w-12 text-base": size === "lg",
        },
      )}
    >
      {initials}
    </div>
  );
};

export default Avatar;
