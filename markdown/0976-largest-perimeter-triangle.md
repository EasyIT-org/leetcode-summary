# 976. Largest Perimeter Triangle

- Difficulty: Easy
- Topics: Array, Math, Greedy, Sorting
- Slug: largest-perimeter-triangle
- Problem ID: 1018

## Description
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
```

### Example 2
```text
Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
```


## Constraints
- 3 <= nums.length <= 104
- 1 <= nums[i] <= 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int largestPerimeter(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestPerimeter(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
```

### c
```c
int largestPerimeter(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestPerimeter(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
};
```

### typescript
```typescript
function largestPerimeter(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function largestPerimeter($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestPerimeter(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestPerimeter(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestPerimeter(List<int> nums) {
    
  }
}
```

### golang
```golang
func largestPerimeter(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def largest_perimeter(nums)
    
end
```

### scala
```scala
object Solution {
    def largestPerimeter(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-perimeter nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec largest_perimeter(Nums :: [integer()]) -> integer().
largest_perimeter(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_perimeter(nums :: [integer]) :: integer
  def largest_perimeter(nums) do
    
  end
end
```
