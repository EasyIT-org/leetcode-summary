# 961. N-Repeated Element in Size 2N Array

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: n-repeated-element-in-size-2n-array
- Problem ID: 1001

## Description
You are given an integer array nums with the following properties:
Return the element that is repeated n times.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,3]
Output: 3
```

### Example 2
```text
Input: nums = [2,1,2,5,3,2]
Output: 2
```

### Example 3
```text
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
```


## Constraints
- 2 <= n <= 5000
- nums.length == 2 * n
- 0 <= nums[i] <= 104
- nums contains n + 1 unique elements and one of them is repeated exactly n times.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int repeatedNTimes(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def repeatedNTimes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
```

### c
```c
int repeatedNTimes(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RepeatedNTimes(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
};
```

### typescript
```typescript
function repeatedNTimes(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function repeatedNTimes($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func repeatedNTimes(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun repeatedNTimes(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int repeatedNTimes(List<int> nums) {
    
  }
}
```

### golang
```golang
func repeatedNTimes(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def repeated_n_times(nums)
    
end
```

### scala
```scala
object Solution {
    def repeatedNTimes(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn repeated_n_times(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (repeated-n-times nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec repeated_n_times(Nums :: [integer()]) -> integer().
repeated_n_times(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec repeated_n_times(nums :: [integer]) :: integer
  def repeated_n_times(nums) do
    
  end
end
```
