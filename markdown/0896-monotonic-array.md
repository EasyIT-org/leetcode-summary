# 896. Monotonic Array

- Difficulty: Easy
- Topics: Array
- Slug: monotonic-array
- Problem ID: 932

## Description
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,2,3]
Output: true
```

### Example 2
```text
Input: nums = [6,5,4,4]
Output: true
```

### Example 3
```text
Input: nums = [1,3,2]
Output: false
```


## Constraints
- 1 <= nums.length <= 105
- -105 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isMonotonic(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def isMonotonic(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
```

### c
```c
bool isMonotonic(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsMonotonic(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
};
```

### typescript
```typescript
function isMonotonic(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isMonotonic($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func isMonotonic(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isMonotonic(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isMonotonic(List<int> nums) {
    
  }
}
```

### golang
```golang
func isMonotonic(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def is_monotonic(nums)
    
end
```

### scala
```scala
object Solution {
    def isMonotonic(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_monotonic(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-monotonic nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_monotonic(Nums :: [integer()]) -> boolean().
is_monotonic(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_monotonic(nums :: [integer]) :: boolean
  def is_monotonic(nums) do
    
  end
end
```
