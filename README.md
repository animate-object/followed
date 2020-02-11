# Followed

A game of escaping.

This project is in active development. Regular updates can be played on the github pages site.

https://animate-object.github.io/followed

## Road map

The road map is an unordered list consumed in whatever order I feel like.

### Event engine

Change the state of the game after some number of ticks,
or when the player encounters some entity. E.g., a new enemy appears
after 20 turns.

### Pursuit mode

After certain enemies see the player, turns could be processed on a timer --
if the player does not move, they 'wait'

### Dialog

The player should sometimes make remarks, about items they encounter,
enemies they are running from, or just how hopelessly lost they are.

Some enemies might say things too . . .

### Items

Seems like a no brainer. Not everything in the maze should kill you.

Ideas

- a map -- allows pulling up a minimap of explored areas
- a compass -- directs player toward exit
- temporary wall -- for escaping
- temporary speed boost -- for escaping
- phase boots -- to phase through walls -- for escaping

### More Enemies

This goes without saying. Enemies are primarily differentiated by their
knowledge of the maze and pathing sophistication, which is thematically
coorelated to their senses and intelligence.

Some obvious ideas:

- An enemy that can 'smell' the player within some geodesic distance
- An enemy that can hear the player, and tries to explore unexplored areas in the players direction
- Enemies that wander more intelligently e.g., which search the maze exhaustively until they 'detect' the player
- An enemy that has omniscient or near omnisicient knowledge of the maze and the player's location
- Like any of the above, but can phase through walls, sometimes.

### Difficulty Ratings

Conceptually this means both the ability to rate a scenario's difficulty, and the ability to gednerate scenarios with
an expected difficulty. I'm not sure about the latter, but with regard to the former, here are some factors
that probably play into a scenario's difficulty

- Starting geodesic between the player and the exit(s)
- Size/complexity of maze
- Number of enemies
- Variety of enemies

### 3 Dimensional Mazes

And stairs, to traverse them.

### Mobile optimization

Once the core components are all designed, would like to do some
layout and control optimization
