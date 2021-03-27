# Number

> The JavaScript **Number** type is a *double-precision 64-bit binany format IEEE 754* value, like `double` in Java 
> 1 bit sign
> 10 bit exponent
> 53 bit number

- Values of other types can be converted to numbers using the **Number() function**
- JS now has a ***BigInt*** type, but it was not designed to replace Number for everyday uses.
  - `37` is still a Number, not a BigInt 
    ```js
    // n in the end of an integer
    const bignum = 10000000000000000n 

    // BigInt constructor without the new operator
    // Number in "()" MUST BE safe number
    const bignum = BigInt(10000000000000)
    const bignum = BigInt("100000000000000")  
    ``` 
  - The `/` operator won't return any fractional digits
        ```js
        const rounded = 5n/2n // 2n not 2.5n 
        ```
  - **Can't convert** *BigInt value* to *Number value*  
- Numeric lexical grammar
  - **0b**101 is a Binary Number.
  - **0o**741 is a Octal Number.
  - **0x**fa4 is a Hexadecimal Number.
  - 5**e**3 is 5*10^3
- `Number.MAX_SAFE_INTEGER` (2^53 -1)
- `Number.MAX_VALUE` (2^1024);
- `Number.POSITIVE_INFINITY` (+ oo) (another `Infinity`)
- `NaN` not a number.

> `Math` provides advanced mathematical functions and constants

- `parseInt()`, `parseFloat()`
