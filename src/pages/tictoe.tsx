import Game from "@/components/tictoe/game";

const TicToePage = () => {
  return (
    <div className="container max-w-lg mx-auto px-2 border-1 border-gray-100 h-screen">
      <h1 className="font-bold text-4xl text-center mt-[7rem]">TicToe</h1>
      <div className="h-[20rem] flex flex-col justify-center items-center">
        <Game />
      </div>
    </div>
  );
};

export default TicToePage;
