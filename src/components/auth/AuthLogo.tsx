import logo from "@/assets/logo/logo2.png";

const AuthLogo = () => {
  return (
    <div className="flex items-center gap-">
      <img
        src={logo}
        alt="SchoolPay"
        className="h-14 w-14 rounded-xl object-contain"
      />

      <div>
        <p className="text-2xl font-bold text-slate-700">
          School<span className="text-violet-600">Pay</span>
        </p>

        <p className="text-sm text-slate-500">Payment Infrastructure</p>
      </div>
    </div>
  );
};

export default AuthLogo;
