import * as React from "react";
import { Input } from "@/components/ui/input"; // Adjust the path based on your project structure

interface FormFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  id: string; 
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, className, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-4">
        <label
          htmlFor={id}
          className="font-medium text-muted-foreground"
        >
          {label}
        </label>
        <Input id={id} ref={ref} className={className} {...props} />
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
