import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import Input from "./Input";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <Input {...props} className={"pl-10 " + (className ?? "")} />
    </div>
  );
};

export default SearchInput;
