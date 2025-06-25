const d3Nodes = Object.keys(nameToId).map(name => ({ id: name }));
const d3Links = edges.map(([a, b]) => ({ source: a, target: b }));

const width = document.getElementById("d3network").clientWidth;
const height = 400;
const svg = d3.select("#d3network").attr("width", width).attr("height", height);

const simulation = d3.forceSimulation(d3Nodes)
  .force("link", d3.forceLink(d3Links).id(d => d.id).distance(100))
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g").selectAll("line").data(d3Links).enter().append("line")
  .attr("stroke", "#bbb").attr("stroke-width", 2);
const node = svg.append("g").selectAll("circle").data(d3Nodes).enter().append("circle")
  .attr("r", 10).attr("fill", "#1f78b4").call(drag(simulation));
const label = svg.append("g").selectAll("text").data(d3Nodes).enter().append("text")
  .text(d => d.id).attr("x", 15).attr("y", 5).style("font-size", "13px");

simulation.on("tick", () => {
  link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
  node.attr("cx", d => d.x).attr("cy", d => d.y);
  label.attr("x", d => d.x).attr("y", d => d.y);
});

function drag(simulation) {
  return d3.drag()
    .on("start", (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x; d.fy = d.y;
    })
    .on("drag", (event, d) => {
      d.fx = event.x; d.fy = event.y;
    })
    .on("end", (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    });
}
