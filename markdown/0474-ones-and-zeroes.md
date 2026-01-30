# 474. Ones and Zeroes

- Difficulty: Medium
- Topics: Array, String, Dynamic Programming
- Slug: ones-and-zeroes
- Problem ID: 474

## Description
You are given an array of binary strings strs and two integers m and n.
Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.
A set x is a subset of a set y if all elements of x are also elements of y.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
```

### Example 2
```text
Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
```


## Constraints
- 1 <= strs.length <= 600
- 1 <= strs[i].length <= 100
- strs[i] consists only of digits '0' and '1'.
- 1 <= m, n <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMaxForm(vector<string>& strs, int m, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMaxForm(self, strs, m, n):
        """
        :type strs: List[str]
        :type m: int
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
```

### c
```c
int findMaxForm(char** strs, int strsSize, int m, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMaxForm(string[] strs, int m, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    
};
```

### typescript
```typescript
function findMaxForm(strs: string[], m: number, n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @param Integer $m
     * @param Integer $n
     * @return Integer
     */
    function findMaxForm($strs, $m, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMaxForm(_ strs: [String], _ m: Int, _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMaxForm(strs: Array<String>, m: Int, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMaxForm(List<String> strs, int m, int n) {
    
  }
}
```

### golang
```golang
func findMaxForm(strs []string, m int, n int) int {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def find_max_form(strs, m, n)
    
end
```

### scala
```scala
object Solution {
    def findMaxForm(strs: Array[String], m: Int, n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_max_form(strs: Vec<String>, m: i32, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-max-form strs m n)
  (-> (listof string?) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_max_form(Strs :: [unicode:unicode_binary()], M :: integer(), N :: integer()) -> integer().
find_max_form(Strs, M, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_max_form(strs :: [String.t], m :: integer, n :: integer) :: integer
  def find_max_form(strs, m, n) do
    
  end
end
```
