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
