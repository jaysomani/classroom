// src/components/Classroom2D.js
import React, { useRef, useEffect, useState } from 'react';
import marioImage from '../char.png'; // Path to your Mario image
import classroom1Image from '../class.jpg'; // Path to your classroom images
import classroom2Image from '../class.jpg';
import classroom3Image from '../class.jpg';
import classroom4Image from '../class.jpg';

const Classroom2D = () => {
    const canvasRef = useRef(null);
    const [position, setPosition] = useState({ x: 100, y: 100 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        // Load images
        const mario = new Image();
        mario.src = marioImage;

        const classroomImages = [
            new Image(), new Image(), new Image(), new Image()
        ];
        classroomImages[0].src = classroom1Image;
        classroomImages[1].src = classroom2Image;
        classroomImages[2].src = classroom3Image;
        classroomImages[3].src = classroom4Image;

        // Draw the map
        const drawMap = () => {
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // Draw background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
            gradient.addColorStop(0, '#a1c4fd');
            gradient.addColorStop(1, '#c2e9fb');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            // Define room sizes and positions
            const roomWidth = (canvasWidth - 90) / 2;
            const roomHeight = (canvasHeight - 90) / 2;

            const rooms = [
                { x: 30, y: 30, image: classroomImages[0] },
                { x: 30 + roomWidth + 30, y: 30, image: classroomImages[1] },
                { x: 30, y: 30 + roomHeight + 30, image: classroomImages[2] },
                { x: 30 + roomWidth + 30, y: 30 + roomHeight + 30, image: classroomImages[3] }
            ];

            rooms.forEach(room => {
                ctx.drawImage(room.image, room.x, room.y, roomWidth, roomHeight);
            });

            // Draw user position with Mario image
            const characterWidth = 64; // Increased width
            const characterHeight = 64; // Increased height
            ctx.drawImage(mario, position.x, position.y, characterWidth, characterHeight); // Adjust width and height as needed
        };

        // Load images and draw map when images are ready
        Promise.all([mario.decode(), ...classroomImages.map(img => img.decode())])
            .then(() => drawMap())
            .catch(err => console.error('Image loading error:', err));

        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    setPosition((pos) => ({ ...pos, y: Math.max(pos.y - 10, 0) }));
                    break;
                case 'ArrowDown':
                    setPosition((pos) => ({ ...pos, y: Math.min(pos.y + 10, canvas.height - 64) })); // Adjust for character height
                    break;
                case 'ArrowLeft':
                    setPosition((pos) => ({ ...pos, x: Math.max(pos.x - 10, 0) }));
                    break;
                case 'ArrowRight':
                    setPosition((pos) => ({ ...pos, x: Math.min(pos.x + 10, canvas.width - 64) })); // Adjust for character width
                    break;
                default:
                    break;
            }
            drawMap(); // Redraw the map after position changes
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', updateCanvasSize); // Clean up resize event listener
        };
    }, [position]);

    return (
        <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100vw', height: '100vh' }}>
            <h2 style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, color: '#fff' }}>2D Classroom Map</h2>
            <canvas ref={canvasRef} style={{ border: '1px solid #000' }} />
        </div>
    );
};

export default Classroom2D;
