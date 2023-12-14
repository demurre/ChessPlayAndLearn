import { Carousel } from "@material-tailwind/react";
import ChessCard from "./ChessCard";

export const CardList = ({ list }) => (
  <Carousel className="rounded-xl max-w-[1100px]">
    {Array.from({ length: Math.ceil(list.length / 3) }, (v, i) =>
      list.slice(i * 3, i * 3 + 3)
    ).map((chunk, key) => (
      <div key={key} className="flex items-center justify-center pb-10 ">
        {chunk.map((data, index) => (
          <ChessCard key={index} {...data} />
        ))}
      </div>
    ))}
  </Carousel>
);
