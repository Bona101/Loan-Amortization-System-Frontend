import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select"; // Adjust the path based on your project structure

interface FormSelectProps {
    label?: string; // Optional label for the select
    id: string; // ID for accessibility
    options: string[]; // Array of select options
    selectedOption: string; // Currently selected option
    onOptionSelect: (value: string) => void; // Callback when an option is selected
    className?: string; // Optional custom class for the SelectTrigger
    placeholder?: string; // Placeholder text when no option is selected
}

const FormSelect = ({
                        label,
                        id,
                        options,
                        selectedOption,
                        onOptionSelect,
                        className,
                        placeholder = "Select an option",
                    }: FormSelectProps) => {
    return (
        <div className="flex flex-col space-y-2">
            {label && (
                <label htmlFor={id} className="font-medium text-muted-foreground">
                    {label}
                </label>
            )}
            <Select value={selectedOption} onValueChange={onOptionSelect}>
                <SelectTrigger
                    id={id}
                    className={`w-full px-4 py-2 border rounded-md text-gray ${className}`}
                >
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent className="bg-white">
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export { FormSelect };
