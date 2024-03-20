import React from "react";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import { useForm, useFieldArray } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });
  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Details">
          <Field label="Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Name is required",
              })}
              className="p-2 border box-border w-[300px] rounded-md border-gray-200"
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required",
              })}
              className="p-2 border box-border w-[300px] rounded-md border-gray-200"
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className="p-2 border box-border w-[300px] rounded-md border-gray-200"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </Field>
        </FieldSet>
        <FieldSet label="Enter Your Socials Details">
          {fields.map((field, index) => {
            return (
              <div
                className="flex justify-between items-center w-max"
                key={field.id}
              >
                <Field label="Social name">
                  <input
                    {...register(`socials[${index}].name`)}
                    className="p-2 border box-border w-full rounded-md mb-2"
                    type="text"
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    placeholder="Enter your socials name"
                  />
                </Field>
                <Field label="Social URL">
                  <input
                    {...register(`socials[${index}].url`)}
                    className="p-2 border box-border w-full rounded-md mb-2"
                    type="text"
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    placeholder="Enter your socials url"
                  />
                </Field>
                <button
                  className="btn btn-danger mt-4"
                  onClick={() => remove({ index })}
                >
                  &#8722;
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-primary"
            onClick={() => append({ name: "", url: "" })}
          >
            Add Social Details
          </button>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="btn btn-info mx-2">Register</button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
