import Avatar from "@/components/ui/Avatar";

import { useAuth } from "@/hooks/useAuth";

const NavbarAvatar = () => {
  const { user } = useAuth();

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <Avatar initials={initials} />

      <div className="hidden sm:block">
        <p className="text-sm font-semibold text-slate-900">{user.name}</p>

        <p className="text-xs text-slate-500">{user.role}</p>
      </div>
    </div>
  );
};

export default NavbarAvatar;
