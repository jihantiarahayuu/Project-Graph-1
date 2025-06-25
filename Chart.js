const degrees = {};
edges.flat().forEach(name => degrees[name] = (degrees[name] || 0) + 1);

new Chart(document.getElementById('chartnetwork').getContext('2d'), {
  type: 'bar',
  data: {
    labels: Object.keys(degrees),
    datasets: [{
      label: 'Jumlah Kolaborator (Degree)',
      data: Object.values(degrees),
      backgroundColor: 'rgba(31, 120, 180, 0.6)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
