const layersOrder = [
    { name: '1-background', number: 7 },
    { name: '7-wings', number: 3 },
    { name: '2-eggs', number: 9 },
    { name: '3-assets', number: 2 },
    { name: '4-eyes', number: 8 },
    { name: '5-hats', number: 10 },
    { name: '6-mouth', number: 8 },
];
  
const format = {
    width: 900,
    height: 900,
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };