# 41. First Missing Positive

- Difficulty: Hard
- Topics: Array, Hash Table
- Slug: first-missing-positive
- Problem ID: 41

## Description
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
```

### Example 2
```text
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
```

### Example 3
```text
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```


## Constraints
- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1

## Hints
- Think about how you would solve the problem in non-constant space.  Can you apply that logic to the existing space?
- We don't care about duplicates or non-positive integers
- Remember that O(2n) = O(n)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
```

### c
```c
int firstMissingPositive(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FirstMissingPositive(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
};
```

### typescript
```typescript
function firstMissingPositive(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function firstMissingPositive($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func firstMissingPositive(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun firstMissingPositive(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int firstMissingPositive(List<int> nums) {
    
  }
}
```

### golang
```golang
func firstMissingPositive(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    
end
```

### scala
```scala
object Solution {
    def firstMissingPositive(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn first_missing_positive(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (first-missing-positive nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec first_missing_positive(Nums :: [integer()]) -> integer().
first_missing_positive(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec first_missing_positive(nums :: [integer]) :: integer
  def first_missing_positive(nums) do
    
  end
end
```
