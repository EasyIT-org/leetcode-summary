# 632. Smallest Range Covering Elements from K Lists

- Difficulty: Hard
- Topics: Array, Hash Table, Greedy, Sliding Window, Sorting, Heap (Priority Queue)
- Slug: smallest-range-covering-elements-from-k-lists
- Problem ID: 632

## Description
You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.
We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
```

### Example 2
```text
Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
Output: [1,1]
```


## Constraints
- nums.length == k
- 1 <= k <= 3500
- 1 <= nums[i].length <= 50
- -105 <= nums[i][j] <= 105
- nums[i] is sorted in non-decreasing order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestRange(self, nums):
        """
        :type nums: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* smallestRange(int** nums, int numsSize, int* numsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SmallestRange(IList<IList<int>> nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    
};
```

### typescript
```typescript
function smallestRange(nums: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $nums
     * @return Integer[]
     */
    function smallestRange($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestRange(_ nums: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestRange(nums: List<List<Int>>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> smallestRange(List<List<int>> nums) {
    
  }
}
```

### golang
```golang
func smallestRange(nums [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} nums
# @return {Integer[]}
def smallest_range(nums)
    
end
```

### scala
```scala
object Solution {
    def smallestRange(nums: List[List[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_range(nums: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (smallest-range nums)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec smallest_range(Nums :: [[integer()]]) -> [integer()].
smallest_range(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_range(nums :: [[integer]]) :: [integer]
  def smallest_range(nums) do
    
  end
end
```
