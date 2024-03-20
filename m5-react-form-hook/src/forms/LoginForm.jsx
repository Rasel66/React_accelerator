import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);

    const user = { email: "a@example.com", password: "123456789" };
    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
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
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="btn btn-info mx-2">Login</button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
