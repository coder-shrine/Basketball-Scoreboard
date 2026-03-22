# Basketball Scoreboard

Ever needed a simple way to keep track of a basketball game? This is a web app that lets you track scores, manage fouls, and keep time - all in one place. Perfect for pickup games, practice sessions, or just keeping score with friends.

**🚀 Try it live**: [https://basketball-scoreboard-shrine.netlify.app/](https://basketball-scoreboard-shrine.netlify.app/)

## What You Can Do

- **Keep Score**: Add points for both teams with "+1", "+2", or "+3" buttons. The app shows you who's winning with color changes (green if you're ahead, red if you're behind, yellow if it's tied).

- **Track Time**: A full 48-minute game timer that automatically breaks the game into 4 quarters. It'll even pause between quarters so everyone can catch their breath.

- **Count Fouls**: Keep track of team fouls throughout the game so you know when someone's about to foul out.

- **Control the Game**: Start, pause, resume, or reset the game whenever you need to. Simple as that.

- **Nice Look**: Dark theme with a clean, sports-style design that's easy to read from across the court.

## What's in the Folder

```
Basketball-Scoreboard/
├── index.html          # The main page
├── index.js            # All the game logic
├── styles.css          # How it looks
└── assets/             # Images and custom fonts
    ├── CursedTimer.ttf # Cool timer font
    └── basketball.png  # Icon for buttons
```

## How to Get Started

**Option 1: Try it Online (No Setup Needed)**

Just click here: [https://basketball-scoreboard-shrine.netlify.app/](https://basketball-scoreboard-shrine.netlify.app/)

**Option 2: Run it Locally**

1. Clone or download the repo:
```bash
git clone https://github.com/coder-shrine/Basketball-Scoreboard.git
```

2. Open the folder:
```bash
cd Basketball-Scoreboard
```

3. Double-click `index.html` or open it in your browser - that's it!

## How to Use It

1. **Start Playing**: Click "Start Game" and the 48-minute timer begins.

2. **Add Points**: 
   - Each team has buttons to add 1, 2, or 3 points
   - You can only score when the game is running (not paused)

3. **Record Fouls**: Hit "Team Fouls +1" whenever someone fouls. Keep track of how many each team has.

4. **Take a Break**: 
   - Click "Pause Game" to pause anytime
   - The game automatically pauses at the end of each quarter
   - Click "Resume Game" to keep playing

5. **Check the Score**: 
   - Big timer in the middle shows time left
   - Leading team's score is green
   - Losing team's score is red
   - Tied up? Both scores are yellow
   - Period counter shows which quarter you're in

## Game Details

- **Time**: 48 minutes total, split into 4 quarters (12 minutes each)
- **Points**: Add 1, 2, or 3 points per basket
- **Fouls**: Track team fouls throughout the game
- **Color Coding**: 
  - 🟢 Green = Winning
  - 🔴 Red = Losing
  - 🟡 Yellow = Tied

## Built With

- HTML5 for the structure
- CSS3 for styling (flexbox layout, custom fonts)
- Plain JavaScript for all the game logic

## Browsers

Works on pretty much any modern browser (Chrome, Firefox, Safari, Edge, etc.)

## License

MIT License - feel free to use it however you want!

## Created By

[coder-shrine](https://github.com/coder-shrine)
