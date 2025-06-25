const visNodes = new vis.DataSet([
  { id: 1, label: "Moch. Taufik" },
  { id: 2, label: "Ghufron" },
  { id: 3, label: "Sam Farisa" },
  { id: 4, label: "Andi Riansyah" },
  { id: 5, label: "Imam Ibnu Subroto" },
]);

const nameToId = {
  "Moch. Taufik": 1,
  "Ghufron": 2,
  "Sam Farisa": 3,
  "Andi Riansyah": 4,
  "Imam Ibnu Subroto": 5,
};

const edges = [
  ["Moch. Taufik", "Ghufron"],
  ["Moch. Taufik", "Sam Farisa"],
  ["Ghufron", "Sam Farisa"],
  ["Ghufron", "Andi Riansyah"],
  ["Sam Farisa", "Andi Riansyah"],
  ["Sam Farisa", "Imam Ibnu Subroto"],
  ["Andi Riansyah", "Imam Ibnu Subroto"],
];

const visEdges = edges.map(([a, b]) => ({ from: nameToId[a], to: nameToId[b], color: {color: '#71a46e' } }));
const visData = { nodes: visNodes, edges: new vis.DataSet(visEdges) };

const visOptions = {
  nodes: { shape: 'dot', size: 20 },
  edges: { color: '#999' },
  physics: { stabilization: false }
};

new vis.Network(document.getElementById("mynetwork"), visData, visOptions);
