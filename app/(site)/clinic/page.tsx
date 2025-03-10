"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      full_name: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center py-20">
      <div className=" h-full max-w-5xl  px-5 lg:px-20 2xl:px-0">
        <h2 className="mb-6 mt-2 text-center text-2xl font-semibold text-black lg:text-3xl">
          Little Stars Soccer Clinic{" "}
        </h2>
        <p className="mb-4 text-lg lg:text-2xl">
          Little Stars Soccer Clinic is a dynamic training program for kids aged
          5-15, combining expert coaching, skill development, and
          character-building in a fun, supportive environment. Whether your
          child is new to the game or looking to improve, our clinic nurtures
          young athletes with a passion for soccer.
        </p>
        <p className="text-xl lg:text-2xl">
          Ignite your child's love for soccer at Little Stars Soccer Clinic!
          Designed for ages 5-15, our program blends top-tier coaching with a
          fun and inclusive atmosphere, helping kids sharpen their skills, build
          confidence, and enjoy the beautiful game. Apply now!
        </p>

        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-4">
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Full Name</span>

              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your full name"
                {...register("full_name", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Date of Birth</span>

              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your dob"
                {...register("dob", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Height</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your height"
                {...register("height", { required: true })}
              />
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Gender</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                    className="accent-blue-500"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                    className="accent-pink-500"
                  />
                  Female
                </label>
              </div>
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Weight</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your weight"
                {...register("weight", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Address</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your address"
                {...register("address", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">State</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your state"
                {...register("state", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">City</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your city"
                {...register("city", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Nationality</span>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your nationality"
                {...register("nationality", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Phone</span>

              <input
                type="tel"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your phone"
                {...register("phone", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Email</span>

              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </label>
            <label className=" block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Email</span>

              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </label>
          </div>
          <button className="mt-6 w-full rounded-xl bg-blue-500 py-2 font-semibold text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
