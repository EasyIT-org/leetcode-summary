# 936. Stamping The Sequence

- Difficulty: Hard
- Topics: String, Stack, Greedy, Queue
- Slug: stamping-the-sequence
- Problem ID: 973

## Description
You are given two strings stamp and target. Initially, there is a string s of length target.length with all s[i] == '?'.
In one turn, you can place stamp over s and replace every letter in the s with the corresponding letter from stamp.
We want to convert s to target using at most 10 * target.length turns.
Return an array of the index of the left-most letter being stamped at each turn. If we cannot obtain target from s within 10 * target.length turns, return an empty array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stamp = "abc", target = "ababc"
Output: [0,2]
Explanation: Initially s = "?????".
- Place stamp at index 0 to get "abc??".
- Place stamp at index 2 to get "ababc".
[1,0,2] would also be accepted as an answer, as well as some other answers.
```

### Example 2
```text
Input: stamp = "abca", target = "aabcaca"
Output: [3,0,1]
Explanation: Initially s = "???????".
- Place stamp at index 3 to get "???abca".
- Place stamp at index 0 to get "abcabca".
- Place stamp at index 1 to get "aabcaca".
```


## Constraints
- 1 <= stamp.length <= target.length <= 1000
- stamp and target consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> movesToStamp(string stamp, string target) {
        
    }
};
```

### java
```java
class Solution {
    public int[] movesToStamp(String stamp, String target) {
        
    }
}
```

### python
```python
class Solution(object):
    def movesToStamp(self, stamp, target):
        """
        :type stamp: str
        :type target: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def movesToStamp(self, stamp: str, target: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* movesToStamp(char* stamp, char* target, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] MovesToStamp(string stamp, string target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    
};
```

### typescript
```typescript
function movesToStamp(stamp: string, target: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $stamp
     * @param String $target
     * @return Integer[]
     */
    function movesToStamp($stamp, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func movesToStamp(_ stamp: String, _ target: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun movesToStamp(stamp: String, target: String): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> movesToStamp(String stamp, String target) {
    
  }
}
```

### golang
```golang
func movesToStamp(stamp string, target string) []int {
    
}
```

### ruby
```ruby
# @param {String} stamp
# @param {String} target
# @return {Integer[]}
def moves_to_stamp(stamp, target)
    
end
```

### scala
```scala
object Solution {
    def movesToStamp(stamp: String, target: String): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn moves_to_stamp(stamp: String, target: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (moves-to-stamp stamp target)
  (-> string? string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec moves_to_stamp(Stamp :: unicode:unicode_binary(), Target :: unicode:unicode_binary()) -> [integer()].
moves_to_stamp(Stamp, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec moves_to_stamp(stamp :: String.t, target :: String.t) :: [integer]
  def moves_to_stamp(stamp, target) do
    
  end
end
```
