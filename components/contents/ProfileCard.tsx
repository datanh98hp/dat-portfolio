"use client";
import Link from "next/link";
import React from "react";
import {
  FaAddressBook,
  FaFaceGrinTears,
  FaGithub,
  FaGoogle,
} from "react-icons/fa6";
import { MovingBorderContainer } from "../items/MovingBorderContainer";
import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";

export default function ProfileCard() {
  return (
    <div
      id=""
      className="h-screen w-full flex md:flex-row flex-col md:justify-evenly items-center dark:bg-black dark:text-white bg-white text-black "
    >
      <MovingBorderContainer borderRadius="1.75rem">
        <Image
          src="/img/avt.png"
          alt=""
          width={350}
          height={350}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="md:w-fit"
        ></Image>
      </MovingBorderContainer>
      <div className="">
        <ul className="md:p-0 px-6 md:text-balance break-all">
          <li className="text-4xl">Do Van Dat</li>
          <li className="text-sm mb-8 mt-1">
            <span className="px-2 border border-[0.02] p-1 rounded-3xl">
              Age: {new Date().getFullYear() - 1998}
            </span>
          </li>
          <li className="text-lg my-6">
            <span className="inline-flex items-center">
              <FaAddressBook />
              <span className="mx-1"></span>
              Address: Quoc Tuan - An Lao - Hai Phong
            </span>
          </li>
          <li className="text-lg my-6">
            <span className="inline-flex items-center">
              <BiPhoneCall />
              <span className="mx-1"></span>
              Phone: 0869-029-018
            </span>
          </li>
          <li className="text-lg my-6">
            <span className="inline-flex items-center">
              <CgMail />
              <span className="mx-1"></span>
              <Link href="">dat198hp@gmail.com - datanh98hp@gmail.com</Link>
            </span>
          </li>
          <li className="text-lg my-6">
            <span className="inline-flex items-center">
              <FaGithub />
              <span className="mx-1"></span>
              <Link href="https://github.com/dat198hp">
                https://github.com/dat198hp
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
