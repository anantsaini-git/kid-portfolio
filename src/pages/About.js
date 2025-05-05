import Gallery from "./Gallery";
import academicPerformance from "./AcademicPerformance";

function About() {
    return (
        <div>
            <h1>About Me 🌟</h1>
            <p>Hey there! Welcome to my little corner of the internet. My name is <strong>Aviyaan Saini</strong>,
                and I’m on an exciting journey through school, learning new things every day and making awesome
                memories along the way! 🚀</p>

            <h2>A Few Fun Facts About Me 🎈</h2>
            <ul>
                <li>⭐ <strong>Explorer at Heart:</strong> I love discovering new books, solving cool math puzzles,
                    and building crazy science experiments!
                </li>
                <li>⭐ <strong>Sport Enthusiast:</strong> You'll often find me racing on the field, playing Cricket,
                    or enjoying a good game with friends. 🏀⚽
                </li>
                <li>⭐ <strong>Little Artist:</strong> I enjoy sketching, doodling, and bringing my imagination to life
                    with colors! 🎨🖌️
                </li>
                <li>⭐ <strong>Tech Whiz in the Making:</strong> I dream of building my own video game one day! 🎮💻</li>
                <li>⭐ <strong>Animal Lover:</strong> My biggest wish? To have a pet Puppy! 🐼</li>
            </ul>

            <p>I believe every school day is a new adventure—one step closer to discovering something amazing!
                Ready to explore more about me? Check out my <strong><a href={Gallery}>Gallery</a></strong>, peek at
                my <strong><a href={academicPerformance}>Academic Achievements</a></strong>,
                and don’t forget to say hi! ✨😊</p>
        </div>
    )
}


export default About;
