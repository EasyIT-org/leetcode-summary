# 873. Length of Longest Fibonacci Subsequence

- Difficulty: Medium
- Topics: Array, Hash Table, Dynamic Programming
- Slug: length-of-longest-fibonacci-subsequence
- Problem ID: 905

## Description
A sequence x1, x2, ..., xn is Fibonacci-like if:
Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.
A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
```

### Example 2
```text
Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].
```


## Constraints
- 3 <= arr.length <= 1000
- 1 <= arr[i] < arr[i + 1] <= 109

## Hints
- Can we use dynamic programming here?
- Consider a sequence ending at index <code>i</code. The previous two elements must sum to <code>arr[i]</code>, which can be done in linear time per element.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int lenLongestFibSubseq(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def lenLongestFibSubseq(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
```

### c
```c
int lenLongestFibSubseq(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LenLongestFibSubseq(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    
};
```

### typescript
```typescript
function lenLongestFibSubseq(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function lenLongestFibSubseq($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func lenLongestFibSubseq(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lenLongestFibSubseq(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lenLongestFibSubseq(List<int> arr) {
    
  }
}
```

### golang
```golang
func lenLongestFibSubseq(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def len_longest_fib_subseq(arr)
    
end
```

### scala
```scala
object Solution {
    def lenLongestFibSubseq(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn len_longest_fib_subseq(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (len-longest-fib-subseq arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec len_longest_fib_subseq(Arr :: [integer()]) -> integer().
len_longest_fib_subseq(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec len_longest_fib_subseq(arr :: [integer]) :: integer
  def len_longest_fib_subseq(arr) do
    
  end
end
```
