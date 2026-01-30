# 475. Heaters

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Sorting
- Slug: heaters
- Problem ID: 475

## Description
Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.
Every house can be warmed, as long as the house is within the heater's warm radius range.
Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.
Notice that all the heaters follow your radius standard, and the warm radius will the same.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
```

### Example 2
```text
Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heaters were placed at positions 1 and 4. We need to use a radius 1 standard, then all the houses can be warmed.
```

### Example 3
```text
Input: houses = [1,5], heaters = [2]
Output: 3
```


## Constraints
- 1 <= houses.length, heaters.length <= 3 * 104
- 1 <= houses[i], heaters[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findRadius(vector<int>& houses, vector<int>& heaters) {
        
    }
};
```

### java
```java
class Solution {
    public int findRadius(int[] houses, int[] heaters) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRadius(self, houses, heaters):
        """
        :type houses: List[int]
        :type heaters: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
```

### c
```c
int findRadius(int* houses, int housesSize, int* heaters, int heatersSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindRadius(int[] houses, int[] heaters) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    
};
```

### typescript
```typescript
function findRadius(houses: number[], heaters: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $houses
     * @param Integer[] $heaters
     * @return Integer
     */
    function findRadius($houses, $heaters) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRadius(_ houses: [Int], _ heaters: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findRadius(List<int> houses, List<int> heaters) {
    
  }
}
```

### golang
```golang
func findRadius(houses []int, heaters []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} houses
# @param {Integer[]} heaters
# @return {Integer}
def find_radius(houses, heaters)
    
end
```

### scala
```scala
object Solution {
    def findRadius(houses: Array[Int], heaters: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_radius(houses: Vec<i32>, heaters: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-radius houses heaters)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_radius(Houses :: [integer()], Heaters :: [integer()]) -> integer().
find_radius(Houses, Heaters) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_radius(houses :: [integer], heaters :: [integer]) :: integer
  def find_radius(houses, heaters) do
    
  end
end
```
