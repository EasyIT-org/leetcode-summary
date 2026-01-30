# 477. Total Hamming Distance

- Difficulty: Medium
- Topics: Array, Math, Bit Manipulation
- Slug: total-hamming-distance
- Problem ID: 477

## Description
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
```

### Example 2
```text
Input: nums = [4,14,4]
Output: 4
```


## Constraints
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 109
- The answer for the given input will fit in a 32-bit integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int totalHammingDistance(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int totalHammingDistance(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def totalHammingDistance(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
```

### c
```c
int totalHammingDistance(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TotalHammingDistance(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    
};
```

### typescript
```typescript
function totalHammingDistance(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function totalHammingDistance($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func totalHammingDistance(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun totalHammingDistance(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int totalHammingDistance(List<int> nums) {
    
  }
}
```

### golang
```golang
func totalHammingDistance(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def total_hamming_distance(nums)
    
end
```

### scala
```scala
object Solution {
    def totalHammingDistance(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn total_hamming_distance(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (total-hamming-distance nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec total_hamming_distance(Nums :: [integer()]) -> integer().
total_hamming_distance(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec total_hamming_distance(nums :: [integer]) :: integer
  def total_hamming_distance(nums) do
    
  end
end
```
