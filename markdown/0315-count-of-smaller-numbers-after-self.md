# 315. Count of Smaller Numbers After Self

- Difficulty: Hard
- Topics: Array, Binary Search, Divide and Conquer, Binary Indexed Tree, Segment Tree, Merge Sort, Ordered Set
- Slug: count-of-smaller-numbers-after-self
- Problem ID: 315

## Description
Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```

### Example 2
```text
Input: nums = [-1]
Output: [0]
```

### Example 3
```text
Input: nums = [-1,-1]
Output: [0,0]
```


## Constraints
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> countSmaller(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def countSmaller(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* countSmaller(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> CountSmaller(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    
};
```

### typescript
```typescript
function countSmaller(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function countSmaller($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func countSmaller(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countSmaller(nums: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> countSmaller(List<int> nums) {
    
  }
}
```

### golang
```golang
func countSmaller(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def count_smaller(nums)
    
end
```

### scala
```scala
object Solution {
    def countSmaller(nums: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (count-smaller nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec count_smaller(Nums :: [integer()]) -> [integer()].
count_smaller(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_smaller(nums :: [integer]) :: [integer]
  def count_smaller(nums) do
    
  end
end
```
