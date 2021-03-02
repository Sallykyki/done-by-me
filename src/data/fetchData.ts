const getHabits = () => {
  const json = localStorage.getItem("habits");
  return json ? JSON.parse(json) : [];
};

export { getHabits };
