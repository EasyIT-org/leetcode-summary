# 1130. Minimum Cost Tree From Leaf Values

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Stack, Greedy, Monotonic Stack
- Slug: minimum-cost-tree-from-leaf-values
- Problem ID: 1228

## Description
Given an array arr of positive integers, consider all binary trees such that:
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.
A node is a leaf if and only if it has zero children.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [6,2,4]
Output: 32
Explanation: There are two possible trees shown.
The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.
```
Images:
- https://assets.leetcode.com/uploads/2021/08/10/tree1.jpg

### Example 2
```text
Input: arr = [4,11]
Output: 44
```
Images:
- https://assets.leetcode.com/uploads/2021/08/10/tree2.jpg


## Constraints
- 2 <= arr.length <= 40
- 1 <= arr[i] <= 15
- It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 231).

## Hints
- Do a DP, where dp(i, j) is the answer for the subarray arr[i]..arr[j].
- For each possible way to partition the subarray i <= k < j, the answer is max(arr[i]..arr[k]) * max(arr[k+1]..arr[j]) + dp(i, k) + dp(k+1, j).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int mctFromLeafValues(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int mctFromLeafValues(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def mctFromLeafValues(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
```

### c
```c
int mctFromLeafValues(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MctFromLeafValues(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    
};
```

### typescript
```typescript
function mctFromLeafValues(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function mctFromLeafValues($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func mctFromLeafValues(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mctFromLeafValues(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int mctFromLeafValues(List<int> arr) {
    
  }
}
```

### golang
```golang
func mctFromLeafValues(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def mct_from_leaf_values(arr)
    
end
```

### scala
```scala
object Solution {
    def mctFromLeafValues(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn mct_from_leaf_values(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (mct-from-leaf-values arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec mct_from_leaf_values(Arr :: [integer()]) -> integer().
mct_from_leaf_values(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec mct_from_leaf_values(arr :: [integer]) :: integer
  def mct_from_leaf_values(arr) do
    
  end
end
```
