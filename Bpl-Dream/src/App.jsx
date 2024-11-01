import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PlayerList from "./components/PlayerList";
import SelectedPlayers from "./components/SelectedPlayers";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footr"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const increaseCoins = () => {
    setCoins((prevCoins) => prevCoins + 5000000);
    toast.success("5000000 Credited");
  };

  const addPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players!");
      return;
    }
    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected!");
      return;
    }
    if (coins < player.biddingPrice) {
      toast.error("Not enough coins to select this player!");
      return;
    }
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    setCoins((prevCoins) => prevCoins - player.biddingPrice);
    toast.success(`${player.name} added to your team!`);
  };

  const removePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerId === playerId);
    setSelectedPlayers(selectedPlayers.filter((player) => player.playerId !== playerId));
    setCoins((prevCoins) => prevCoins + playerToRemove.biddingPrice);
    toast.info(`${playerToRemove.name} removed from your team!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar coins={coins} />
      <Banner increaseCoins={increaseCoins} />
      <div className="flex justify-center my-4 space-x-2 mt-10">
        <button
          onClick={() => setShowSelected(false)}
          className={`px-4 py-2 rounded-lg ${!showSelected ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Available
        </button>
        <button
          onClick={() => {
            if (selectedPlayers.length === 0) {
              toast.warn("No players selected");
            } else {
              setShowSelected(true);
            }
          }}
          className={`px-4 py-2 rounded-lg ${showSelected ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Selected ({selectedPlayers.length}/6)
        </button>
      </div>
      <div className="p-4">
        {!showSelected ? (
          <PlayerList addPlayer={addPlayer} />
        ) : (
          <SelectedPlayers players={selectedPlayers} removePlayer={removePlayer} setShowSelected={setShowSelected} />
        )}
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
