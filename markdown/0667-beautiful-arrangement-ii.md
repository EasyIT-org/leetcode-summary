# 667. Beautiful Arrangement II

- Difficulty: Medium
- Topics: Array, Math
- Slug: beautiful-arrangement-ii
- Problem ID: 667

## Description
Given two integers n and k, construct a list answer that contains n different positive integers ranging from 1 to n and obeys the following requirement:
Return the list answer. If there multiple valid answers, return any of them.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, k = 1
Output: [1,2,3]
Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1
```

### Example 2
```text
Input: n = 3, k = 2
Output: [1,3,2]
Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.
```


## Constraints
- 1 <= k < n <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> constructArray(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] constructArray(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def constructArray(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* constructArray(int n, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ConstructArray(int n, int k) {
        
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
var constructArray = function(n, k) {
    
};
```

### typescript
```typescript
function constructArray(n: number, k: number): number[] {
    
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
    function constructArray($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func constructArray(_ n: Int, _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun constructArray(n: Int, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> constructArray(int n, int k) {
    
  }
}
```

### golang
```golang
func constructArray(n int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {Integer[]}
def construct_array(n, k)
    
end
```

### scala
```scala
object Solution {
    def constructArray(n: Int, k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn construct_array(n: i32, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (construct-array n k)
  (-> exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec construct_array(N :: integer(), K :: integer()) -> [integer()].
construct_array(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec construct_array(n :: integer, k :: integer) :: [integer]
  def construct_array(n, k) do
    
  end
end
```
