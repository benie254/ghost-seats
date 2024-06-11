let preferredSeats = {
  Earthenware: [1, 12, 2, 11, 3],
  Waterfall: [4, 3, 5, 2, 6],
  Fireplace: [7, 6, 8, 5, 9],
  Windowsill: [10, 9, 11, 8, 12],
};

// Find a ghost's clan based on its name
function findClan(name) {
  const ghostClans = [
    { clan: "Earthenware", value: "QUTHCRDMZ" },
    { clan: "Waterfall", value: "WEVOXING" },
    { clan: "Fireplace", value: "JFABKPLY" },
    { clan: "Windowsill", value: "SSSSSSSSS" },
  ];
  const firstLetter = name[0].toUpperCase();

  return ghostClans.find((obj) => obj.value.toUpperCase().includes(firstLetter))
    ?.clan;
}

const clan = findClan(ghostName);
if (!clan) return;

const clanSeats = preferredSeats[clan];
if (!clanSeats || clanSeats.length === 0) return;

// Determine the seat to remove (occupied seat)
const indexToRemove = clanSeats.indexOf(
  clanSeats.find((seat) => allSeats.includes(seat))
);
const removedSeat = clanSeats.splice(indexToRemove, 1)[0]; // Remove the seat from the clan's seat array
allSeats = allSeats.filter((seat) => seat !== removedSeat); // Remove the seat from allSeats
