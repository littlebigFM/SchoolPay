interface RememberMeProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const RememberMe = ({ checked, onChange }: RememberMeProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      Remember me
    </label>
  );
};

export default RememberMe;
