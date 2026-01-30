# 848. Shifting Letters

- Difficulty: Medium
- Topics: Array, String, Prefix Sum
- Slug: shifting-letters
- Problem ID: 878

## Description
You are given a string s of lowercase English letters and an integer array shifts of the same length.
Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
Return the final string after all such shifts to s are applied.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: We start with "abc".
After shifting the first 1 letters of s by 3, we have "dbc".
After shifting the first 2 letters of s by 5, we have "igc".
After shifting the first 3 letters of s by 9, we have "rpl", the answer.
```

### Example 2
```text
Input: s = "aaa", shifts = [1,2,3]
Output: "gfd"
```


## Constraints
- 1 <= s.length <= 105
- s consists of lowercase English letters.
- shifts.length == s.length
- 0 <= shifts[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string shiftingLetters(string s, vector<int>& shifts) {
        
    }
};
```

### java
```java
class Solution {
    public String shiftingLetters(String s, int[] shifts) {
        
    }
}
```

### python
```python
class Solution(object):
    def shiftingLetters(self, s, shifts):
        """
        :type s: str
        :type shifts: List[int]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
```

### c
```c
char* shiftingLetters(char* s, int* shifts, int shiftsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ShiftingLetters(string s, int[] shifts) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    
};
```

### typescript
```typescript
function shiftingLetters(s: string, shifts: number[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer[] $shifts
     * @return String
     */
    function shiftingLetters($s, $shifts) {
        
    }
}
```

### swift
```swift
class Solution {
    func shiftingLetters(_ s: String, _ shifts: [Int]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shiftingLetters(s: String, shifts: IntArray): String {
        
    }
}
```

### dart
```dart
class Solution {
  String shiftingLetters(String s, List<int> shifts) {
    
  }
}
```

### golang
```golang
func shiftingLetters(s string, shifts []int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer[]} shifts
# @return {String}
def shifting_letters(s, shifts)
    
end
```

### scala
```scala
object Solution {
    def shiftingLetters(s: String, shifts: Array[Int]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shifting_letters(s: String, shifts: Vec<i32>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (shifting-letters s shifts)
  (-> string? (listof exact-integer?) string?)
  )
```

### erlang
```erlang
-spec shifting_letters(S :: unicode:unicode_binary(), Shifts :: [integer()]) -> unicode:unicode_binary().
shifting_letters(S, Shifts) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shifting_letters(s :: String.t, shifts :: [integer]) :: String.t
  def shifting_letters(s, shifts) do
    
  end
end
```
