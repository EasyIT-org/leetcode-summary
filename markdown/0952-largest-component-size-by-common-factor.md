# 952. Largest Component Size by Common Factor

- Difficulty: Hard
- Topics: Array, Hash Table, Math, Union Find, Number Theory
- Slug: largest-component-size-by-common-factor
- Problem ID: 989

## Description
You are given an integer array of unique positive integers nums. Consider the following graph:
Return the size of the largest connected component in the graph.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,6,15,35]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2018/12/01/ex1.png

### Example 2
```text
Input: nums = [20,50,9,63]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2018/12/01/ex2.png

### Example 3
```text
Input: nums = [2,3,6,7,4,12,21,39]
Output: 8
```
Images:
- https://assets.leetcode.com/uploads/2018/12/01/ex3.png


## Constraints
- 1 <= nums.length <= 2 * 104
- 1 <= nums[i] <= 105
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
    int largestComponentSize(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int largestComponentSize(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestComponentSize(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
```

### c
```c
int largestComponentSize(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestComponentSize(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function(nums) {
    
};
```

### typescript
```typescript
function largestComponentSize(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function largestComponentSize($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestComponentSize(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestComponentSize(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestComponentSize(List<int> nums) {
    
  }
}
```

### golang
```golang
func largestComponentSize(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def largest_component_size(nums)
    
end
```

### scala
```scala
object Solution {
    def largestComponentSize(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_component_size(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-component-size nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec largest_component_size(Nums :: [integer()]) -> integer().
largest_component_size(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_component_size(nums :: [integer]) :: integer
  def largest_component_size(nums) do
    
  end
end
```
