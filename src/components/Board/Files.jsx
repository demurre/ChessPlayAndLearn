import { getCharacter } from "../../helper";

const Files = ({ files }) => {
  return (
    <div className="col-[2] flex justify-around w-auto text-zinc-200">
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  );
};

export default Files;
