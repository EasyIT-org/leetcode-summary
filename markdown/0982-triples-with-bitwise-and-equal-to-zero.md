# 982. Triples with Bitwise AND Equal To Zero

- Difficulty: Hard
- Topics: Array, Hash Table, Bit Manipulation
- Slug: triples-with-bitwise-and-equal-to-zero
- Problem ID: 1024

## Description
Given an integer array nums, return the number of AND triples.
An AND triple is a triple of indices (i, j, k) such that:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,1,3]
Output: 12
Explanation: We could choose the following i, j, k triples:
(i=0, j=0, k=1) : 2 & 2 & 1
(i=0, j=1, k=0) : 2 & 1 & 2
(i=0, j=1, k=1) : 2 & 1 & 1
(i=0, j=1, k=2) : 2 & 1 & 3
(i=0, j=2, k=1) : 2 & 3 & 1
(i=1, j=0, k=0) : 1 & 2 & 2
(i=1, j=0, k=1) : 1 & 2 & 1
(i=1, j=0, k=2) : 1 & 2 & 3
(i=1, j=1, k=0) : 1 & 1 & 2
(i=1, j=2, k=0) : 1 & 3 & 2
(i=2, j=0, k=1) : 3 & 2 & 1
(i=2, j=1, k=0) : 3 & 1 & 2
```

### Example 2
```text
Input: nums = [0,0,0]
Output: 27
```


## Constraints
- 1 <= nums.length <= 1000
- 0 <= nums[i] < 216

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countTriplets(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int countTriplets(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def countTriplets(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countTriplets(self, nums: List[int]) -> int:
```

### c
```c
int countTriplets(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountTriplets(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
    
};
```

### typescript
```typescript
function countTriplets(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countTriplets($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func countTriplets(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countTriplets(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countTriplets(List<int> nums) {
    
  }
}
```

### golang
```golang
func countTriplets(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def count_triplets(nums)
    
end
```

### scala
```scala
object Solution {
    def countTriplets(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_triplets(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-triplets nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec count_triplets(Nums :: [integer()]) -> integer().
count_triplets(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_triplets(nums :: [integer]) :: integer
  def count_triplets(nums) do
    
  end
end
```
