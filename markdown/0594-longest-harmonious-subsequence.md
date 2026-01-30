# 594. Longest Harmonious Subsequence

- Difficulty: Easy
- Topics: Array, Hash Table, Sliding Window, Sorting, Counting
- Slug: longest-harmonious-subsequence
- Problem ID: 594

## Description
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation:
The longest harmonious subsequence is [3,2,2,2,3] .
```

### Example 2
```text
Input: nums = [1,2,3,4]
Output: 2
Explanation:
The longest harmonious subsequences are [1,2] , [2,3] , and [3,4] , all of which have a length of 2.
```

### Example 3
```text
Input: nums = [1,1,1,1]
Output: 0
Explanation:
No harmonic subsequence exists.
```


## Constraints
- 1 <= nums.length <= 2 * 104
- -109 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findLHS(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findLHS(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLHS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLHS(self, nums: List[int]) -> int:
```

### c
```c
int findLHS(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLHS(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    
};
```

### typescript
```typescript
function findLHS(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findLHS($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLHS(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLHS(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLHS(List<int> nums) {
    
  }
}
```

### golang
```golang
func findLHS(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_lhs(nums)
    
end
```

### scala
```scala
object Solution {
    def findLHS(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-lhs nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_lhs(Nums :: [integer()]) -> integer().
find_lhs(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_lhs(nums :: [integer]) :: integer
  def find_lhs(nums) do
    
  end
end
```
