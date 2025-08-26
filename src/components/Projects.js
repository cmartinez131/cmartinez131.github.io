import React, { useState } from "react";
import Project from "./Project";
import ProjectDetailModal from "./ProjectDetailModal";

// Import Real Time Drawing Game Media Assets

// Import Unity AI Navigation Assets
import gridLatticeImg from "../assets/unity-ai/GridLattice.png";
import aStarVid from "../assets/unity-ai/AStarGridNavigation.mp4";
import dynamicNavmeshVid from "../assets/unity-ai/DynamicNavmeshGeneration.mp4";
import pathNetworkRuntimeVid from "../assets/unity-ai/PathNetworkRuntimeGeneration.mp4";

// Import ML Trading Assets
import mlInSampleManual from "../assets/ml-trading/in_sample_manual_trader.png";
import mlInSampleComparison from "../assets/ml-trading/in_sample_manual_vs_qlearner.png";
import mlOutSampleManual from "../assets/ml-trading/out_sample_manual_trader.png";
import mlOutSampleComparison from "../assets/ml-trading/out_sample_manual_vs_qlearner.png";
import mlImpactReturn from "../assets/ml-trading/impact_effect_on_return.png";

// Import Reddit Hackathon Media Assets
import removeSingleLetterGif from '../assets/reddit-hackathon/remove_single_letter.gif';
import wordDropDragGif from '../assets/reddit-hackathon/word_drop_drag.gif';
import longWordsMorePointsGif from '../assets/reddit-hackathon/long_words_more_points.gif';
import liveLeaderboardPng from '../assets/reddit-hackathon/live_leaderboard.png';
import redditDeveloperPlatformPng from '../assets/reddit-hackathon/reddit_developer_platform.png';


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to control showing of archived projects
    const [showArchived, setShowArchived] = useState(false);

    const openModal  = (proj) => { setSelectedProject(proj); setIsModalOpen(true);  };
    const closeModal = ()     => { setIsModalOpen(false);   setSelectedProject(null); };

    // togglefunction for archived projects
    const toggleShowArchived = () => {
        setShowArchived(!showArchived);
    };


    // PROJECT DATA
    const projectData = [

        // Real-Time Multiplayer Drawing Game
        {
            title: "Full Stack Real-Time Multiplayer Drawing Game",
            description: "A full-stack multiplayer drawing and guessing game featuring real-time chat and drawing collaboration via WebSockets protocol.",
            fullDescription: "Developed a full-stack, real-time multiplayer drawing and guessing game.",
            yourContributions: [
                "Engineered real-time, low-latency player interactions including drawing, guessing, chat using Socket.IO integrated with HTML Canvas.",
                "Led bi-weekly code reviews, ensuring code quality and tracking progress against project milestones.",
                "Implemented backend logic with the MERN stack for robust player permissions and game environment management.",
                "Collaborated with two engineers in an agile environment.",
            ],
            technicalChallenges: [
                "Integrating WebSockets with HTML Canvas to achieving synchronized drawing updates across multiple clients.",
                "Managing complex real-time game state like rounds, turns, and scores and ensuring consistency across multiple clients.",
                "Implementing secure and flexible player permission logic within the backend.",
            ],
            keyTechnologies: [
                "React", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JavaScript", "HTML Canvas", "Git", "WebSocket",
            ],
            githubLink: "https://github.com/cmartinez131/sketch",
            liveLink: null,
            // thumbnail in the grid
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BxeDZvNG5uY3F1ZmMzMXRqNjRzY29sMDB5M2lmM3B4cjJrZzR5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DeXUAtuFtVLGc7uNRv/giphy.gif",
            mediaType: "gif",
            // more media for the modal
            detailedMedia: [
                {
                    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BxeDZvNG5uY3F1ZmMzMXRqNjRzY29sMDB5M2lmM3B4cjJrZzR5dyZlcD12MV9pbnRlcm5hb19naWZfYnlfaWQmM3Q9Zw/DeXUAtuFtVLGc7uNRv/giphy.gif",
                    type: "gif",
                    caption: "Real-time Drawing Demo",
                },
                {
                    src: "/assets/sketch/screenshot-gameplay.png",
                    type: "image",
                    caption: "Gameplay Screenshot",
                },
                {
                    src: "/assets/sketch/screenshot-chat.png",
                    type: "image",
                    caption: "Chat Functionality",
                },
            ],
            privateCode: false,
            isArchived: false,
        },

        // Batting Cage Booking Application 
        {
            title: "Booking Web Application Batting Cage Business",
            description: "A modern website designed to streamline customer bookings for a batting cage business.",
            fullDescription: "Developed a modern web application to enhance the online presence and streamline customer bookings.",
            yourContributions: [
                "Built a modern web application using React and Node.js.",
                "Implemented real-time booking and secure user authentication via Firebase.",
                "Embedded Google Maps API for location services.",
                "Designed responsive UIs with Tailwind-style utility classes.",
            ],
            technicalChallenges: [
                "Real-time booking data synchronization across multiple users.",
                "Implementing robust authentication and managing access rights.",
                "Ensuring a seamless booking experience on various devices.",
            ],
            keyTechnologies: [
                "React", "JavaScript", "CSS", "Node.js", "Firebase", "Firebase Firestore", "Firebase Authentication", "React Router", "Tailwind CSS",
            ],
            githubLink: "https://github.com/cmartinez131/batting-cage-business-website",
            liveLink: "https://your-batting-blvd-live-link.com",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFtcjE0bHk2M2I2bGpxMjRzeHZ0ZXQzYjkxcGZ1YjFtMHp6bW0yNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feHmMr62vssviDO976/giphy.gif",
            mediaType: "gif",
            detailedMedia: [],
            privateCode: false,
            isArchived: false,
        },

        // Unity C# Path-Planning AI
        {
            title: "Unity C# Path-Planning AI System",
            description: "Engineered a robust C# AI path-planning system within Unity, enabling intelligent agent navigation in complex environments via dynamically generated grids or navigation meshes and leveraging multiple efficient graph search algorithms like incremental A* and Dijkstra.",
            fullDescription: "Developed a comprehensive AI path-planning framework in C# within the Unity engine, supporting multiple spatial representations and search algorithms. Key components include: (1) A runtime Grid Lattice generation module which discretizes the environment based on cell size and performs obstacle checks using computational geometry. (2) Runtime Path Network generation logic connecting predefined nodes via edges validated against obstacles and boundaries considering agent radius. (3) A Navigation Mesh pipeline involving brute-force triangulation, greedy convex polygon merging, and the creation of a path graph centered on portal midpoints. (4) An incremental A* pathfinding implementation designed for performance in Unity, supporting Dijkstra's and Greedy Best-First variants via callbacks, and handling unreachable goals.",
            yourContributions: [
                "Built modules for dynamic generation of Grid Lattices and Path Networks, using geometric checks to ensure agents could navigate safely around obstacles.",
                "Developed the complete Navigation Mesh generation pipeline, from initial triangulation and convex polygon merging to creating the final path graph based on portals.",
                "Engineered an efficient, incremental A* pathfinding algorithm capable of running smoothly in Unity, supporting Dijkstra/Greedy variants, handling unreachable goals, and using multiple heuristics.",
                "Leveraged computational geometry algorithms to accurately model the environment and enable precise spatial reasoning for reliable path planning.",
                "Implemented comprehensive NUnit tests to rigorously validate the pathfinding and generation logic against diverse edge cases and scenarios."
            ],
            technicalChallenges: [
                "Implementing correct and efficient computational geometry checks for grid cell occupancy, navmesh triangulation validity, and path network line-of-sight clearance considering agent radius.",
                "Designing the incremental A* algorithm to correctly manage states (open/closed sets, node records) across multiple calls and ensure proper path reconstruction.",
                "Developing the NavMesh merging logic to accurately identify shared edges, merge polygons, check for convexity, and update adjacency information efficiently.",
                "Ensuring robust path network edge generation by correctly applying agent radius clearance checks against all obstacle and boundary segments.",
                "Creating comprehensive test scenarios with NUnit tests to cover diverse obstacle configurations, and pathfinding edge cases."
            ],
            keyTechnologies: [
                "C#", "Unity", "Computational Geometry", "NUnit Unit Testing", "Pathfinding Algorithms (A*, Dijkstra, Greedy Best-First)",
            ],
            githubLink: null,
            liveLink: null,
            privateCode: true,
            privateCodeExplanation: "Developed as part of a Georgia Tech course. Source code available upon request.",
            // thumbnail in the grid
            media: gridLatticeImg,
            mediaType: "image",
            detailedMedia: [
                { src: aStarVid, type: "video", caption: "A* Incremental Grid Navigation" },
                { src: dynamicNavmeshVid, type: "video", caption: "Dynamic Nav-Mesh Generation Demo" },
                { src: pathNetworkRuntimeVid, type: "video", caption: "Path-Network Runtime Generation" },
                { src: gridLatticeImg, type: "image", caption: "Grid Lattice Visualization" },
            ],
            isArchived: false,
        },

        // MACHINE-LEARNING TRADING STRATEGY EVALUATION
        {
            title: "Trading Strategy Evaluation – Manual Indicators Rules vs Q-Learning Reinforcement Learning",
            description:"Compared a rules-based trading strategy using technical indicators against a Q-Learning agent on JPM stock. Both strategies outperformed the benchmark in-sample; analyzed out-of-sample performance and market impact effects.",
            fullDescription: "Implemented and compared two trading strategies for the JPM ticker: (1) a manual, rules-based engine using Bollinger Band Percentage (BBP), 5-day Momentum, and 14-day Stochastic Oscillator (STO) signals with specific thresholds; (2) a reinforcement learning agent based on Q-Learning. The Q-Learner utilized a discretized state space (82 states) derived from binned values of the same technical indicators combined with the agent's current holding position (-1000, 0, or +1000 shares). Conducted comprehensive backtesting including in-sample training/evaluation (2008-2009), out-of-sample testing (2010-2011) (Experiment 1), and a sensitivity analysis sweeping five levels of market impact (0% to 2%) (Experiment 2). Generated detailed performance plots and statistical comparisons using Matplotlib for the final report, evaluating cumulative returns and volatility.",
            yourContributions: [
                "Developed two distinct trading strategies: a rule-based manual system using technical indicators, and a Q-Learning agent built from scratch with custom state discretization and reward logic.",
                "Built a market simulator with Python and Pandas for efficient backtesting, capable of modeling transaction costs like commissions and market impact.",
                "Designed and automated a rigorous experimental framework to compare strategy performance in-sample and out-of-sample and evaluate sensitivity to market impact.",
                "Created compelling data visualizations using Matplotlib, clearly illustrating performance curves, benchmark comparisons, and experimental results.",
                "Authored an in-depth analytical report presenting the methodologies, findings, and statistical evaluation (volatility, returns) of the trading strategies."
            ],
            technicalChallenges: [
                "Tackling core Q-Learning challenges: balancing exploration/exploitation, designing an effective state space from discretized indicators, and optimizing feature representation.",
                "Developing a rigorous experimental design to fairly compare strategies under different conditions (in/out-of-sample) and isolate market impact.",
                "Effectively translating complex quantitative results and model behavior into clear visualizations and concise analytical reporting."
            ],
            keyTechnologies: [
                "Python", "Pandas",  "NumPy", "Matplotlib", "Reinforcement Learning", "Q-Learning"
            ],
            githubLink: null,
            liveLink: null,
            privateCode: true,
            privateCodeExplanation: "Developed as part of a Georgia Tech course. Source code available upon request.",
            // thumbnail in grid
            media: mlInSampleComparison,          
            mediaType: "image",
            detailedMedia: [
                { src: mlInSampleManual, type: "image", caption: "In-sample – Manual Strategy vs. Benchmark" },
                { src: mlInSampleComparison, type: "image", caption: "In-sample – Manual vs. Q-Learner vs. Benchmark" },
                { src: mlOutSampleManual, type: "image", caption: "Out-of-sample – Manual Strategy vs. Benchmark" },
                { src: mlOutSampleComparison, type: "image", caption: "Out-of-sample – Manual vs. Q-Learner vs. Benchmark" },
                { src: mlImpactReturn, type: "image", caption: "Market-Impact Sweep – Cumulative Return" }
            ],
            isArchived: false,
        },


        // Word Drop (Reddit Devvit Hackathon)
        {
            title: "Word Drop (Reddit Devvit Hackathon)",
            description: "A fast-paced word game developed for the Reddit Games and Puzzles Hackathon using Reddit's Developer Platform (Devvit). Devvit integrates webview applications directly into Reddit posts.",
            fullDescription: 'Developed "Word Drop," a fast-paced word game for the Reddit Games and Puzzles Hackathon. The game challenges players to form words by connecting adjacent letters on a 5x5 board within a 60-second time limit. Used letters disappear and new ones drop in, creating a dynamic gameplay experience. A strategic element is added by allowing players to remove single letters for a penalty to help form longer words, which are exponentially more valuable.',
            yourContributions: [
                "Created a 5x5 dynamic game board with randomized letters, using weighted distribution for common English letters.",
                "Implemented the word formation mechanic using a dynamic array and a hash set for coordinate tracking within the game board, ensuring adjacency and no reuse of tiles within a word.",
                "Developed word validation logic against a JavaScript set of English words (workaround for external API restriction).",
                "Integrated a functional live leaderboard using Redis to track Reddit users' high scores.",
                "Implemented message passing between the Devvit server-side app and WebViews client-side app for real-time data communication.",
                "Successfully developed core game logic including scoring and dynamic letter dropping.",
            ],
            technicalChallenges: [
                "Choosing between Blocks and WebViews platforms and adapting to WebViews when Blocks did not support necessary JavaScript events (mouseup, mouseenter, mousedown) required for the swiping mechanic.",
                "Finding a workaround for the Reddit Developer Platform's restriction on external API domains by writing a Python script to embed an English dictionary as a JavaScript set.",
                "Identifying and understanding platform constraints early in development, such as Devvit's limited mobile event support for the swiping mechanic, impacting mobile compatibility.",
                "Learning how to use Reddit's Devvit Developer Platform, including inter-app message passing.",
            ],
            keyTechnologies: ["JavaScript", "Redis", "Devvit", "Reddit API", "HTML", "CSS", "Webpack", "Node.js"],
            githubLink: "https://github.com/cmartinez131/word-drop",
            liveLink: "https://www.reddit.com/r/WordDrop/comments/1hgk1iz/word_drop/",
            devpostLink: "https://devpost.com/software/word-drop-a0ljo3",
            privateCode: false,
            privateCodeExplanation: null,
            // thumbnail in grid
            media: wordDropDragGif,
            mediaType: "gif",
            detailedMedia: [
                { src: removeSingleLetterGif, type: "gif", caption: "Click to remove single letter" },
                { src: wordDropDragGif, type: "gif", caption: "Click and drag to form words" },
                { src: longWordsMorePointsGif, type: "gif", caption: "Longer Words = More Points" },
                { src: liveLeaderboardPng, type: "image", caption: "Live Leaderboard against other Redditors" },
                { src: redditDeveloperPlatformPng, type: "image", caption: "Built on Reddit Developer Platform" },
            ],
            isArchived: false,
        },

        // Financial Calculator Web App
        {
            title: "Financial Calculator Web Application",
            description: "A web application to help users with investment growth, loan affordability, and net-worth calculation with data visualisation.",
            fullDescription: "Developed a web application designed to assist users with various personal-finance calculations.",
            yourContributions: [
                "Built the front-end using React, HTML, CSS, and Bootstrap.",
                "Implemented dynamic UIs for different calculation types.",
                "Integrated Chart.js for data-visualisation of investement calculation results.",
                "Implemented a mobile-friendly design that works with small screen sizes.",
            ],
            technicalChallenges: [
                "Implementing complex financial formulas accurately.",
                "Designing a dynamic UI with charts that update results in real-time.",
                "Integrating data visualisation effectively for clarity.",
            ],
            keyTechnologies: [
                "React", "HTML", "CSS", "Bootstrap", "React-Bootstrap", "Firebase", "Firebase Firestore", "Firebase Authentication", "React Router", "Chart.js", "JavaScript",
            ],
            githubLink: "https://github.com/cmartinez131/PersonalFinanceWebApp",
            liveLink: "https://your-financial-calculator-live-link.com",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRoc2F5YW50eTJ0M2YxcWlqbG95cDQyMjI2c2p3OWpjdmVjazJxeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MXXkFfgxr2RH9O9rtA/giphy.gif",
            mediaType: "gif",
            detailedMedia: [],
            privateCode: false,
            isArchived: false,
        },

        // Fitness Coach iOS App
        {
            title: "Fitness Coach – iOS App",
            description: "An iOS app guiding beginners through workout routines and educating on muscle groups.",
            fullDescription: "Developed a native iOS application to assist beginners with their fitness journey.",
            yourContributions: [
                "Built the native iOS application using Swift and UIKit.",
                "Designed and implemented the user interface for browsing workouts and exercises using Figma.",
                "Developed logic for tracking workout progress and displaying educational content.",
            ],
            technicalChallenges: [
                "Designing an intuitive interface following iOS Human Interface Guidlines.",
                "Managing app state with Core Data for tracking user saved workouts.",
                "Organising and presenting educational content effectively.",
            ],
            keyTechnologies: ["Swift", "UIKit"],
            githubLink: "https://github.com/cmartinez131/FitFriend",
            liveLink: null,
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHMxN3AzZ2V3MGpzYjFqcTIxdzJraWNkOWtybTA2em93bmlueDRxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmM3Q9Zw/aut6DU7b0DovZJg7Rt/giphy.gif",
            mediaType: "gif",
            detailedMedia: [],
            privateCode: false,
            isArchived: true,
        },

        // CodePath Mobile App Design Course=
        {
            title: "CodePath.org University – Mobile App Design Course",
            description: "Completed a 12-week intensive program on mobile app design, including building app clones.",
            fullDescription: "Participated in a 12-week iOS Development program through CodePath.",
            yourContributions: [
                "Designed and developed mobile application UIs following industry best practices like iOS table views and list views.",
                "Integrated third-party APIs such as Twitter APIs for data fetching user data and authentication.",
                "Practised rapid prototyping and iterative development cycles.",
                "Built clones of Twitter and instagram using Swift and relevant libraries/frameworks.",
            ],
            technicalChallenges: [
                "Learning and applying native mobile development concepts.",
                "Integrating external APIs such as Parse.",
            ],
            keyTechnologies: ["Swift", "UIKit", "Twitter APIs", "Parse"],
            githubLink: "https://github.com/cmartinez131/FlixMovie",
            liveLink: null,
            media: "https://media.giphy.com/media/9UV1k9WWER16JowJus/giphy.gif",
            mediaType: "gif",
            detailedMedia: [],
            privateCode: false,
            isArchived: true,
        },

        // Personal Portfolio
        {
            title: "Personal Portfolio Website",
            description: "A portfolio website built with React to showcase projects and skills.",
            fullDescription: "Developed and maintain this personal portfolio website using React.",
            yourContributions: [
                "Designed and implemented the front-end user interface using React components.",
                "Set up routing via React Router for different sections.",
                "Applied styling for responsive design techniques afor multiple screen sizes.",
                "Integrated third-party libraries like AOS for animations.",
            ],
            technicalChallenges: [
                "Designing a clear and intuitive layout to showcase diverse projects.",
                "Ensuring consistent styling and responsiveness across devices with different screen sizes.",
            ],
            keyTechnologies: ["React", "React Router", "CSS", "JavaScript", "HTML", "AOS"],
            githubLink: "https://github.com/cmartinez131/cmartinez131.github.io",
            liveLink: "https://chrisamartinez.com",
            media: "/assets/portfolio/portfolio-preview.png",
            mediaType: "image",
            detailedMedia: [],
            privateCode: false,
            isArchived: true,
        },
    ];
    // End of projects data

    // function to filter projects based on showArchived state
    const filteredProjects = projectData.filter(project => {
        if (showArchived) {
            // If showing archived, show all projects
            return true;
            } else {
            // If not showing archived, only show projects where isArchived is false
            return !project.isArchived;
        }
    });


  return (
    <div className="projects-container">
        <h1>Projects</h1>

        {/* Projects Grid */}
        <div className="projects-grid">
            {/* map through the filteredProjects array */}
            {filteredProjects.map((p, idx) => (
                <div
                    key={idx}
                    className="project-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={idx * 100}
                >
                <div className="project-clickable-area" onClick={() => openModal(p)}>
                    <Project
                        title={p.title}
                        description={p.description}
                        technology={p.keyTechnologies || p.technology}
                        media={p.media}
                        mediaType={p.mediaType}
                    />
                </div>
            </div>
            ))}
        </div>
        

        {/* Toggle Button for Archived Projects */}
        <div className="archive-toggle-container">
            <button onClick={toggleShowArchived}>
            {showArchived ? 'Hide Archived Projects' : 'Show Archived Projects'}
            </button>
        </div>


        {isModalOpen && (
            <ProjectDetailModal project={selectedProject} onClose={closeModal} />
        )}
    </div>
  );
};

export default Projects;
