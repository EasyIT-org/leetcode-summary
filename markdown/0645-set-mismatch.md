# 645. Set Mismatch

- Difficulty: Easy
- Topics: Array, Hash Table, Bit Manipulation, Sorting
- Slug: set-mismatch
- Problem ID: 645

## Description
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
You are given an integer array nums representing the data status of this set after the error.
Find the number that occurs twice and the number that is missing and return them in the form of an array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,2,4]
Output: [2,3]
```

### Example 2
```text
Input: nums = [1,1]
Output: [1,2]
```


## Constraints
- 2 <= nums.length <= 104
- 1 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] findErrorNums(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findErrorNums(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] FindErrorNums(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
};
```

### typescript
```typescript
function findErrorNums(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findErrorNums($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findErrorNums(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findErrorNums(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findErrorNums(List<int> nums) {
    
  }
}
```

### golang
```golang
func findErrorNums(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def find_error_nums(nums)
    
end
```

### scala
```scala
object Solution {
    def findErrorNums(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-error-nums nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_error_nums(Nums :: [integer()]) -> [integer()].
find_error_nums(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_error_nums(nums :: [integer]) :: [integer]
  def find_error_nums(nums) do
    
  end
end
```
