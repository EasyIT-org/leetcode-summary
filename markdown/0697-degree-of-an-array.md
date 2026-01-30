# 697. Degree of an Array

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: degree-of-an-array
- Problem ID: 697

## Description
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
```

### Example 2
```text
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
```


## Constraints
- nums.length will be between 1 and 50,000.
- nums[i] will be an integer between 0 and 49,999.

## Hints
- Say 5 is the only element that occurs the most number of times - for example, nums = [1, 5, 2, 3, 5, 4, 5, 6].  What is the answer?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findShortestSubArray(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findShortestSubArray(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findShortestSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
```

### c
```c
int findShortestSubArray(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindShortestSubArray(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    
};
```

### typescript
```typescript
function findShortestSubArray(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findShortestSubArray($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findShortestSubArray(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findShortestSubArray(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findShortestSubArray(List<int> nums) {
    
  }
}
```

### golang
```golang
func findShortestSubArray(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_shortest_sub_array(nums)
    
end
```

### scala
```scala
object Solution {
    def findShortestSubArray(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_shortest_sub_array(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-shortest-sub-array nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_shortest_sub_array(Nums :: [integer()]) -> integer().
find_shortest_sub_array(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_shortest_sub_array(nums :: [integer]) :: integer
  def find_shortest_sub_array(nums) do
    
  end
end
```
