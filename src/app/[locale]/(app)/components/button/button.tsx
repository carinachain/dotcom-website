import type { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ className, children }) => (
  <button
    className={`group relative overflow-hidden rounded bg-orange-500 px-5 py-2 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:ring-2 hover:ring-orange-400 hover:ring-offset-2 ${className}`}
  >
    <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
    <span className="relative text-base">{children}</span>
  </button>
);

export default Button;
