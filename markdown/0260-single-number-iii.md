# 260. Single Number III

- Difficulty: Medium
- Topics: Array, Bit Manipulation
- Slug: single-number-iii
- Problem ID: 260

## Description
Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
```

### Example 2
```text
Input: nums = [-1,0]
Output: [-1,0]
```

### Example 3
```text
Input: nums = [0,1]
Output: [1,0]
```


## Constraints
- 2 <= nums.length <= 3 * 104
- -231 <= nums[i] <= 231 - 1
- Each integer in nums will appear twice, only two integers will appear once.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] singleNumber(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* singleNumber(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SingleNumber(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
};
```

### typescript
```typescript
function singleNumber(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function singleNumber($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func singleNumber(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun singleNumber(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> singleNumber(List<int> nums) {
    
  }
}
```

### golang
```golang
func singleNumber(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def single_number(nums)
    
end
```

### scala
```scala
object Solution {
    def singleNumber(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (single-number nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec single_number(Nums :: [integer()]) -> [integer()].
single_number(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec single_number(nums :: [integer]) :: [integer]
  def single_number(nums) do
    
  end
end
```
