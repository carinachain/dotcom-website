import { ButtonProps } from "./types";


const ButtonArrow: React.FC<ButtonProps> = ({ className, children }) => (
    <button
        className={`relative group inline-flex items-center px-8 py-2 overflow-hidden text-lg font-medium text-orange-600 border-2 border-orange-600 rounded-lg hover:text-white group hover:bg-gray-50 ${className}`}>
        <span
            className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
            className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
        <span className="relative text-base font-semibold transition-all duration-300 group-hover:-translate-x-3">{children}</span>
    </button>
)

export default ButtonArrow;
