# 164. Maximum Gap

- Difficulty: Medium
- Topics: Array, Sorting, Bucket Sort, Radix Sort
- Slug: maximum-gap
- Problem ID: 164

## Description
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
You must write an algorithm that runs in linear time and uses linear extra space.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
```

### Example 2
```text
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maximumGap(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maximumGap(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maximumGap(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maximumGap(self, nums: List[int]) -> int:
```

### c
```c
int maximumGap(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaximumGap(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    
};
```

### typescript
```typescript
function maximumGap(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumGap($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maximumGap(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maximumGap(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maximumGap(List<int> nums) {
    
  }
}
```

### golang
```golang
func maximumGap(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def maximum_gap(nums)
    
end
```

### scala
```scala
object Solution {
    def maximumGap(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn maximum_gap(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (maximum-gap nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec maximum_gap(Nums :: [integer()]) -> integer().
maximum_gap(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec maximum_gap(nums :: [integer]) :: integer
  def maximum_gap(nums) do
    
  end
end
```
