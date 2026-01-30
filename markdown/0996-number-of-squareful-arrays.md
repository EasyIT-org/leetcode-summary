# 996. Number of Squareful Arrays

- Difficulty: Hard
- Topics: Array, Hash Table, Math, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask
- Slug: number-of-squareful-arrays
- Problem ID: 1038

## Description
An array is squareful if the sum of every pair of adjacent elements is a perfect square.
Given an integer array nums, return the number of permutations of nums that are squareful.
Two permutations perm1 and perm2 are different if there is some index i such that perm1[i] != perm2[i].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,17,8]
Output: 2
Explanation: [1,8,17] and [17,8,1] are the valid permutations.
```

### Example 2
```text
Input: nums = [2,2,2]
Output: 1
```


## Constraints
- 1 <= nums.length <= 12
- 0 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSquarefulPerms(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int numSquarefulPerms(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSquarefulPerms(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSquarefulPerms(self, nums: List[int]) -> int:
```

### c
```c
int numSquarefulPerms(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSquarefulPerms(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function(nums) {
    
};
```

### typescript
```typescript
function numSquarefulPerms(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function numSquarefulPerms($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSquarefulPerms(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSquarefulPerms(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSquarefulPerms(List<int> nums) {
    
  }
}
```

### golang
```golang
func numSquarefulPerms(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def num_squareful_perms(nums)
    
end
```

### scala
```scala
object Solution {
    def numSquarefulPerms(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_squareful_perms(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-squareful-perms nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_squareful_perms(Nums :: [integer()]) -> integer().
num_squareful_perms(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_squareful_perms(nums :: [integer]) :: integer
  def num_squareful_perms(nums) do
    
  end
end
```
