# 975. Odd Even Jump

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Stack, Sorting, Monotonic Stack, Ordered Set
- Slug: odd-even-jump
- Problem ID: 1017

## Description
You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices.
You may jump forward from index i to index j (with i < j) in the following way:
A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once).
Return the number of good starting indices.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [10,13,12,14,15]
Output: 2
Explanation: 
From starting index i = 0, we can make our 1st jump to i = 2 (since arr[2] is the smallest among arr[1], arr[2], arr[3], arr[4] that is greater or equal to arr[0]), then we cannot jump any more.
From starting index i = 1 and i = 2, we can make our 1st jump to i = 3, then we cannot jump any more.
From starting index i = 3, we can make our 1st jump to i = 4, so we have reached the end.
From starting index i = 4, we have reached the end already.
In total, there are 2 different starting indices i = 3 and i = 4, where we can reach the end with some number of
jumps.
```

### Example 2
```text
Input: arr = [2,3,1,1,4]
Output: 3
Explanation: 
From starting index i = 0, we make jumps to i = 1, i = 2, i = 3:
During our 1st jump (odd-numbered), we first jump to i = 1 because arr[1] is the smallest value in [arr[1], arr[2], arr[3], arr[4]] that is greater than or equal to arr[0].
During our 2nd jump (even-numbered), we jump from i = 1 to i = 2 because arr[2] is the largest value in [arr[2], arr[3], arr[4]] that is less than or equal to arr[1]. arr[3] is also the largest value, but 2 is a smaller index, so we can only jump to i = 2 and not i = 3
During our 3rd jump (odd-numbered), we jump from i = 2 to i = 3 because arr[3] is the smallest value in [arr[3], arr[4]] that is greater than or equal to arr[2].
We can't jump from i = 3 to i = 4, so the starting index i = 0 is not good.
In a similar manner, we can deduce that:
From starting index i = 1, we jump to i = 4, so we reach the end.
From starting index i = 2, we jump to i = 3, and then we can't jump anymore.
From starting index i = 3, we jump to i = 4, so we reach the end.
From starting index i = 4, we are already at the end.
In total, there are 3 different starting indices i = 1, i = 3, and i = 4, where we can reach the end with some
number of jumps.
```

### Example 3
```text
Input: arr = [5,1,3,4,2]
Output: 3
Explanation: We can reach the end from starting indices 1, 2, and 4.
```


## Constraints
- 1 <= arr.length <= 2 * 104
- 0 <= arr[i] < 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int oddEvenJumps(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int oddEvenJumps(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def oddEvenJumps(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def oddEvenJumps(self, arr: List[int]) -> int:
```

### c
```c
int oddEvenJumps(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int OddEvenJumps(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(arr) {
    
};
```

### typescript
```typescript
function oddEvenJumps(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function oddEvenJumps($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func oddEvenJumps(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun oddEvenJumps(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int oddEvenJumps(List<int> arr) {
    
  }
}
```

### golang
```golang
func oddEvenJumps(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def odd_even_jumps(arr)
    
end
```

### scala
```scala
object Solution {
    def oddEvenJumps(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn odd_even_jumps(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (odd-even-jumps arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec odd_even_jumps(Arr :: [integer()]) -> integer().
odd_even_jumps(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec odd_even_jumps(arr :: [integer]) :: integer
  def odd_even_jumps(arr) do
    
  end
end
```
