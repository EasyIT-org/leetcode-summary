# 238. Product of Array Except Self

- Difficulty: Medium
- Topics: Array, Prefix Sum
- Slug: product-of-array-except-self
- Problem ID: 238

## Description
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Example 2:
Constraints:
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Examples
### Example 1
```text
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

### Example 2
```text
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```


## Constraints
- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

## Hints
- Think how you can efficiently utilize prefix and suffix products to calculate the product of all elements except self for each index. Can you pre-compute the prefix and suffix products in linear time to avoid redundant calculations?
- Can you minimize additional space usage by reusing memory or modifying the input array to store intermediate results?

## Follow Ups
- Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
};
```

### typescript
```typescript
function productExceptSelf(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function productExceptSelf($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> productExceptSelf(List<int> nums) {
    
  }
}
```

### golang
```golang
func productExceptSelf(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    
end
```

### scala
```scala
object Solution {
    def productExceptSelf(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (product-except-self nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec product_except_self(Nums :: [integer()]) -> [integer()].
product_except_self(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec product_except_self(nums :: [integer]) :: [integer]
  def product_except_self(nums) do
    
  end
end
```
