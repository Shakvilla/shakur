import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import { iPoint } from "@/interfaces/iPoint";
import ArrowKeys from "./ui/arrow-keys";
import CircularButton from "./ui/circular-button";



const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [direction, setDirection] = useState<"UP" | "DOWN" | "LEFT" | "RIGHT">(
    "RIGHT"
  );
  const [gameOver, setGameOver] = useState(false);
  const [wellDone, setWellDone] = useState(false);
  const [paused, setPaused] = useState(false);

  const [snake, setSnake] = useState<iPoint[]>([
    { x: 10, y: 10 },
    { x: 20, y: 10 },
    { x: 30, y: 10 },
  ]);
  const [food, setFood] = useState<iPoint>({ x: 50, y: 50 });
  const [foodLeft, setFoodLeft] = useState(10);

  const router = useRouter();
  const gameInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameStarted && !paused && !wellDone) {
      gameInterval.current = setInterval(moveSnake, 100);
      return () => {
        if (gameInterval.current) clearInterval(gameInterval.current);
      };
    }
  }, [gameStarted, snake, direction, paused, wellDone]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction]);

  const handleSkip = () => {
    router.push("/about_me");
  };

  const handleDirectionChange = (
    newDirection: "UP" | "DOWN" | "LEFT" | "RIGHT"
  ) => {
    switch (newDirection) {
      case "UP":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "DOWN":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "LEFT":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "RIGHT":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setWellDone(false);
    setPaused(false);

    setSnake([
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
    ]);
    setDirection("RIGHT");
    setFoodLeft(10);
    setFood(generateRandomFood());
  };

  const togglePause = () => {
    setPaused(!paused);
  };

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[newSnake.length - 1] };

    switch (direction) {
      case "UP":
        head.y -= 10;
        break;
      case "DOWN":
        head.y += 10;
        break;
      case "LEFT":
        head.x -= 10;
        break;
      case "RIGHT":
        head.x += 10;
        break;
    }

    // Wrap around edges
    if (canvasRef.current) {
      if (head.x < 0) head.x = canvasRef.current.width - 10;
      if (head.x >= canvasRef.current.width) head.x = 0;
      if (head.y < 0) head.y = canvasRef.current.height - 10;
      if (head.y >= canvasRef.current.height) head.y = 0;
    }

    // Check if snake touches itself
    for (let i = 0; i < newSnake.length; i++) {
      if (newSnake[i].x === head.x && newSnake[i].y === head.y) {
        resetGame();
        return;
      }
    }

    newSnake.push(head);
    newSnake.shift();

    if (head.x === food.x && head.y === food.y) {
      newSnake.unshift({ x: head.x, y: head.y }); // Add a new segment to the snake
      setFood(generateRandomFood());
      setFoodLeft(Math.max(0, foodLeft - 1)); // Ensure foodLeft does not become negative
      if (foodLeft - 1 === 0) {
        setWellDone(true); // Display "Well Done" message
        if (gameInterval.current) clearInterval(gameInterval.current); // Stop the game
      }
    }

    setSnake(newSnake);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(true);
    setSnake([
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
    ]);
    setDirection("RIGHT");
    setFoodLeft(10);
    setFood(generateRandomFood());
  };

  const generateRandomFood = (): iPoint => {
    if (canvasRef.current) {
      const x = Math.floor(Math.random() * (canvasRef.current.width / 10)) * 10;
      const y =
        Math.floor(Math.random() * (canvasRef.current.height / 10)) * 10;
      return { x, y };
    }
    return { x: 0, y: 0 };
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the snake with gradient
        if (snake.length > 0) {
          for (let i = 0; i < snake.length; i++) {
            const opacity = 1 - i / snake.length;
            context.fillStyle = `rgba(67, 217, 173, ${opacity})`;
            context.fillRect(snake[i].x, snake[i].y, 10, 10);
          }
        }

        // Draw the food as a circle
        context.fillStyle = "#FF6347";
        context.beginPath();
        context.arc(food.x + 5, food.y + 5, 5, 0, Math.PI * 2);
        context.fill();

        if (gameOver) {
          context.fillStyle = "white";
          context.font = "20px Arial";
          context.textAlign = "center";
          context.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
        }
        if (wellDone) {
          context.fillStyle = "lime";
          context.font = "20px Arial";
          context.textAlign = "center";
          context.fillText("Well Done!", canvas.width / 2, canvas.height / 2);
          resetGame();
          return;
        }
      }
    }
  }, [snake, food, gameOver, wellDone]);

  return (
    <div className="relative bg-[#011627D6] p-4 rounded-lg mt-8 lg:flex-row h-full flex flex-col gap-4 lg:items-start items-center">
      <div className="bg-[#011627] border w-full rounded-lg border-gray-700 mb-4">
        <canvas ref={canvasRef} width="200" height="350"></canvas>

        <div className="flex justify-center items-center mb-4">
          {!gameStarted && (
            <button
              onClick={startGame}
              className="bg-[#FEA55F] px-4 py-2 rounded font-normal text-[#01080E]"
            >
              start-game
            </button>
          )}
          {gameStarted && !gameOver && (
            <button
              onClick={togglePause}
              className="bg-[#FEA55F] px-4 py-2 rounded font-normal text-[#01080E] ml-4"
            >
              {paused ? "resume-game" : "pause-game"}
            </button>
          )}
        </div>
      </div>

      <div className="relative lg:h-[403px] gap-4 flex-col w-full flex justify-evenly">
        <div className="h-full">
          <ArrowKeys onDirectionChange={handleDirectionChange} />
        </div>

        <div className="flex flex-col justify-start items-center h-full">
          <div className="text-sm">
            <p>// food left</p>
            <div className="grid grid-cols-5 gap-2">
              {Array(foodLeft)
                .fill(null)
                .map((_, index) => (
                  <CircularButton key={index} />
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end bottom-0 right-0 mb-4 mr-4">
          <button
            onClick={handleSkip}
            className="bg-transparent px-4 py-2 rounded border border-white font-normal text-white text-sm"
          >
            skip
          </button>
        </div>
      </div>
    </div>
  );
};
export default Game;
