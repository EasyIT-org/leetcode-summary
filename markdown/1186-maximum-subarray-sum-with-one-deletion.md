# 1186. Maximum Subarray Sum with One Deletion

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: maximum-subarray-sum-with-one-deletion
- Problem ID: 1288

## Description
Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.
Note that the subarray needs to be non-empty after deleting one element.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
```

### Example 2
```text
Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.
```

### Example 3
```text
Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.
```


## Constraints
- 1 <= arr.length <= 105
- -104 <= arr[i] <= 104

## Hints
- How to solve this problem if no deletions are allowed ?
- Try deleting each element and find the maximum subarray sum to both sides of that element.
- To do that efficiently, use the idea of Kadane's algorithm.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maximumSum(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int maximumSum(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def maximumSum(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maximumSum(self, arr: List[int]) -> int:
```

### c
```c
int maximumSum(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaximumSum(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    
};
```

### typescript
```typescript
function maximumSum(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function maximumSum($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func maximumSum(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maximumSum(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maximumSum(List<int> arr) {
    
  }
}
```

### golang
```golang
func maximumSum(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def maximum_sum(arr)
    
end
```

### scala
```scala
object Solution {
    def maximumSum(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn maximum_sum(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (maximum-sum arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec maximum_sum(Arr :: [integer()]) -> integer().
maximum_sum(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec maximum_sum(arr :: [integer]) :: integer
  def maximum_sum(arr) do
    
  end
end
```
