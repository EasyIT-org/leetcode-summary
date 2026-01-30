# 823. Binary Trees With Factors

- Difficulty: Medium
- Topics: Array, Hash Table, Dynamic Programming, Sorting
- Slug: binary-trees-with-factors
- Problem ID: 843

## Description
Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.
We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.
Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
```

### Example 2
```text
Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
```


## Constraints
- 1 <= arr.length <= 1000
- 2 <= arr[i] <= 109
- All the values of arr are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numFactoredBinaryTrees(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int numFactoredBinaryTrees(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def numFactoredBinaryTrees(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
```

### c
```c
int numFactoredBinaryTrees(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumFactoredBinaryTrees(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    
};
```

### typescript
```typescript
function numFactoredBinaryTrees(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function numFactoredBinaryTrees($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func numFactoredBinaryTrees(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numFactoredBinaryTrees(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numFactoredBinaryTrees(List<int> arr) {
    
  }
}
```

### golang
```golang
func numFactoredBinaryTrees(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def num_factored_binary_trees(arr)
    
end
```

### scala
```scala
object Solution {
    def numFactoredBinaryTrees(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_factored_binary_trees(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-factored-binary-trees arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_factored_binary_trees(Arr :: [integer()]) -> integer().
num_factored_binary_trees(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_factored_binary_trees(arr :: [integer]) :: integer
  def num_factored_binary_trees(arr) do
    
  end
end
```
