/* Description: There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example
n = 7
ar=[1,2,1,2,1,3,2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. 
The number of pairs is 2.   */


function sockMerchant(n, ar) {
    ar = ar.sort((a,b)=> a-b);
          let res = 0,
              i = 0
    
          while (i < n) {
                
              // take first number
              let number = ar[i];
              let count = 1;
              i++;
    
              // Count all duplicates
              while (i < n && ar[i] == number) {
                  count++;
                  i++;
              }
                
              // If we spotted number just 2
              // times, increment
              // result
              if (count >= 2) {
                  res = res + Math.floor(count / 2);
              }
          }
          return res;
  }
  console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))  // 3