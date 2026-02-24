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
          className={`w-35 gap-1.5 rounded px-4 py-2.5 text-base font-medium ${
            value === option
              ? "border border-neutral-200 bg-white text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]"
              : "text-neutral-600"
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
