const Ranks = ({ ranks }) => {
  return (
    <div className="flex flex-col items-center justify-around text-zinc-200">
      {ranks.map((rank) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;
