# 457. Circular Array Loop

- Difficulty: Medium
- Topics: Array, Hash Table, Two Pointers
- Slug: circular-array-loop
- Problem ID: 457

## Description
You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:
Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element.
A cycle in the array consists of a sequence of indices seq of length k where:
Return true if there is a cycle in nums, or false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you solve it in O(n) time complexity and O(1) extra space complexity?

## Examples
### Example 1
```text
Input: nums = [2,-1,1,2,2]
Output: true
Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
We can see the cycle 0 --> 2 --> 3 --> 0 --> ..., and all of its nodes are white (jumping in the same direction).
```
Images:
- https://assets.leetcode.com/uploads/2022/09/01/img1.jpg

### Example 2
```text
Input: nums = [-1,-2,-3,-4,-5,6]
Output: false
Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
The only cycle is of size 1, so we return false.
```
Images:
- https://assets.leetcode.com/uploads/2022/09/01/img2.jpg

### Example 3
```text
Input: nums = [1,-1,5,1,4]
Output: true
Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
We can see the cycle 0 --> 1 --> 0 --> ..., and while it is of size > 1, it has a node jumping forward and a node jumping backward, so it is not a cycle.
We can see the cycle 3 --> 4 --> 3 --> ..., and all of its nodes are white (jumping in the same direction).
```
Images:
- https://assets.leetcode.com/uploads/2022/09/01/img3.jpg


## Constraints
- 1 <= nums.length <= 5000
- -1000 <= nums[i] <= 1000
- nums[i] != 0

## Hints
(none)

## Follow Ups
- Could you solve it in O(n) time complexity and O(1) extra space complexity?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool circularArrayLoop(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean circularArrayLoop(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def circularArrayLoop(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def circularArrayLoop(self, nums: List[int]) -> bool:
```

### c
```c
bool circularArrayLoop(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CircularArrayLoop(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    
};
```

### typescript
```typescript
function circularArrayLoop(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function circularArrayLoop($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func circularArrayLoop(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun circularArrayLoop(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool circularArrayLoop(List<int> nums) {
    
  }
}
```

### golang
```golang
func circularArrayLoop(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def circular_array_loop(nums)
    
end
```

### scala
```scala
object Solution {
    def circularArrayLoop(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn circular_array_loop(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (circular-array-loop nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec circular_array_loop(Nums :: [integer()]) -> boolean().
circular_array_loop(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec circular_array_loop(nums :: [integer]) :: boolean
  def circular_array_loop(nums) do
    
  end
end
```
