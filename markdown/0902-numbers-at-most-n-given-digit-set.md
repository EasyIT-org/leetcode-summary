# 902. Numbers At Most N Given Digit Set

- Difficulty: Hard
- Topics: Array, Math, String, Binary Search, Dynamic Programming
- Slug: numbers-at-most-n-given-digit-set
- Problem ID: 938

## Description
Given an array of digits which is sorted in non-decreasing order. You can write numbers using each digits[i] as many times as we want. For example, if digits = ['1','3','5'], we may write numbers such as '13', '551', and '1351315'.
Return the number of positive integers that can be generated that are less than or equal to a given integer n.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: digits = ["1","3","5","7"], n = 100
Output: 20
Explanation: 
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
```

### Example 2
```text
Input: digits = ["1","4","9"], n = 1000000000
Output: 29523
Explanation: 
We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
In total, this is 29523 integers that can be written using the digits array.
```

### Example 3
```text
Input: digits = ["7"], n = 8
Output: 1
```


## Constraints
- 1 <= digits.length <= 9
- digits[i].length == 1
- digits[i] is a digit from '1' to '9'.
- All the values in digits are unique.
- digits is sorted in non-decreasing order.
- 1 <= n <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int atMostNGivenDigitSet(vector<string>& digits, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int atMostNGivenDigitSet(String[] digits, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def atMostNGivenDigitSet(self, digits, n):
        """
        :type digits: List[str]
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
```

### c
```c
int atMostNGivenDigitSet(char** digits, int digitsSize, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int AtMostNGivenDigitSet(string[] digits, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
    
};
```

### typescript
```typescript
function atMostNGivenDigitSet(digits: string[], n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $digits
     * @param Integer $n
     * @return Integer
     */
    function atMostNGivenDigitSet($digits, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func atMostNGivenDigitSet(_ digits: [String], _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun atMostNGivenDigitSet(digits: Array<String>, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int atMostNGivenDigitSet(List<String> digits, int n) {
    
  }
}
```

### golang
```golang
func atMostNGivenDigitSet(digits []string, n int) int {
    
}
```

### ruby
```ruby
# @param {String[]} digits
# @param {Integer} n
# @return {Integer}
def at_most_n_given_digit_set(digits, n)
    
end
```

### scala
```scala
object Solution {
    def atMostNGivenDigitSet(digits: Array[String], n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn at_most_n_given_digit_set(digits: Vec<String>, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (at-most-n-given-digit-set digits n)
  (-> (listof string?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec at_most_n_given_digit_set(Digits :: [unicode:unicode_binary()], N :: integer()) -> integer().
at_most_n_given_digit_set(Digits, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec at_most_n_given_digit_set(digits :: [String.t], n :: integer) :: integer
  def at_most_n_given_digit_set(digits, n) do
    
  end
end
```
