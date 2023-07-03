import classes from "./logo.module.css";

function Logo() {
  return (
    <div className={`${classes.logo} text-slate-900`}>
      <div className="text-sm lg:text-2xl">Next.js Blog App</div>
    </div>
  );
}

export default Logo;
