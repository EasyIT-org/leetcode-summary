# 540. Single Element in a Sorted Array

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: single-element-in-a-sorted-array
- Problem ID: 540

## Description
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

### Example 2
```text
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int singleNonDuplicate(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def singleNonDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
```

### c
```c
int singleNonDuplicate(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SingleNonDuplicate(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
};
```

### typescript
```typescript
function singleNonDuplicate(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNonDuplicate($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func singleNonDuplicate(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun singleNonDuplicate(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int singleNonDuplicate(List<int> nums) {
    
  }
}
```

### golang
```golang
func singleNonDuplicate(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def single_non_duplicate(nums)
    
end
```

### scala
```scala
object Solution {
    def singleNonDuplicate(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (single-non-duplicate nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec single_non_duplicate(Nums :: [integer()]) -> integer().
single_non_duplicate(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec single_non_duplicate(nums :: [integer]) :: integer
  def single_non_duplicate(nums) do
    
  end
end
```
