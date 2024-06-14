import { useState, useEffect, useRef } from 'react';

const Game = () => {
    const canvasRef = useRef(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [direction, setDirection] = useState('RIGHT');
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

        newSnake.push(head);
        newSnake.shift();

        if (head.x === food.x && head.y === food.y) {
            newSnake.unshift({}); // Add a new segment to the snake
            setFood(generateRandomFood());
            setFoodLeft(foodLeft - 1);
        }

        setSnake(newSnake);
    };

    const generateRandomFood = () => {
        const x = Math.floor(Math.random() * 50) * 10;
        const y = Math.floor(Math.random() * 50) * 10;
        return { x, y };
    };

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = 'lime';
            snake.forEach(segment => {
                context.fillRect(segment.x, segment.y, 10, 10);
            });

            context.fillStyle = 'red';
            context.fillRect(food.x, food.y, 10, 10);
        }
    }, [snake, food]);

    return (
        <div className="relative  bg-gray-800 p-4 rounded-lg mt-8 flex">
          
            <div className="bg-[#011627] border rounded-lg border-gray-700 "> 
                <canvas
                    ref={canvasRef}
                    width="200"
                    height="350"
                >

                </canvas>

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
