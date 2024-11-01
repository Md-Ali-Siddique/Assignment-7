import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import playersData from "../data/players.json";

const PlayerList = ({ addPlayer }) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    setAvailablePlayers(playersData);
  }, []);

  return (
    <div className="player-list bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen py-10">
      <h2 className="text-6xl font-black mb-14 text-center tracking-wide text-gray-700">
        Available Players
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 px-5 lg:px-24 items-center ">
        {availablePlayers.map((player) => (
          <div
            key={player.playerId}
            className="player-card transition-transform duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-center items-center py-8 px-10 border border-gray-300 rounded-3xl bg-white hover:scale-105 transform"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-72 w-full rounded-lg object-cover mb-6 shadow-lg transform hover:scale-110 border-[#3A6D8C] border-4 transition-transform duration-200"
            />
            <h3 className="text-3xl font-extrabold text-[#3A6D8C]">{player.name}</h3>
            <div className="flex gap-4 items-start my-3 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#3A6D8C" viewBox="0 0 24 24" strokeWidth={1.5} className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <h3 className="text-2xl font-medium text-gray-700">{player.name}</h3>
            </div>
            <div className="flex justify-between w-full m-4 px-5">
              <div className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3A6D8C" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
                <p className="font-semibold text-gray-700">{player.country}</p>
              </div>
              <p className="shadow-sm p-1.5 px-4 border-2 border-[#3A6D8C] font-semibold bg-gray-50 rounded-lg text-[#3A6D8C]">
                {player.role}
              </p>
            </div>
            <hr className="w-full border-t-2 border-[#3A6D8C] mb-4" />
            <div className="flex justify-around w-full text-xl font-semibold">
              <p className="text-gray-700">Rating</p>
              <p>-</p>
              <p className="text-[#3A6D8C]">{player.rating}</p>
            </div>
            <div className="flex justify-between w-full my-1 text-gray-700">
              <p className="text-md font-semibold text-gray-700">Batting Type</p>
              <p className="text-md font-semibold text-[#3A6D8C]">{player.battingType}</p>
            </div>
            <div className="flex justify-between w-full my-1 text-gray-700">
              <p className="text-md font-semibold text-gray-700">Bowling Type</p>
              <p className="text-md font-semibold text-[#3A6D8C]">{player.bowlingType}</p>
            </div>
            <div className="flex justify-between items-center w-full mt-3">
              <p className="font-bold text-lg text-[#3A6D8C]">Price: {player.biddingPrice}</p>
              <button
                className="border border-[#3A6D8C] p-2 font-semibold rounded-lg px-4 text-white bg-gradient-to-r from-[#3A6D8C] to-blue-400 hover:from-blue-400 hover:to-[#3A6D8C] transition duration-200"
                onClick={() => addPlayer(player)}
              >
                Choose Player
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PlayerList.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default PlayerList;
