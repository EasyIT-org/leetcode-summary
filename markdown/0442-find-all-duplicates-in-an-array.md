# 442. Find All Duplicates in an Array

- Difficulty: Medium
- Topics: Array, Hash Table
- Slug: find-all-duplicates-in-an-array
- Problem ID: 442

## Description
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.
You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
```

### Example 2
```text
Input: nums = [1,1,2]
Output: [1]
```

### Example 3
```text
Input: nums = [1]
Output: []
```


## Constraints
- n == nums.length
- 1 <= n <= 105
- 1 <= nums[i] <= n
- Each element in nums appears once or twice.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindDuplicates(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
};
```

### typescript
```typescript
function findDuplicates(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDuplicates($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findDuplicates(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findDuplicates(nums: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findDuplicates(List<int> nums) {
    
  }
}
```

### golang
```golang
func findDuplicates(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def find_duplicates(nums)
    
end
```

### scala
```scala
object Solution {
    def findDuplicates(nums: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_duplicates(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-duplicates nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_duplicates(Nums :: [integer()]) -> [integer()].
find_duplicates(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_duplicates(nums :: [integer]) :: [integer]
  def find_duplicates(nums) do
    
  end
end
```
