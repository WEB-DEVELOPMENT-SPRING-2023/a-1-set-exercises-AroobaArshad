// Adding background audio
var audio = document.createElement('audio');
audio.src = 'https://www.dropbox.com/s/yeixsr4o7jasjgk/2023-05-04%2022-28-13.mp3?dl=1';
audio.loop = true;
audio.play();


// Getting the elements
const Choose_Color = document.getElementById("Choose_Color");
const Color_Options = document.getElementById("Color_Options");
const Message = document.getElementById("Message");
const Player_Score = document.getElementById("Player_Score");
const Button = document.getElementById("Button");

// The RGB value that is supposed to be guessed:
let RGB_Value;
// No. of lives of the player
let Lives = 3;
// The score of the player
let Score = 0;

// This function will generate random RGB values for the player
function rgbValueGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `(${r}, ${g}, ${b})`;
}

// This function will generate options for the player
function OptionsGenerator() {
    const Options = [];
    // The number of options displayed can be changed
    while (Options.length < 4) {
        const Color = rgbValueGenerator();
        if (!Options.includes(Color) && Color !== RGB_Value) {
            Options.push(Color);
        }
    }
    Options.push(RGB_Value);
    // Shuffling the options
    Options.sort(() => Math.random() - 0.5);
    return Options;
}

// This function updates the state of the game
function UpdateGame() {
    RGB_Value = rgbValueGenerator();
    const Options = OptionsGenerator();
    Color_Options.innerHTML = "";
    Options.forEach((Color) => {
        const Option = document.createElement("div");
        Option.className = "Option";
        Option.style.backgroundColor = `rgb${Color}`;
        Option.addEventListener("click", OptionClick);
        Color_Options.appendChild(Option);
    });
    Player_Score.textContent = `Lives: ${Lives} || Score: ${Score}`;
    Choose_Color.textContent = `Guess this color: ${RGB_Value}!`;
}

// This function is for handling the clicking options
function OptionClick(event) {
    if (Lives === 0) {
        return; // Due to this, the clicks after the game is over will be ignored
    }
    const Color_Selected = event.target.style.backgroundColor;
    if (Color_Selected === `rgb${RGB_Value}`) {
        Message.textContent = "Correct!";
        Score++;
    } else {
        Message.textContent = "Wrong!";
        Lives--;
        // Game ends when lives become 0
        if (Lives === 0) {
            Message.textContent = "Game Over.";
            Button.disabled = false;
        }
    }
    UpdateGame();
}

// This function will restart the game
function Restart() {
    Lives = 3;
    Score = 0;
    Button.disabled = true;
    UpdateGame();
    Message.textContent = null;
}

// Adding an Event listener for restarting when the button is clicked
Button.addEventListener("click", Restart);

// Calling the function for iniatially setting up the game
UpdateGame();