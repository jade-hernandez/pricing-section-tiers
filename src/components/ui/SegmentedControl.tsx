import { cn } from "../../utils/utils";

export interface ISegmentedControlProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SegmentedControl: React.FC<ISegmentedControlProps> = ({ options, value, onChange }) => {
  return (
    <div className='inline-flex gap-8'>
      {options.map(option => (
        <button
          key={option}
          type='button'
          className={cn(
            `w-35 cursor-pointer gap-1.5 rounded px-4 py-2.5 text-base font-medium focus:bg-neutral-50 focus:text-neutral-950 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 ${
              value === option
                ? "border border-neutral-200 bg-white text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)] focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)]"
                : "text-neutral-600"
            }`
          )}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
