# 473. Matchsticks to Square

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask
- Slug: matchsticks-to-square
- Problem ID: 473

## Description
You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
Return true if you can make this square and false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/09/matchsticks1-grid.jpg

### Example 2
```text
Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/09/matchsticks1-grid.jpg


## Constraints
- 1 <= matchsticks.length <= 15
- 1 <= matchsticks[i] <= 108

## Hints
- Treat the matchsticks as an array. Can we split the array into 4 equal parts?
- Every matchstick can belong to either of the 4 sides. We don't know which one. Maybe try out all options!
- For every matchstick, we have to try out each of the 4 options i.e. which side it can belong to. We can make use of recursion for this.
- We don't really need to keep track of which matchsticks belong to a particular side during recursion. We just need to keep track of the <b>length</b> of each of the 4 sides.
- When all matchsticks have been used we simply need to see the length of all 4 sides. If they're equal, we have a square on our hands!

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool makesquare(vector<int>& matchsticks) {
        
    }
};
```

### java
```java
class Solution {
    public boolean makesquare(int[] matchsticks) {
        
    }
}
```

### python
```python
class Solution(object):
    def makesquare(self, matchsticks):
        """
        :type matchsticks: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
```

### c
```c
bool makesquare(int* matchsticks, int matchsticksSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool Makesquare(int[] matchsticks) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    
};
```

### typescript
```typescript
function makesquare(matchsticks: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $matchsticks
     * @return Boolean
     */
    function makesquare($matchsticks) {
        
    }
}
```

### swift
```swift
class Solution {
    func makesquare(_ matchsticks: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun makesquare(matchsticks: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool makesquare(List<int> matchsticks) {
    
  }
}
```

### golang
```golang
func makesquare(matchsticks []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} matchsticks
# @return {Boolean}
def makesquare(matchsticks)
    
end
```

### scala
```scala
object Solution {
    def makesquare(matchsticks: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn makesquare(matchsticks: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (makesquare matchsticks)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec makesquare(Matchsticks :: [integer()]) -> boolean().
makesquare(Matchsticks) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec makesquare(matchsticks :: [integer]) :: boolean
  def makesquare(matchsticks) do
    
  end
end
```
