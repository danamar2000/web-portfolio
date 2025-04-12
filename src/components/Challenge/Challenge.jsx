import React, { useRef, useEffect } from "react";
import "./Challenge.css";

const Challenge = ({ currentDay = 4 }) => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const addBubbleRef = useRef(null);
  const prevDayRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    setCanvasSize();

    class Bubble {
      constructor(text = "") {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = 50 + Math.random() * 50;
        this.speed = 0.5 + Math.random();
        this.drift = Math.random() * 2 - 1;
        this.text = text;
        this.active = true;
        this.nextStartTime = 0;
      }
      update() {
        if (!this.active) {
          if (Date.now() >= this.nextStartTime) {
            this.active = true;
            this.y = canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
          } else {
            return;
          }
        }
        this.y -= this.speed;
        this.x += this.drift + Math.sin(this.y / 20) * 0.5;
        if (this.y + this.radius < 0) {
          this.active = false;
          this.nextStartTime = Date.now() + 3000;
        }
      }
      draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(135, 206, 235, 0.1)";
        ctx.fill();
        ctx.closePath();

        if (this.text) {
          ctx.font = `${Math.floor(this.radius / 4)}px Outfit, sans-serif`;
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(this.text, this.x, this.y);
        }
      }
    }

    // Function to add a new bubble (using the fact text passed in).
    const addBubble = (fact) => {
      const bubble = new Bubble(fact);
      bubblesRef.current.push(bubble);
    };
    // Save the function reference so the effect that watches currentDay can add bubbles.
    addBubbleRef.current = addBubble;

    // Animation loop: update and draw every bubble.
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubblesRef.current.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup the resize listener and animation when unmounting.
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // This effect adds bubbles only when the currentDay prop increases.
  useEffect(() => {
    // Array of facts for your challenge; update as you add new facts.
    const facts = [
      "TCP/IP",
      "HTTP vs. HTTPS",
      "Man-in-the-Middle",
      "CIA Triad",
      "Fact for Day 5",
      "Fact for Day 6",
      "Fact for Day 7",
      "Fact for Day 8",
      "Fact for Day 9",
      "Fact for Day 10",
      "Fact for Day 11",
      "Fact for Day 12",
      "Fact for Day 13",
      "Fact for Day 14",
      "Fact for Day 15",
      "Fact for Day 16",
      "Fact for Day 17",
      "Fact for Day 18",
      "Fact for Day 19",
      "Fact for Day 20",
      "Fact for Day 21",
      "Fact for Day 22",
      "Fact for Day 23",
      "Fact for Day 24",
      "Fact for Day 25",
      "Fact for Day 26",
      "Fact for Day 27",
      "Fact for Day 28",
      "Fact for Day 29",
      "Fact for Day 30",
    ];
    // Add bubbles only for new days.
    while (prevDayRef.current < currentDay) {
      // Bubble index is used as the fact index (0-indexed).
      const bubbleIndex = prevDayRef.current;
      const fact =
        bubbleIndex < facts.length
          ? facts[bubbleIndex]
          : `Fact for Day ${bubbleIndex + 1}`;
      if (addBubbleRef.current) addBubbleRef.current(fact);
      prevDayRef.current += 1;
    }
  }, [currentDay]);

  return (
    <div className="bubble-container">
      <div className="bubble-section">
        <div className="bubble-text">
          <h1>30 Day Challenge</h1>
          <p>
            I've set a challenge for myself on the <u>9th April 2025</u> to
            share 1 Cybersecurity/Networking/Web Development concept on{" "}
            <a href="https://www.linkedin.com/in/dan-amar-8b0806234">
              LinkedIn
            </a>{" "}
            every day. The bubbles you see are the current concepts I have
            already covered. Please visit my LinkedIn profile to learn more and
            see the concept explanation.
          </p>
        </div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Challenge;
