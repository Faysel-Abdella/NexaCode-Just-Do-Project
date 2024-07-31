const CustomSelectOptions = ({
  label,
  options,
  outerStyles,
  setSelectedOption,
}: {
  label?: string;
  options: string[];
  outerStyles?: string;
  setSelectedOption?: (option: string) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setSelectedOption) {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <select
      className={` py-1 px-1 bg-white text-black border border-gray-900 ${outerStyles}`}
      defaultValue={label}
      onChange={handleChange}
    >
      <option disabled>{label}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default CustomSelectOptions;
