# 704. Binary Search

- Difficulty: Easy
- Topics: Array, Binary Search
- Slug: binary-search
- Problem ID: 792

## Description
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

### Example 2
```text
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```


## Constraints
- 1 <= nums.length <= 104
- -104 < nums[i], target < 104
- All the integers in nums are unique.
- nums is sorted in ascending order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int search(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def search(self, nums: List[int], target: int) -> int:
```

### c
```c
int search(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Search(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
};
```

### typescript
```typescript
function search(nums: number[], target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun search(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int search(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func search(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    
end
```

### scala
```scala
object Solution {
    def search(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (search nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec search(Nums :: [integer()], Target :: integer()) -> integer().
search(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target) do
    
  end
end
```
