# 740. Delete and Earn

- Difficulty: Medium
- Topics: Array, Hash Table, Dynamic Programming
- Slug: delete-and-earn
- Problem ID: 740

## Description
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
Return the maximum number of points you can earn by applying the above operation some number of times.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
```

### Example 2
```text
Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
```


## Constraints
- 1 <= nums.length <= 2 * 104
- 1 <= nums[i] <= 104

## Hints
- If you take a number, you might as well take them all.  Keep track of what the value is of the subset of the input with maximum M when you either take or don't take M.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int deleteAndEarn(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def deleteAndEarn(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
```

### c
```c
int deleteAndEarn(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int DeleteAndEarn(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
};
```

### typescript
```typescript
function deleteAndEarn(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function deleteAndEarn($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func deleteAndEarn(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun deleteAndEarn(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int deleteAndEarn(List<int> nums) {
    
  }
}
```

### golang
```golang
func deleteAndEarn(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def delete_and_earn(nums)
    
end
```

### scala
```scala
object Solution {
    def deleteAndEarn(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn delete_and_earn(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (delete-and-earn nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec delete_and_earn(Nums :: [integer()]) -> integer().
delete_and_earn(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec delete_and_earn(nums :: [integer]) :: integer
  def delete_and_earn(nums) do
    
  end
end
```
