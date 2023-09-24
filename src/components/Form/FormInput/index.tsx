import React from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-6">
      <label htmlFor={name} className="mb-2.5 block font-medium text-black dark:text-white3">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={twMerge(
            `w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`,
            `${errors[name] && "border-danger focus:border-danger"}`
          )}
          {...register(name)}
        />
        {errors[name] && (
          <>
            <span className="text-danger text-xs pt-1 block">
              {errors[name]?.message as string}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default FormInput;
