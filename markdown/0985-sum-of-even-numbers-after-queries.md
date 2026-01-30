# 985. Sum of Even Numbers After Queries

- Difficulty: Medium
- Topics: Array, Simulation
- Slug: sum-of-even-numbers-after-queries
- Problem ID: 1027

## Description
You are given an integer array nums and an array queries where queries[i] = [vali, indexi].
For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.
Return an integer array answer where answer[i] is the answer to the ith query.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
```

### Example 2
```text
Input: nums = [1], queries = [[4,0]]
Output: [0]
```


## Constraints
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- 1 <= queries.length <= 104
- -104 <= vali <= 104
- 0 <= indexi < nums.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        
    }
};
```

### java
```java
class Solution {
    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {
        
    }
}
```

### python
```python
class Solution(object):
    def sumEvenAfterQueries(self, nums, queries):
        """
        :type nums: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sumEvenAfterQueries(int* nums, int numsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SumEvenAfterQueries(int[] nums, int[][] queries) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    
};
```

### typescript
```typescript
function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function sumEvenAfterQueries($nums, $queries) {
        
    }
}
```

### swift
```swift
class Solution {
    func sumEvenAfterQueries(_ nums: [Int], _ queries: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sumEvenAfterQueries(nums: IntArray, queries: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> sumEvenAfterQueries(List<int> nums, List<List<int>> queries) {
    
  }
}
```

### golang
```golang
func sumEvenAfterQueries(nums []int, queries [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer[][]} queries
# @return {Integer[]}
def sum_even_after_queries(nums, queries)
    
end
```

### scala
```scala
object Solution {
    def sumEvenAfterQueries(nums: Array[Int], queries: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sum_even_after_queries(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (sum-even-after-queries nums queries)
  (-> (listof exact-integer?) (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec sum_even_after_queries(Nums :: [integer()], Queries :: [[integer()]]) -> [integer()].
sum_even_after_queries(Nums, Queries) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sum_even_after_queries(nums :: [integer], queries :: [[integer]]) :: [integer]
  def sum_even_after_queries(nums, queries) do
    
  end
end
```
