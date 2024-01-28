import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Settings = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [picture, setPicture] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("picture", picture);
    formData.append("password", data.password);

    try {
      await axios.put("/api/user", formData);
      alert("Settings updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue={watch("email")}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue={watch("name")}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="picture"
          className="block text-sm font-medium text-gray-700"
        >
          Picture
        </label>
        <input
          id="picture"
          type="file"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleFileInputChange}
        />
        {previewSource && (
          <img
            className="mt-2 w-24 h-24 object-cover rounded-full"
            src={previewSource}
            alt="Profile picture"
          />
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          className="mt-1 block w-full py-2 px-3 border border-gray-30
```erson-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-50 sm:text-sm"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />{" "}
        {errors.password && (
          <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
        )}{" "}
      </div>{" "}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Settings
      </button>{" "}
    </form>
  );
};

export default Settings;
