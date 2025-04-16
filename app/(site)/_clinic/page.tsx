"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react"; // Import Headless UI components

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      full_name: "",
      dob: "",
      age_group: "",
      gender: "",
      parent_name: "",
      relationship: "",
      phone: "",
      email: "",
      skill_level: "",
      football_experience: "",
      participated_before: "",
      participation_details: "",
      medical_conditions: "",
      medical_details: "",
      emergency_contact_one_name: "",
      emergency_contact_one_phone: "",
      emergency_contact_two_name: "",
      emergency_contact_two_phone: "",
    },
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for modal visibility

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "littlestarsfootballltd@gmail.com", // Replace with dynamic value if needed
          subject: "New Soccer Clinic Registration",
          text: `New registration received:\n\n${Object.entries(data)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n")}`,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      // Show success modal
      setIsSuccessModalOpen(true);
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    }
  };

  return (
    <div className="flex justify-center py-20">
      <div className="h-full max-w-5xl px-5 lg:px-20 2xl:px-0">
        <h2 className="mb-6 mt-2 text-center text-2xl font-semibold text-black lg:text-3xl">
          Little Stars Soccer Clinic
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
          confidence, and enjoy the beautiful game.
        </p>

        {/* Consent Form Section */}
        <div className="mt-8 rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-xl font-semibold text-black">
            Consent Form
          </h3>
          <p className="mb-4 text-lg">
            Please download, print, and fill out the consent form below. Once
            completed, submit it to our office at Abdullahi Yaro House,No 3A Ali
            Akilu Road, Kaduna.
          </p>
          <a
            href="/consent-form.pdf" // Replace with the actual path to your PDF
            download="Little_Stars_Soccer_Clinic_Consent_Form.pdf"
            className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-lg font-semibold text-white hover:bg-blue-600"
          >
            Download Consent Form
          </a>
          <p className="mt-4 text-sm text-gray-600">
            If you have any questions, please contact us at 09115099135 or{" "}
            <a
              href="mailto:littlestarsfootballltd@gmail.com"
              className="text-blue-500 hover:underline"
            >
              littlestarsfootballltd@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Registration Form */}
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information */}
          <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-4">
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Full Name</span>
              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter your full name"
                {...register("full_name", { required: true })}
              />
              {errors.full_name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Date of Birth</span>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
                {...register("dob", { required: true })}
              />
              {errors.dob && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Age Group</span>
              <div className="flex flex-col gap-2">
                {["5-7 years", "8-10 years", "11-15 years"].map((age) => (
                  <label key={age} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={age}
                      {...register("age_group", { required: true })}
                      className="accent-blue-500"
                    />
                    {age}
                  </label>
                ))}
              </div>
              {errors.age_group && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
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
              {errors.gender && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Parent/Guardian Name</span>
              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter parent/guardian name"
                {...register("parent_name", { required: true })}
              />
              {errors.parent_name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">Relationship to Player</span>
              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter relationship"
                {...register("relationship", { required: true })}
              />
              {errors.relationship && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">
                Phone Number (Parent/Guardian)
              </span>
              <input
                type="tel"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter phone number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <label className="block text-base font-semibold text-black">
              <span className="mb-2 inline-block">
                Email Address (Parent/Guardian)
              </span>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter email address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
          </div>

          {/* Player Information */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-black">
              Player Information
            </h3>
            <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-4">
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">Current Skill Level</span>
                <div className="flex flex-col gap-2">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={level}
                        {...register("skill_level", { required: true })}
                        className="accent-blue-500"
                      />
                      {level}
                    </label>
                  ))}
                </div>
                {errors.skill_level && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">Football Experience</span>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Describe briefly"
                  {...register("football_experience", { required: true })}
                />
                {errors.football_experience && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">
                  Has the player participated in any soccer programs or teams
                  before?
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="yes"
                      {...register("participated_before", { required: true })}
                      className="accent-blue-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="no"
                      {...register("participated_before", { required: true })}
                      className="accent-blue-500"
                    />
                    No
                  </label>
                </div>
                {errors.participated_before && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">
                  If yes, please provide details
                </span>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Provide details"
                  {...register("participation_details")}
                />
              </label>
            </div>
          </div>

          {/* Medical Information */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-black">
              Medical Information
            </h3>
            <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-4">
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">
                  Does the player have any allergies, medical conditions, or
                  injuries we should be aware of?
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="yes"
                      {...register("medical_conditions", { required: true })}
                      className="accent-blue-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="no"
                      {...register("medical_conditions", { required: true })}
                      className="accent-blue-500"
                    />
                    No
                  </label>
                </div>
                {errors.medical_conditions && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">
                  If yes, please provide details
                </span>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Provide details"
                  {...register("medical_details")}
                />
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">Emergency Contact One</span>
                <input
                  className="w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Contact Name"
                  {...register("emergency_contact_one_name", {
                    required: true,
                  })}
                />
                {errors.emergency_contact_one_name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Contact Phone Number"
                  {...register("emergency_contact_one_phone", {
                    required: true,
                  })}
                />
                {errors.emergency_contact_one_phone && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="block text-base font-semibold text-black">
                <span className="mb-2 inline-block">Emergency Contact Two</span>
                <input
                  className="w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Contact Name"
                  {...register("emergency_contact_two_name")}
                />
                {errors.emergency_contact_two_name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Contact Phone Number"
                  {...register("emergency_contact_two_phone")}
                />
                {errors.emergency_contact_two_phone && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onSubmit={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600 disabled:bg-blue-100"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Success Modal */}
        <Transition appear show={isSuccessModalOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsSuccessModalOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog
                  onClose={() => setIsSuccessModalOpen(false)}
                  className="fixed inset-0 bg-black bg-opacity-30"
                />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Success!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your registration has been successfully submitted. Thank
                      you!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsSuccessModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Page;
