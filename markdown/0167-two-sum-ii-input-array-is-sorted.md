# 167. Two Sum II - Input Array Is Sorted

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search
- Slug: two-sum-ii-input-array-is-sorted
- Problem ID: 167

## Description
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

### Example 2
```text
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

### Example 3
```text
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```


## Constraints
- 2 <= numbers.length <= 3 * 104
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order.
- -1000 <= target <= 1000
- The tests are generated such that there is exactly one solution.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
};
```

### typescript
```typescript
function twoSum(numbers: number[], target: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $numbers
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($numbers, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun twoSum(numbers: IntArray, target: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> twoSum(List<int> numbers, int target) {
    
  }
}
```

### golang
```golang
func twoSum(numbers []int, target int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
    
end
```

### scala
```scala
object Solution {
    def twoSum(numbers: Array[Int], target: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (two-sum numbers target)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec two_sum(Numbers :: [integer()], Target :: integer()) -> [integer()].
two_sum(Numbers, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec two_sum(numbers :: [integer], target :: integer) :: [integer]
  def two_sum(numbers, target) do
    
  end
end
```
