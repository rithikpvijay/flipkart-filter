function getFilteredRam(selectedRams, data) {
  if (!selectedRams.length) return data;
  return data.filter((data) => selectedRams.includes(String(data.ram)));
}

export default getFilteredRam;
