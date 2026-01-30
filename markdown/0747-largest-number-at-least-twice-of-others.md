# 747. Largest Number At Least Twice of Others

- Difficulty: Easy
- Topics: Array, Sorting
- Slug: largest-number-at-least-twice-of-others
- Problem ID: 748

## Description
You are given an integer array nums where the largest integer is unique.
Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
```

### Example 2
```text
Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
```


## Constraints
- 2 <= nums.length <= 50
- 0 <= nums[i] <= 100
- The largest element in nums is unique.

## Hints
- Scan through the array to find the unique largest element `m`, keeping track of it's index `maxIndex`.

Scan through the array again.  If we find some `x != m` with `m < 2*x`, we should return `-1`.

Otherwise, we should return `maxIndex`.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int dominantIndex(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
```

### c
```c
int dominantIndex(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int DominantIndex(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
};
```

### typescript
```typescript
function dominantIndex(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function dominantIndex($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func dominantIndex(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun dominantIndex(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int dominantIndex(List<int> nums) {
    
  }
}
```

### golang
```golang
func dominantIndex(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def dominant_index(nums)
    
end
```

### scala
```scala
object Solution {
    def dominantIndex(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn dominant_index(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (dominant-index nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec dominant_index(Nums :: [integer()]) -> integer().
dominant_index(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec dominant_index(nums :: [integer]) :: integer
  def dominant_index(nums) do
    
  end
end
```
