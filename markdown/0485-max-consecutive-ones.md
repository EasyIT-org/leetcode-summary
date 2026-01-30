# 485. Max Consecutive Ones

- Difficulty: Easy
- Topics: Array
- Slug: max-consecutive-ones
- Problem ID: 485

## Description
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

### Example 2
```text
Input: nums = [1,0,1,1,0,1]
Output: 2
```


## Constraints
- 1 <= nums.length <= 105
- nums[i] is either 0 or 1.

## Hints
- You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window.

How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
```

### c
```c
int findMaxConsecutiveOnes(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
};
```

### typescript
```typescript
function findMaxConsecutiveOnes(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMaxConsecutiveOnes(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMaxConsecutiveOnes(List<int> nums) {
    
  }
}
```

### golang
```golang
func findMaxConsecutiveOnes(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
    
end
```

### scala
```scala
object Solution {
    def findMaxConsecutiveOnes(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-max-consecutive-ones nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_max_consecutive_ones(Nums :: [integer()]) -> integer().
find_max_consecutive_ones(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_max_consecutive_ones(nums :: [integer]) :: integer
  def find_max_consecutive_ones(nums) do
    
  end
end
```
