# 396. Rotate Function

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming
- Slug: rotate-function
- Problem ID: 396

## Description
You are given an integer array nums of length n.
Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:
Return the maximum value of F(0), F(1), ..., F(n-1).
The test cases are generated so that the answer fits in a 32-bit integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,3,2,6]
Output: 26
Explanation:
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
```

### Example 2
```text
Input: nums = [100]
Output: 0
```


## Constraints
- n == nums.length
- 1 <= n <= 105
- -100 <= nums[i] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxRotateFunction(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxRotateFunction(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
```

### c
```c
int maxRotateFunction(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxRotateFunction(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    
};
```

### typescript
```typescript
function maxRotateFunction(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxRotateFunction($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxRotateFunction(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxRotateFunction(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxRotateFunction(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxRotateFunction(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_rotate_function(nums)
    
end
```

### scala
```scala
object Solution {
    def maxRotateFunction(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_rotate_function(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-rotate-function nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_rotate_function(Nums :: [integer()]) -> integer().
max_rotate_function(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_rotate_function(nums :: [integer]) :: integer
  def max_rotate_function(nums) do
    
  end
end
```
