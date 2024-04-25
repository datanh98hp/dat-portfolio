"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormContact() {
  const [mess, setMess] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendContact = (data: any) => {
    console.log(data);
    alert("Sending...");
  };

  return (
    <form
      onSubmit={handleSubmit((data) => sendContact(data))}
      className="p-4 border rounded-xl mt-2 flex flex-col gap-3 bg-white bg-opacity-20 border-gray-400 dark:text-white"
    >
      <textarea
        className="resize-none min-w-80 p-3 h-[80%] w-full rounded-md bg-transparent border border-[0.08] border-gray-200"
        {...register("message", { required: true })}
        placeholder="Type your message"
      />
      <input
        type="email"
        className="rounded-md bg-transparent h-[50%] w-full p-3 border border-[0.08] bg-transparent border-gray-200"
        {...register("email", { required: true })}
        placeholder="Email"
      />
      <button className="md:mt-5 dark:text-white dark:bg-transparent border border-gray-500 dark:border-[0.01] md:bg-black md:text-white bg-slate-300 hover:shadow-xl hover:shadow-2xl border-[0.02] text-black p-2 rounded-md">
        Send
      </button>
    </form>
  );
}
