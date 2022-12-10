const fetchCard = async ({ queryKey }) => {
  // we use index 1, because that is where we specifiied the ID, the index 0 is "card"
  const id = queryKey[1];

  const res = await fetch(`https://api.magicthegathering.io/v1/cards?id=${id}`);

  if (!res.ok) {
    throw new Error(`card/${id} fetch error`);
  }

  return res.json();
};

export default fetchCard;
