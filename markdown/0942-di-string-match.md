# 942. DI String Match

- Difficulty: Easy
- Topics: Array, Two Pointers, String, Greedy
- Slug: di-string-match
- Problem ID: 979

## Description
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "IDID"
Output: [0,4,1,3,2]
```

### Example 2
```text
Input: s = "III"
Output: [0,1,2,3]
```

### Example 3
```text
Input: s = "DDI"
Output: [3,2,0,1]
```


## Constraints
- 1 <= s.length <= 105
- s[i] is either 'I' or 'D'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> diStringMatch(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int[] diStringMatch(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def diStringMatch(self, s):
        """
        :type s: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def diStringMatch(self, s: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* diStringMatch(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] DiStringMatch(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    
};
```

### typescript
```typescript
function diStringMatch(s: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer[]
     */
    function diStringMatch($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func diStringMatch(_ s: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun diStringMatch(s: String): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> diStringMatch(String s) {
    
  }
}
```

### golang
```golang
func diStringMatch(s string) []int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer[]}
def di_string_match(s)
    
end
```

### scala
```scala
object Solution {
    def diStringMatch(s: String): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn di_string_match(s: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (di-string-match s)
  (-> string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec di_string_match(S :: unicode:unicode_binary()) -> [integer()].
di_string_match(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec di_string_match(s :: String.t) :: [integer]
  def di_string_match(s) do
    
  end
end
```
