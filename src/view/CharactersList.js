import React, { useState } from "react";
import useCharacters from "../hooks/useCharacters";
import Link from "next/link";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  let [color] = useState("#36d7b7");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "350px",
  };

  if (loading)
    return (
      <div>
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  if (error) return <div>Someting Wrong Dude</div>;
  return (
    <>
      <main className="flex flex-col items-center justify-between p-6 sm:p-12 lg:p-12">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 z-0"
          >
            <path
              fill="#5A67D8"
              fillOpacity="1"
              d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,160C672,171,768,213,864,218.7C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="grid sm:grid-cols-2 gap-4 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="col-span-3 text-center">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white">
                Rick and Morty Characters
              </h1>
            </div>
            {data.characters.results.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/details/${item.id}`}
                  className="bg-white gap rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300"
                >
                  <img
                    className="rounded-md  mb-4 w-64 mx-auto"
                    src={item.image}
                    alt={item.name}
                  />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 hover:text-purple-500 transition duration-300 text-center">
                    {item.name}
                  </h2>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-500 text-sm">{item.species}</p>
                    <p className="text-purple-500 text-sm">{item.status}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default CharactersList;
