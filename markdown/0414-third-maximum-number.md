# 414. Third Maximum Number

- Difficulty: Easy
- Topics: Array, Sorting
- Slug: third-maximum-number
- Problem ID: 414

## Description
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
```

### Example 2
```text
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
```

### Example 3
```text
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
```


## Constraints
- 1 <= nums.length <= 104
- -231 <= nums[i] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int thirdMax(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
```

### c
```c
int thirdMax(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ThirdMax(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
};
```

### typescript
```typescript
function thirdMax(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function thirdMax($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func thirdMax(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun thirdMax(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int thirdMax(List<int> nums) {
    
  }
}
```

### golang
```golang
func thirdMax(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def third_max(nums)
    
end
```

### scala
```scala
object Solution {
    def thirdMax(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn third_max(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (third-max nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec third_max(Nums :: [integer()]) -> integer().
third_max(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec third_max(nums :: [integer]) :: integer
  def third_max(nums) do
    
  end
end
```
