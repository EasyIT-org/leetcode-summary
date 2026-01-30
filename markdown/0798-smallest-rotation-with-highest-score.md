# 798. Smallest Rotation with Highest Score

- Difficulty: Hard
- Topics: Array, Prefix Sum
- Slug: smallest-rotation-with-highest-score
- Problem ID: 814

## Description
You are given an array nums. You can rotate it by a non-negative integer k so that the array becomes [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]. Afterward, any entries that are less than or equal to their index are worth one point.
Return the rotation index k that corresponds to the highest score we can achieve if we rotated nums by it. If there are multiple answers, return the smallest such index k.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,3,1,4,0]
Output: 3
Explanation: Scores for each k are listed below: 
k = 0,  nums = [2,3,1,4,0],    score 2
k = 1,  nums = [3,1,4,0,2],    score 3
k = 2,  nums = [1,4,0,2,3],    score 3
k = 3,  nums = [4,0,2,3,1],    score 4
k = 4,  nums = [0,2,3,1,4],    score 3
So we should choose k = 3, which has the highest score.
```

### Example 2
```text
Input: nums = [1,3,0,2,4]
Output: 0
Explanation: nums will always have 3 points no matter how it shifts.
So we will choose the smallest k, which is 0.
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] < nums.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int bestRotation(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int bestRotation(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def bestRotation(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def bestRotation(self, nums: List[int]) -> int:
```

### c
```c
int bestRotation(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BestRotation(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
    
};
```

### typescript
```typescript
function bestRotation(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function bestRotation($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func bestRotation(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun bestRotation(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int bestRotation(List<int> nums) {
    
  }
}
```

### golang
```golang
func bestRotation(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def best_rotation(nums)
    
end
```

### scala
```scala
object Solution {
    def bestRotation(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn best_rotation(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (best-rotation nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec best_rotation(Nums :: [integer()]) -> integer().
best_rotation(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec best_rotation(nums :: [integer]) :: integer
  def best_rotation(nums) do
    
  end
end
```
