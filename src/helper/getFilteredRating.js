function getFilteredRating(selectedRatings, data) {
  if (!selectedRatings.length) return data;
  return data.filter((data) =>
    selectedRatings.some((rating) => Math.floor(data.rating.average) >= rating)
  );
}

export default getFilteredRating;
