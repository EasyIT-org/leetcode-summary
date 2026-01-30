# 525. Contiguous Array

- Difficulty: Medium
- Topics: Array, Hash Table, Prefix Sum
- Slug: contiguous-array
- Problem ID: 525

## Description
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
```

### Example 2
```text
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

### Example 3
```text
Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
```


## Constraints
- 1 <= nums.length <= 105
- nums[i] is either 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findMaxLength(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
```

### c
```c
int findMaxLength(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMaxLength(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    
};
```

### typescript
```typescript
function findMaxLength(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxLength($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMaxLength(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMaxLength(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMaxLength(List<int> nums) {
    
  }
}
```

### golang
```golang
func findMaxLength(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_max_length(nums)
    
end
```

### scala
```scala
object Solution {
    def findMaxLength(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_max_length(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-max-length nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_max_length(Nums :: [integer()]) -> integer().
find_max_length(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_max_length(nums :: [integer]) :: integer
  def find_max_length(nums) do
    
  end
end
```
