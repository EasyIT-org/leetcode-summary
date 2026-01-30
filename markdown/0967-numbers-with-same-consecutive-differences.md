# 967. Numbers With Same Consecutive Differences

- Difficulty: Medium
- Topics: Backtracking, Breadth-First Search
- Slug: numbers-with-same-consecutive-differences
- Problem ID: 1007

## Description
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.
Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
```

### Example 2
```text
Input: n = 2, k = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
```


## Constraints
- 2 <= n <= 9
- 0 <= k <= 9

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> numsSameConsecDiff(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] numsSameConsecDiff(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def numsSameConsecDiff(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numsSameConsecDiff(int n, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NumsSameConsecDiff(int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    
};
```

### typescript
```typescript
function numsSameConsecDiff(n: number, k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer[]
     */
    function numsSameConsecDiff($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func numsSameConsecDiff(_ n: Int, _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numsSameConsecDiff(n: Int, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> numsSameConsecDiff(int n, int k) {
    
  }
}
```

### golang
```golang
func numsSameConsecDiff(n int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {Integer[]}
def nums_same_consec_diff(n, k)
    
end
```

### scala
```scala
object Solution {
    def numsSameConsecDiff(n: Int, k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn nums_same_consec_diff(n: i32, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (nums-same-consec-diff n k)
  (-> exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec nums_same_consec_diff(N :: integer(), K :: integer()) -> [integer()].
nums_same_consec_diff(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec nums_same_consec_diff(n :: integer, k :: integer) :: [integer]
  def nums_same_consec_diff(n, k) do
    
  end
end
```
