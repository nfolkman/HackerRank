/* Description: You are choreographing a circus show with various animals. 
For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
If it is possible, return YES, otherwise return NO.  */

function kangaroo(x1, v1, x2, v2) {
   for(let i = 0; i<=10000; i++){
       x1+=v1
       x2+=v2
       if(x1 == x2){
           return 'YES'
       }
   }
   return 'NO'
}

/* test cases
kangaroo(2,1,1,2)
kangaroo(5,1,2,2) */ 