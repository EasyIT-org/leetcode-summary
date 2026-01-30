# 565. Array Nesting

- Difficulty: Medium
- Topics: Array, Depth-First Search
- Slug: array-nesting
- Problem ID: 565

## Description
You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:
Return the longest length of a set s[k].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
```

### Example 2
```text
Input: nums = [0,1,2]
Output: 1
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] < nums.length
- All the values of nums are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int arrayNesting(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int arrayNesting(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def arrayNesting(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
```

### c
```c
int arrayNesting(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ArrayNesting(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    
};
```

### typescript
```typescript
function arrayNesting(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function arrayNesting($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func arrayNesting(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun arrayNesting(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int arrayNesting(List<int> nums) {
    
  }
}
```

### golang
```golang
func arrayNesting(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def array_nesting(nums)
    
end
```

### scala
```scala
object Solution {
    def arrayNesting(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn array_nesting(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (array-nesting nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec array_nesting(Nums :: [integer()]) -> integer().
array_nesting(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec array_nesting(nums :: [integer]) :: integer
  def array_nesting(nums) do
    
  end
end
```
