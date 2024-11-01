import PropTypes from 'prop-types';

const SelectedPlayers = ({ players, removePlayer, setShowSelected }) => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-[500px] py-10">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-500 tracking-wide">
        Selected Players ({players.length}/6)
      </h2>
      {players.map((player) => (
        <div key={player.playerId} className="flex border shadow-lg rounded-lg m-6 p-3 w-2/3 justify-between items-center mx-auto bg-white md:flex-row flex-col gap-4 lg:w-[700px]">
          <div className="flex">
            <img src={player.image} alt={player.name} className="w-32 h-24 rounded-lg inline shadow-md" />
            <div className="flex flex-col mx-5">
              <h3 className="text-2xl font-semibold text-gray-900">{player.name}</h3>
              <p className="font-semibold pl-2 m-1 text-gray-700 text-lg">{player.role}</p>
              <p className="font-semibold pl-2 m-1 text-gray-700 text-lg">Price: {player.biddingPrice}</p>
            </div>
          </div>
          <button onClick={() => removePlayer(player.playerId)} className="600 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#dc2626" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fee529" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <button 
          className="px-6 py-3 text-lg font-bold text-white bg-[#3A6D8C] rounded-lg hover:bg-blue-500 transition duration-300"
          onClick={() => setShowSelected(false)}
        >
          Add More Players
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  removePlayer: PropTypes.func.isRequired,
  setShowSelected: PropTypes.func.isRequired,
};

export default SelectedPlayers;
