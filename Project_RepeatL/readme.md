# Task Check for Repeats

==============================
* * Part 1 
* * Check String for repeated characters and return non repeating characters
________________________________
* * Part2
* * Return amount of repeats for each character
________________________________
* * expected input     
*
        "aabcddddhdduh" 
_________________________________________________

* * expected output     
*
          st: 'bcu',
        detail:
            [ { check: true, char: 'a', amount: 1 },
            { check: false, char: 'b', amount: 0 },
            { check: false, char: 'c', amount: 0 },
            { check: true, char: 'd', amount: 5 },
            { check: true, char: 'h', amount: 1 },
            { check: false, char: 'u', amount: 0 } ] 