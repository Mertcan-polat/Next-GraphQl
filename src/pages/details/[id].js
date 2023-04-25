import useCharacter from "@/hooks/useCharacter";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { animate, motion } from "framer-motion";
import Header from "@/view/Header";
const Characters = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useCharacter(id);

  let [color] = useState("#36d7b7");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "350px",
  };

  if (error) return <div>Someting went Wrong</div>;
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

  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 3,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    });

    return <p ref={nodeRef} />;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="rounded mt-10  ms-10 me-20">
          <motion.img
            className="rounded-full fixed top-30 sm:w-36 xl:w-2/12 left-1/2 md:left-auto md:right-20  max-[700px]:hidden content-center items-center justify-items-center"
            src={data?.character.image}
            initial={{ opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="md:w-1/2 lg:w-2/3">
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Character Name - {data.character.name}
          </h2>
          <p>{data.character.gender}</p>
          <div className="my-8 text-xl flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="mb-4 md:mb-0 font-bold tracking-wider text-gray-900 md:text-xl lg:text-2xl dark:text-white">
              Episodes and seasons
            </span>
            <span className="text-gray-700 md:text-lg">
              Total Episodes: {data.character.episode.length}
            </span>
          </div>
          <ul className="list-decimal py-4 space-y-4">
            {data.character.episode.map((item) => (
              <li key={item.id}>
                <div className="flex items-center space-x-4 text-gray-700 md:text-lg">
                  <span className="text-gray-900">{item.name}</span>
                  <span className="text-gray-500">-</span>
                  <span className="text-white">{item.episode}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characters;
