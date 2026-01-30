# 334. Increasing Triplet Subsequence

- Difficulty: Medium
- Topics: Array, Greedy
- Slug: increasing-triplet-subsequence
- Problem ID: 334

## Description
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

### Example 2
```text
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```

### Example 3
```text
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```


## Constraints
- 1 <= nums.length <= 5 * 105
- -231 <= nums[i] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
```

### c
```c
bool increasingTriplet(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IncreasingTriplet(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
};
```

### typescript
```typescript
function increasingTriplet(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function increasingTriplet($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func increasingTriplet(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun increasingTriplet(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool increasingTriplet(List<int> nums) {
    
  }
}
```

### golang
```golang
func increasingTriplet(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def increasing_triplet(nums)
    
end
```

### scala
```scala
object Solution {
    def increasingTriplet(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn increasing_triplet(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (increasing-triplet nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec increasing_triplet(Nums :: [integer()]) -> boolean().
increasing_triplet(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec increasing_triplet(nums :: [integer]) :: boolean
  def increasing_triplet(nums) do
    
  end
end
```
