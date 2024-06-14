import { useState, useEffect, useRef } from 'react';

const Game = () => {
    const canvasRef = useRef(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [snake, setSnake] = useState([
        { x: 10, y: 10 },
        { x: 20, y: 10 },
        { x: 30, y: 10 }
    ]);
    const [food, setFood] = useState({ x: 50, y: 50 });
    const [foodLeft, setFoodLeft] = useState(5);

    useEffect(() => {
        if (gameStarted) {
            const interval = setInterval(moveSnake, 100);
            return () => clearInterval(interval);
        }
    }, [gameStarted, snake, direction]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setSnake([
            { x: 10, y: 10 },
            { x: 20, y: 10 },
            { x: 30, y: 10 }
        ]);
        setDirection('RIGHT');
        setFoodLeft(5);
        setFood(generateRandomFood());
    };

    const moveSnake = () => {
        let newSnake = [...snake];
        let head = { ...newSnake[newSnake.length - 1] };

        switch (direction) {
            case 'UP':
                head.y -= 10;
                break;
            case 'DOWN':
                head.y += 10;
                break;
            case 'LEFT':
                head.x -= 10;
                break;
            case 'RIGHT':
                head.x += 10;
                break;
        }

        // Wrap around edges
        if (head.x < 0) head.x = canvasRef.current.width - 10;
        if (head.x >= canvasRef.current.width) head.x = 0;
        if (head.y < 0) head.y = canvasRef.current.height - 10;
        if (head.y >= canvasRef.current.height) head.y = 0;

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
            newSnake.unshift({}); // Add a new segment to the snake
            setFood(generateRandomFood());
            setFoodLeft(foodLeft - 1);
        }

        setSnake(newSnake);
    };

    const resetGame = () => {
        setGameStarted(false);
        setGameOver(true);
        setSnake([
            { x: 10, y: 10 },
            { x: 20, y: 10 },
            { x: 30, y: 10 }
        ]);
        setDirection('RIGHT');
        setFoodLeft(5);
        setFood(generateRandomFood());
    };

    const generateRandomFood = () => {
        const x = Math.floor(Math.random() * (canvasRef.current.width / 10)) * 10;
        const y = Math.floor(Math.random() * (canvasRef.current.height / 10)) * 10;
        return { x, y };
    };

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the snake with gradient
            if (snake.length > 0) {
                for (let i = 0; i < snake.length; i++) {
                    const opacity = 1 - (i / snake.length);
                    context.fillStyle = `rgba(67, 217, 173, ${opacity})`;
                    context.fillRect(snake[i].x, snake[i].y, 10, 10);
                }
            }

            // Draw the food as a circle
            context.fillStyle = '#FF6347';
            context.beginPath();
            context.arc(food.x + 5, food.y + 5, 5, 0, Math.PI * 2);
            context.fill();

            if (gameOver) {
                context.fillStyle = 'white';
                context.font = '20px Arial';
                context.textAlign = 'center';
                context.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
            }
        }
    }, [snake, food, gameOver]);

    return (
        <div className="relative bg-[#011627D6] p-4 rounded-lg mt-8 flex">
            <div className="bg-[#011627] border rounded-lg border-gray-700">
                <canvas
                    ref={canvasRef}
                    width="200"
                    height="350"
                ></canvas>

                <div className="flex justify-center items-center mb-4">
                    {!gameStarted && (
                        <button onClick={startGame} className="bg-orange-500 px-4 py-2 rounded">start-game</button>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="text-sm">
                    <p>// use keyboard</p>
                    <p>// arrows to play</p>
                </div>
                <div className="text-sm">
                    <p>// food left</p>
                    <p>{Array(foodLeft).fill('•').join(' ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Game;
