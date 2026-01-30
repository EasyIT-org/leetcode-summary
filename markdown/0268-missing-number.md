# 268. Missing Number

- Difficulty: Easy
- Topics: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting
- Slug: missing-number
- Problem ID: 268

## Description
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

## Examples
### Example 1
```text
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3] . 2 is the missing number in the range since it does not appear in nums .
```

### Example 2
```text
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2] . 2 is the missing number in the range since it does not appear in nums .
```

### Example 3
```text
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9] . 8 is the missing number in the range since it does not appear in nums .
```


## Constraints
- n == nums.length
- 1 <= n <= 104
- 0 <= nums[i] <= n
- All the numbers of nums are unique.

## Hints
(none)

## Follow Ups
- Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int missingNumber(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
```

### c
```c
int missingNumber(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MissingNumber(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
};
```

### typescript
```typescript
function missingNumber(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function missingNumber($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func missingNumber(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun missingNumber(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int missingNumber(List<int> nums) {
    
  }
}
```

### golang
```golang
func missingNumber(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def missing_number(nums)
    
end
```

### scala
```scala
object Solution {
    def missingNumber(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (missing-number nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec missing_number(Nums :: [integer()]) -> integer().
missing_number(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec missing_number(nums :: [integer]) :: integer
  def missing_number(nums) do
    
  end
end
```
