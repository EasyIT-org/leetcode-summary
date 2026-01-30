# 330. Patching Array

- Difficulty: Hard
- Topics: Array, Greedy
- Slug: patching-array
- Problem ID: 330

## Description
Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.
Return the minimum number of patches required.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3], n = 6
Output: 1
Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.
```

### Example 2
```text
Input: nums = [1,5,10], n = 20
Output: 2
Explanation: The two patches can be [2, 4].
```

### Example 3
```text
Input: nums = [1,2,2], n = 5
Output: 0
```


## Constraints
- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 104
- nums is sorted in ascending order.
- 1 <= n <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int minPatches(int[] nums, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def minPatches(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
```

### c
```c
int minPatches(int* nums, int numsSize, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinPatches(int[] nums, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    
};
```

### typescript
```typescript
function minPatches(nums: number[], n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @return Integer
     */
    function minPatches($nums, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func minPatches(_ nums: [Int], _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minPatches(nums: IntArray, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minPatches(List<int> nums, int n) {
    
  }
}
```

### golang
```golang
func minPatches(nums []int, n int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer}
def min_patches(nums, n)
    
end
```

### scala
```scala
object Solution {
    def minPatches(nums: Array[Int], n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_patches(nums: Vec<i32>, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-patches nums n)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec min_patches(Nums :: [integer()], N :: integer()) -> integer().
min_patches(Nums, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_patches(nums :: [integer], n :: integer) :: integer
  def min_patches(nums, n) do
    
  end
end
```
