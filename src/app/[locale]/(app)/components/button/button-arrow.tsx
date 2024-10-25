import type { ButtonProps } from './types';

const ButtonArrow: React.FC<ButtonProps> = ({ className, children }) => (
  <button
    className={`group relative inline-flex items-center overflow-hidden rounded-lg border-2 border-orange-600 px-8 py-2 text-lg font-medium text-orange-600 hover:bg-gray-50 hover:text-white ${className}`}
  >
    <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-orange-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full" />
    <span className="ease absolute right-0 flex size-10 translate-x-full items-center justify-start duration-300 group-hover:translate-x-0">
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </span>
    <span className="relative text-base font-semibold transition-all duration-300 group-hover:-translate-x-3">
      {children}
    </span>
  </button>
);

export default ButtonArrow;
