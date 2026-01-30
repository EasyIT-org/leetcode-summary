# 448. Find All Numbers Disappeared in an Array

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: find-all-numbers-disappeared-in-an-array
- Problem ID: 448

## Description
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:
Example 2:
Constraints:
Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

## Examples
### Example 1
```text
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

### Example 2
```text
Input: nums = [1,1]
Output: [2]
```


## Constraints
- n == nums.length
- 1 <= n <= 105
- 1 <= nums[i] <= n

## Hints
- This is a really easy problem if you decide to use additional memory. For those trying to write an initial solution using additional memory, think <b>counters!</b>
- However, the trick really is to not use any additional space than what is already available to use. Sometimes, multiple passes over the input array help find the solution. However, there's an interesting piece of information in this problem that makes it easy to re-use the input array itself for the solution.
- The problem specifies that the numbers in the array will be in the range [1, n] where n is the number of elements in the array. Can we use this information and modify the array in-place somehow to find what we need?

## Follow Ups
- Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDisappearedNumbers(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
};
```

### typescript
```typescript
function findDisappearedNumbers(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findDisappearedNumbers(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findDisappearedNumbers(nums: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findDisappearedNumbers(List<int> nums) {
    
  }
}
```

### golang
```golang
func findDisappearedNumbers(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def find_disappeared_numbers(nums)
    
end
```

### scala
```scala
object Solution {
    def findDisappearedNumbers(nums: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-disappeared-numbers nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_disappeared_numbers(Nums :: [integer()]) -> [integer()].
find_disappeared_numbers(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_disappeared_numbers(nums :: [integer]) :: [integer]
  def find_disappeared_numbers(nums) do
    
  end
end
```
