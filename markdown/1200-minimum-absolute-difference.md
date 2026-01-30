# 1200. Minimum Absolute Difference

- Difficulty: Easy
- Topics: Array, Sorting
- Slug: minimum-absolute-difference
- Problem ID: 1306

## Description
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
```

### Example 2
```text
Input: arr = [1,3,6,10,15]
Output: [[1,3]]
```

### Example 3
```text
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
```


## Constraints
- 2 <= arr.length <= 105
- -106 <= arr[i] <= 106

## Hints
- Find the minimum absolute difference between two elements in the array.
- The minimum absolute difference must be a difference between two consecutive elements in the sorted array.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def minimumAbsDifference(self, arr):
        """
        :type arr: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** minimumAbsDifference(int* arr, int arrSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> MinimumAbsDifference(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
};
```

### typescript
```typescript
function minimumAbsDifference(arr: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> minimumAbsDifference(List<int> arr) {
    
  }
}
```

### golang
```golang
func minimumAbsDifference(arr []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer[][]}
def minimum_abs_difference(arr)
    
end
```

### scala
```scala
object Solution {
    def minimumAbsDifference(arr: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn minimum_abs_difference(arr: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (minimum-abs-difference arr)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec minimum_abs_difference(Arr :: [integer()]) -> [[integer()]].
minimum_abs_difference(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec minimum_abs_difference(arr :: [integer]) :: [[integer]]
  def minimum_abs_difference(arr) do
    
  end
end
```
