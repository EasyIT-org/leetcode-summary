# 1144. Decrease Elements To Make Array Zigzag

- Difficulty: Medium
- Topics: Array, Greedy
- Slug: decrease-elements-to-make-array-zigzag
- Problem ID: 1247

## Description
Given an array nums of integers, a move consists of choosing any element and decreasing it by 1.
An array A is a zigzag array if either:
Return the minimum number of moves to transform the given array nums into a zigzag array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.
```

### Example 2
```text
Input: nums = [9,6,1,6,2]
Output: 4
```


## Constraints
- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 1000

## Hints
- Do each case (even indexed is greater, odd indexed is greater) separately. In say the even case, you should decrease each even-indexed element until it is lower than its immediate neighbors.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int movesToMakeZigzag(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int movesToMakeZigzag(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def movesToMakeZigzag(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def movesToMakeZigzag(self, nums: List[int]) -> int:
```

### c
```c
int movesToMakeZigzag(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MovesToMakeZigzag(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    
};
```

### typescript
```typescript
function movesToMakeZigzag(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function movesToMakeZigzag($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func movesToMakeZigzag(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun movesToMakeZigzag(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int movesToMakeZigzag(List<int> nums) {
    
  }
}
```

### golang
```golang
func movesToMakeZigzag(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def moves_to_make_zigzag(nums)
    
end
```

### scala
```scala
object Solution {
    def movesToMakeZigzag(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn moves_to_make_zigzag(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (moves-to-make-zigzag nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec moves_to_make_zigzag(Nums :: [integer()]) -> integer().
moves_to_make_zigzag(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec moves_to_make_zigzag(nums :: [integer]) :: integer
  def moves_to_make_zigzag(nums) do
    
  end
end
```
