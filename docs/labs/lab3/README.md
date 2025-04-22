# Lab 3 Version A: Farkle
Instructions are available [[here]](https://lcc-cit.github.io/CS233JS-CourseMaterials/Labs/Lab03/Lab3Instructions-diceGame.html)

Live site: [[Link]](https://thejoshuaevans.com/LCC-CS233JS/labs/lab3)

## Rules
Rules taken from: [[Link]](https://www.dice-play.com/Games/TenThousand.htm)

Each player takes it in turn at rolling the dice and must set aside at least one scoring die (1s, 5s, triples, 3 pairs, or a run of 6. See score values below). Their turn continues, rolling the remaining dice, as long as they have thrown and set aside a scoring number or combination.  Players announce their progressive score for their turn after each roll. 

A player's turn ends when they either decide to stop and score their accumulated points or until they have a scoreless throw and score nothing for that turn.  Should all six dice be set aside as scoring then the player may roll them all again and continue their tally. 

Scoring combinations only count when made with a single throw.  For example, a player who rolls and puts aside a 1 and then throws two 1s with the next throw may only score 300 not a 1,000. 

The first player to score a total of 10,000 or above, wins the game, provided any subsequent players, with a turn left, don't exceed their score

### Score Values
Score Values

```
1	= 100 points
5	= 50 points
1, 1, 1	= 1,000 points
#, #, #	= # x 100   e.g. 2, 2, 2 = 200 points:  6, 6, 6 = 600 points
1, 2, 3, 4, 5, 6	= 3,000 points
3 pairs	= 1,500 points (including four-of-a-kind and a pair)
```

An example turn might go something like this:  A player rolls the six dice and they come up 1, 1, 2, 4, 5, 6. He could set aside the two 1s and the 5 scoring 250 points, but instead sets aside the 1s, scoring 200 and rolls the remaining four dice.  They come up 1, 6, 6, 6 and the player decides to set aside all four dice and his score is increased by 700 points (1 = 100 + 6, 6, 6 = 600) giving a total of 900 so far.  All six dice are scoring so the player decides to continue his turn by rolling them all again.  This time he is unlucky and rolls 2, 3, 3, 4, 6, 6.  A scoreless throw which means he scores nothing for this turn and the dice pass to the next player.

> #### A Note on Score Values
> Farkle / Ten-Thousand is a folk game, so there are a bunch of variations. The rules presented above are an extension of the core rules, which doesn't include the straight (1, 2, 3, 4, 5, 6) or 3 pair scores. I've decided to stick to the rules as established in the linked resource, since it is the "official" rules according the the Lab instructions
> 
> There seems to be no guidance on what happens when scores overlap (for example, [5, 5, 5] scores 500 as a triple, but would also score 150 as three individual 5s), so I have decided that if multiple scores are possible, only the highest score will be counted
> 
> The [Wikipedia Article](https://en.wikipedia.org/wiki/Farkle) on the game is quite interesting!

# Attribution
By Joshua Evans - 2025-04-19
