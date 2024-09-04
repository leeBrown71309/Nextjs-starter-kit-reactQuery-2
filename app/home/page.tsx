"use client";

import { useExStore } from "@/app/home/store/exemple_store";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchData } from "@/app/home/api/home_api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const setUsers = useExStore((state) => state.setdata);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchData(),
    queryKey: ["users"],
  });

  useEffect(() => {
    if (data) {
      console.log("🚀 ~ useEffect ~ data:", data);
      setUsers(data);
    }
  }, [data, setUsers]);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="mb-5">
        <h1 className="text-5xl text-black font-black text-center">
          hello!!! It is my starter kit for Nest js
        </h1>
        <div className="text-center text-lg text-indigo-500">
          Starter kit build with : Next js / React query / Zustand / Ky
        </div>
      </div>
      <Image
        src="/assets/starter-kit.png"
        alt="Starter kit background"
        className="rounded-md"
        width={800}
        height={800}
        priority
      />

      {/* {isLoading && <div>Chargement...</div>}

      {!isLoading && data?.length && (
        <div>
          <h1 className="text-3xl text-indigo-600 text-center">hello</h1>
          {data?.map((user: any) => (
            <div className="text-center" key={user.email}>
              {user.name}
            </div>
          ))}
        </div>
      )}
      {!isLoading && !data?.length && (
        <div className="text-center">Aucun utilisateur</div>
      )} */}

      {/* <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </label>
        <label className="block mb-2">
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </label>
        <br />
        <div className="flex justify-between gap-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer
          </button>
         
        </div>
      </form> */}
    </main>
  );
}
