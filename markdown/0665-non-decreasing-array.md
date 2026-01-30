# 665. Non-decreasing Array

- Difficulty: Medium
- Topics: Array
- Slug: non-decreasing-array
- Problem ID: 665

## Description
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
```

### Example 2
```text
Input: nums = [4,2,1]
Output: false
Explanation: You cannot get a non-decreasing array by modifying at most one element.
```


## Constraints
- n == nums.length
- 1 <= n <= 104
- -105 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean checkPossibility(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
```

### c
```c
bool checkPossibility(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CheckPossibility(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
};
```

### typescript
```typescript
function checkPossibility(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function checkPossibility($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkPossibility(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkPossibility(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool checkPossibility(List<int> nums) {
    
  }
}
```

### golang
```golang
func checkPossibility(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def check_possibility(nums)
    
end
```

### scala
```scala
object Solution {
    def checkPossibility(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_possibility(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (check-possibility nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec check_possibility(Nums :: [integer()]) -> boolean().
check_possibility(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_possibility(nums :: [integer]) :: boolean
  def check_possibility(nums) do
    
  end
end
```
