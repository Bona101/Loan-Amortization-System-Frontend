import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust the path based on your project structure

interface FormDropdownProps {
  label?: string;
  id: string;
  options: string[]; // Array of dropdown options
  selectedOption: string; // Current selected option
  onOptionSelect: (value: string) => void; // Callback when an option is selected
  className?: string; // Optional custom class for the DropdownMenuTrigger
  placeholder?: string; // Placeholder text for the trigger when no option is selected
}

const FormDropdown = ({
  label,
  id,
  options,
  selectedOption,
  onOptionSelect,
  className,
  placeholder = "Select an option",
}: FormDropdownProps) => {
  return (
    <div className="flex flex-col space-y-4">
      {label && (
        <label htmlFor={id} className="font-medium text-muted-foreground">
          {label}
        </label>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger
          id={id}
          className={`w-full px-4 py-2 border rounded-md text-left ${className}`}
        >
          {selectedOption || placeholder}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => onOptionSelect(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { FormDropdown };
