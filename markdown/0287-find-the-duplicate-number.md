# 287. Find the Duplicate Number

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Bit Manipulation
- Slug: find-the-duplicate-number
- Problem ID: 287

## Description
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and using only constant extra space.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: nums = [1,3,4,2,2]
Output: 2
```

### Example 2
```text
Input: nums = [3,1,3,4,2]
Output: 3
```

### Example 3
```text
Input: nums = [3,3,3,3,3]
Output: 3
```


## Constraints
- 1 <= n <= 105
- nums.length == n + 1
- 1 <= nums[i] <= n
- All the integers in nums appear only once except for precisely one integer which appears two or more times.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findDuplicate(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
```

### c
```c
int findDuplicate(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindDuplicate(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
};
```

### typescript
```typescript
function findDuplicate(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findDuplicate($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findDuplicate(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findDuplicate(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findDuplicate(List<int> nums) {
    
  }
}
```

### golang
```golang
func findDuplicate(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_duplicate(nums)
    
end
```

### scala
```scala
object Solution {
    def findDuplicate(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_duplicate(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-duplicate nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_duplicate(Nums :: [integer()]) -> integer().
find_duplicate(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_duplicate(nums :: [integer]) :: integer
  def find_duplicate(nums) do
    
  end
end
```
