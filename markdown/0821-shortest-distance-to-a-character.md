# 821. Shortest Distance to a Character

- Difficulty: Easy
- Topics: Array, Two Pointers, String
- Slug: shortest-distance-to-a-character
- Problem ID: 841

## Description
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
```

### Example 2
```text
Input: s = "aaab", c = "b"
Output: [3,2,1,0]
```


## Constraints
- 1 <= s.length <= 104
- s[i] and c are lowercase English letters.
- It is guaranteed that c occurs at least once in s.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> shortestToChar(string s, char c) {
        
    }
};
```

### java
```java
class Solution {
    public int[] shortestToChar(String s, char c) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestToChar(self, s, c):
        """
        :type s: str
        :type c: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* shortestToChar(char* s, char c, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ShortestToChar(string s, char c) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
};
```

### typescript
```typescript
function shortestToChar(s: string, c: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $c
     * @return Integer[]
     */
    function shortestToChar($s, $c) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestToChar(_ s: String, _ c: Character) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestToChar(s: String, c: Char): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> shortestToChar(String s, String c) {
    
  }
}
```

### golang
```golang
func shortestToChar(s string, c byte) []int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Character} c
# @return {Integer[]}
def shortest_to_char(s, c)
    
end
```

### scala
```scala
object Solution {
    def shortestToChar(s: String, c: Char): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (shortest-to-char s c)
  (-> string? char? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec shortest_to_char(S :: unicode:unicode_binary(), C :: char()) -> [integer()].
shortest_to_char(S, C) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_to_char(s :: String.t, c :: char) :: [integer]
  def shortest_to_char(s, c) do
    
  end
end
```
