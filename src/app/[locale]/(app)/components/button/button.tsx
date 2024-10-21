import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ className, children }) => (
    <button
        className={`relative rounded px-5 py-2 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 ${className}`}>
        <span
            className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative text-base">{children}</span>
    </button>
)

export default Button;
