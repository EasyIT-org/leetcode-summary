# 1155. Number of Dice Rolls With Target Sum

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: number-of-dice-rolls-with-target-sum
- Problem ID: 1263

## Description
You have n dice, and each dice has k faces numbered from 1 to k.
Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.
```

### Example 2
```text
Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
```

### Example 3
```text
Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 109 + 7.
```


## Constraints
- 1 <= n, k <= 30
- 1 <= target <= 1000

## Hints
- Use dynamic programming.  The states are how many dice are remaining, and what sum total you have rolled so far.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numRollsToTarget(int n, int k, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int numRollsToTarget(int n, int k, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def numRollsToTarget(self, n, k, target):
        """
        :type n: int
        :type k: int
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
```

### c
```c
int numRollsToTarget(int n, int k, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumRollsToTarget(int n, int k, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    
};
```

### typescript
```typescript
function numRollsToTarget(n: number, k: number, target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @param Integer $target
     * @return Integer
     */
    function numRollsToTarget($n, $k, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func numRollsToTarget(_ n: Int, _ k: Int, _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numRollsToTarget(n: Int, k: Int, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numRollsToTarget(int n, int k, int target) {
    
  }
}
```

### golang
```golang
func numRollsToTarget(n int, k int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @param {Integer} target
# @return {Integer}
def num_rolls_to_target(n, k, target)
    
end
```

### scala
```scala
object Solution {
    def numRollsToTarget(n: Int, k: Int, target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_rolls_to_target(n: i32, k: i32, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-rolls-to-target n k target)
  (-> exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_rolls_to_target(N :: integer(), K :: integer(), Target :: integer()) -> integer().
num_rolls_to_target(N, K, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_rolls_to_target(n :: integer, k :: integer, target :: integer) :: integer
  def num_rolls_to_target(n, k, target) do
    
  end
end
```
