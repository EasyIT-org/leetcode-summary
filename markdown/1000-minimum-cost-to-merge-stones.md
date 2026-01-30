# 1000. Minimum Cost to Merge Stones

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Prefix Sum
- Slug: minimum-cost-to-merge-stones
- Problem ID: 1042

## Description
There are n piles of stones arranged in a row. The ith pile has stones[i] stones.
A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles.
Return the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: stones = [3,2,4,1], k = 2
Output: 20
Explanation: We start with [3, 2, 4, 1].
We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
We merge [4, 1] for a cost of 5, and we are left with [5, 5].
We merge [5, 5] for a cost of 10, and we are left with [10].
The total cost was 20, and this is the minimum possible.
```

### Example 2
```text
Input: stones = [3,2,4,1], k = 3
Output: -1
Explanation: After any merge operation, there are 2 piles left, and we can't merge anymore.  So the task is impossible.
```

### Example 3
```text
Input: stones = [3,5,1,2,6], k = 3
Output: 25
Explanation: We start with [3, 5, 1, 2, 6].
We merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].
We merge [3, 8, 6] for a cost of 17, and we are left with [17].
The total cost was 25, and this is the minimum possible.
```


## Constraints
- n == stones.length
- 1 <= n <= 30
- 1 <= stones[i] <= 100
- 2 <= k <= 30

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int mergeStones(vector<int>& stones, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int mergeStones(int[] stones, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def mergeStones(self, stones, k):
        """
        :type stones: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
```

### c
```c
int mergeStones(int* stones, int stonesSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MergeStones(int[] stones, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
    
};
```

### typescript
```typescript
function mergeStones(stones: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $stones
     * @param Integer $k
     * @return Integer
     */
    function mergeStones($stones, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func mergeStones(_ stones: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mergeStones(stones: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int mergeStones(List<int> stones, int k) {
    
  }
}
```

### golang
```golang
func mergeStones(stones []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} stones
# @param {Integer} k
# @return {Integer}
def merge_stones(stones, k)
    
end
```

### scala
```scala
object Solution {
    def mergeStones(stones: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn merge_stones(stones: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (merge-stones stones k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec merge_stones(Stones :: [integer()], K :: integer()) -> integer().
merge_stones(Stones, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec merge_stones(stones :: [integer], k :: integer) :: integer
  def merge_stones(stones, k) do
    
  end
end
```
