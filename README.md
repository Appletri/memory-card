# Memory Card
![](https://github.com/Appletri/Appletri/blob/main/assets/memory-card.gif)
## Links
- [Try Memory Card!](https://appletri.github.io/memory-card/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-memory-card)

## About
<hr>
This is a simple game demonstrating hooks, state, and props. The goal of the game is to select an agent that you have not previously selected and grab a high score.

I used the unofficial Valorant API for my theme. After the user selects the first card, the points will be updated and the cards will then be shuffled using the [Fisher-Yates (aka Knuth) Shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle). Every card has an id that will be inserted into an empty array. The array checks to see if the last item added to the array is included in the prior-to-updated array. If this comes back as true, if the score is better than the high score, the high score will update and the points and array will be reset.


