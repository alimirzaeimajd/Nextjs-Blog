import classes from "./logo.module.css";

function Logo() {
  return (
    <div className={`${classes.logo} text-slate-900`}>
      <div>Next.js Blog App</div>
    </div>
  );
}

export default Logo;
