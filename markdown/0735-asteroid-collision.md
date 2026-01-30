# 735. Asteroid Collision

- Difficulty: Medium
- Topics: Array, Stack, Simulation
- Slug: asteroid-collision
- Problem ID: 735

## Description
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
```

### Example 2
```text
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
```

### Example 3
```text
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
```


## Constraints
- 2 <= asteroids.length <= 104
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0

## Hints
- Say a row of asteroids is stable.  What happens when a new asteroid is added on the right?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        
    }
};
```

### java
```java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        
    }
}
```

### python
```python
class Solution(object):
    def asteroidCollision(self, asteroids):
        """
        :type asteroids: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* asteroidCollision(int* asteroids, int asteroidsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] AsteroidCollision(int[] asteroids) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
};
```

### typescript
```typescript
function asteroidCollision(asteroids: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $asteroids
     * @return Integer[]
     */
    function asteroidCollision($asteroids) {
        
    }
}
```

### swift
```swift
class Solution {
    func asteroidCollision(_ asteroids: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun asteroidCollision(asteroids: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> asteroidCollision(List<int> asteroids) {
    
  }
}
```

### golang
```golang
func asteroidCollision(asteroids []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} asteroids
# @return {Integer[]}
def asteroid_collision(asteroids)
    
end
```

### scala
```scala
object Solution {
    def asteroidCollision(asteroids: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (asteroid-collision asteroids)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec asteroid_collision(Asteroids :: [integer()]) -> [integer()].
asteroid_collision(Asteroids) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec asteroid_collision(asteroids :: [integer]) :: [integer]
  def asteroid_collision(asteroids) do
    
  end
end
```
