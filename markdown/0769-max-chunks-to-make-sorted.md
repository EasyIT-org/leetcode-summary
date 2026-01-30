# 769. Max Chunks To Make Sorted

- Difficulty: Medium
- Topics: Array, Stack, Greedy, Sorting, Monotonic Stack
- Slug: max-chunks-to-make-sorted
- Problem ID: 780

## Description
You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].
We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.
Return the largest number of chunks we can make to sort the array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
```

### Example 2
```text
Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
```


## Constraints
- n == arr.length
- 1 <= n <= 10
- 0 <= arr[i] < n
- All the elements of arr are unique.

## Hints
- The first chunk can be found as the smallest k for which A[:k+1] == [0, 1, 2, ...k]; then we repeat this process.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int maxChunksToSorted(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxChunksToSorted(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
```

### c
```c
int maxChunksToSorted(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxChunksToSorted(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    
};
```

### typescript
```typescript
function maxChunksToSorted(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function maxChunksToSorted($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxChunksToSorted(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxChunksToSorted(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxChunksToSorted(List<int> arr) {
    
  }
}
```

### golang
```golang
func maxChunksToSorted(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def max_chunks_to_sorted(arr)
    
end
```

### scala
```scala
object Solution {
    def maxChunksToSorted(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_chunks_to_sorted(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-chunks-to-sorted arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_chunks_to_sorted(Arr :: [integer()]) -> integer().
max_chunks_to_sorted(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_chunks_to_sorted(arr :: [integer]) :: integer
  def max_chunks_to_sorted(arr) do
    
  end
end
```
