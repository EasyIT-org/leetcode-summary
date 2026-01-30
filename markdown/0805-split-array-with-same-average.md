# 805. Split Array With Same Average

- Difficulty: Hard
- Topics: Array, Math, Dynamic Programming, Bit Manipulation, Bitmask
- Slug: split-array-with-same-average
- Problem ID: 823

## Description
You are given an integer array nums.
You should move each element of nums into one of the two arrays A and B such that A and B are non-empty, and average(A) == average(B).
Return true if it is possible to achieve that and false otherwise.
Note that for an array arr, average(arr) is the sum of all the elements of arr over the length of arr.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have an average of 4.5.
```

### Example 2
```text
Input: nums = [3,1]
Output: false
```


## Constraints
- 1 <= nums.length <= 30
- 0 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool splitArraySameAverage(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean splitArraySameAverage(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def splitArraySameAverage(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def splitArraySameAverage(self, nums: List[int]) -> bool:
```

### c
```c
bool splitArraySameAverage(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool SplitArraySameAverage(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    
};
```

### typescript
```typescript
function splitArraySameAverage(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function splitArraySameAverage($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func splitArraySameAverage(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun splitArraySameAverage(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool splitArraySameAverage(List<int> nums) {
    
  }
}
```

### golang
```golang
func splitArraySameAverage(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def split_array_same_average(nums)
    
end
```

### scala
```scala
object Solution {
    def splitArraySameAverage(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn split_array_same_average(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (split-array-same-average nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec split_array_same_average(Nums :: [integer()]) -> boolean().
split_array_same_average(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec split_array_same_average(nums :: [integer]) :: boolean
  def split_array_same_average(nums) do
    
  end
end
```
