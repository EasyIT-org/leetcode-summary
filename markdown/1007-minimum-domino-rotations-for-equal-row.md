# 1007. Minimum Domino Rotations For Equal Row

- Difficulty: Medium
- Topics: Array, Greedy
- Slug: minimum-domino-rotations-for-equal-row
- Problem ID: 1049

## Description
In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.
Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.
If it cannot be done, return -1.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/14/domino.png

### Example 2
```text
Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/14/domino.png


## Constraints
- 2 <= tops.length <= 2 * 104
- bottoms.length == tops.length
- 1 <= tops[i], bottoms[i] <= 6

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {
        
    }
};
```

### java
```java
class Solution {
    public int minDominoRotations(int[] tops, int[] bottoms) {
        
    }
}
```

### python
```python
class Solution(object):
    def minDominoRotations(self, tops, bottoms):
        """
        :type tops: List[int]
        :type bottoms: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:
```

### c
```c
int minDominoRotations(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinDominoRotations(int[] tops, int[] bottoms) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    
};
```

### typescript
```typescript
function minDominoRotations(tops: number[], bottoms: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $tops
     * @param Integer[] $bottoms
     * @return Integer
     */
    function minDominoRotations($tops, $bottoms) {
        
    }
}
```

### swift
```swift
class Solution {
    func minDominoRotations(_ tops: [Int], _ bottoms: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minDominoRotations(tops: IntArray, bottoms: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minDominoRotations(List<int> tops, List<int> bottoms) {
    
  }
}
```

### golang
```golang
func minDominoRotations(tops []int, bottoms []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} tops
# @param {Integer[]} bottoms
# @return {Integer}
def min_domino_rotations(tops, bottoms)
    
end
```

### scala
```scala
object Solution {
    def minDominoRotations(tops: Array[Int], bottoms: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_domino_rotations(tops: Vec<i32>, bottoms: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-domino-rotations tops bottoms)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_domino_rotations(Tops :: [integer()], Bottoms :: [integer()]) -> integer().
min_domino_rotations(Tops, Bottoms) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_domino_rotations(tops :: [integer], bottoms :: [integer]) :: integer
  def min_domino_rotations(tops, bottoms) do
    
  end
end
```
