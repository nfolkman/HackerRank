/* Description: Maria plays college basketball and wants to go pro. 
Each season she maintains a record of her play. She tabulates the number of times she breaks her season record 
for most points and least points in a game. Points scored in the first game establish her record for the season, 
and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.  */


function breakingRecords(scores) {
    // least = 0, most = 0
    // if score is < least ? least+=1, if score > most ? most+= 1
    let leastCount = 0,
        mostCount = 0,
        least = scores[0],
        most = scores[0]

    for(let i = 1; i<scores.length; i++){
        
        if(scores[i] < least){
        leastCount+=1
        least = scores[i]
      }
        if(scores[i] > most){
        mostCount+=1
        most = scores[i]
      }
    }
    return [mostCount,leastCount]
}

// test cases:
console.log(breakingRecords([3,4, 21, 36, 10, 28, 35, 5, 24, 42])) // [4,0]