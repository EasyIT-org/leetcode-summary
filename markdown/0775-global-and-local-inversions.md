# 775. Global and Local Inversions

- Difficulty: Medium
- Topics: Array, Math
- Slug: global-and-local-inversions
- Problem ID: 790

## Description
You are given an integer array nums of length n which represents a permutation of all the integers in the range [0, n - 1].
The number of global inversions is the number of the different pairs (i, j) where:
The number of local inversions is the number of indices i where:
Return true if the number of global inversions is equal to the number of local inversions.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,0,2]
Output: true
Explanation: There is 1 global inversion and 1 local inversion.
```

### Example 2
```text
Input: nums = [1,2,0]
Output: false
Explanation: There are 2 global inversions and 1 local inversion.
```


## Constraints
- n == nums.length
- 1 <= n <= 105
- 0 <= nums[i] < n
- All the integers of nums are unique.
- nums is a permutation of all the numbers in the range [0, n - 1].

## Hints
- Where can the 0 be placed in an ideal permutation?  What about the 1?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isIdealPermutation(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isIdealPermutation(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def isIdealPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isIdealPermutation(self, nums: List[int]) -> bool:
```

### c
```c
bool isIdealPermutation(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsIdealPermutation(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    
};
```

### typescript
```typescript
function isIdealPermutation(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isIdealPermutation($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func isIdealPermutation(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isIdealPermutation(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isIdealPermutation(List<int> nums) {
    
  }
}
```

### golang
```golang
func isIdealPermutation(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def is_ideal_permutation(nums)
    
end
```

### scala
```scala
object Solution {
    def isIdealPermutation(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_ideal_permutation(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-ideal-permutation nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_ideal_permutation(Nums :: [integer()]) -> boolean().
is_ideal_permutation(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_ideal_permutation(nums :: [integer]) :: boolean
  def is_ideal_permutation(nums) do
    
  end
end
```
