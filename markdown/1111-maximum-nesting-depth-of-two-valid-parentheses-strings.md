# 1111. Maximum Nesting Depth of Two Valid Parentheses Strings

- Difficulty: Medium
- Topics: String, Stack
- Slug: maximum-nesting-depth-of-two-valid-parentheses-strings
- Problem ID: 1208

## Description
A string is a valid parentheses string (denoted VPS) if and only if it consists of "(" and ")" characters only, and:
We can similarly define the nesting depth depth(S) of any VPS S as follows:
For example,  "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
Given a VPS seq, split it into two disjoint subsequences A and B, such that A and B are VPS's (and A.length + B.length = seq.length).
Now choose any such A and B such that max(depth(A), depth(B)) is the minimum possible value.
Return an answer array (of length seq.length) that encodes such a choice of A and B:  answer[i] = 0 if seq[i] is part of A, else answer[i] = 1.  Note that even though multiple answers may exist, you may return any of them.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: seq = "(()())"
Output: [0,1,1,1,1,0]
```

### Example 2
```text
Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]
```


## Constraints
- 1 <= seq.size <= 10000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq) {
        
    }
};
```

### java
```java
class Solution {
    public int[] maxDepthAfterSplit(String seq) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxDepthAfterSplit(self, seq):
        """
        :type seq: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def maxDepthAfterSplit(self, seq: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxDepthAfterSplit(char* seq, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] MaxDepthAfterSplit(string seq) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    
};
```

### typescript
```typescript
function maxDepthAfterSplit(seq: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $seq
     * @return Integer[]
     */
    function maxDepthAfterSplit($seq) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxDepthAfterSplit(_ seq: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxDepthAfterSplit(seq: String): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> maxDepthAfterSplit(String seq) {
    
  }
}
```

### golang
```golang
func maxDepthAfterSplit(seq string) []int {
    
}
```

### ruby
```ruby
# @param {String} seq
# @return {Integer[]}
def max_depth_after_split(seq)
    
end
```

### scala
```scala
object Solution {
    def maxDepthAfterSplit(seq: String): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_depth_after_split(seq: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (max-depth-after-split seq)
  (-> string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec max_depth_after_split(Seq :: unicode:unicode_binary()) -> [integer()].
max_depth_after_split(Seq) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_depth_after_split(seq :: String.t) :: [integer]
  def max_depth_after_split(seq) do
    
  end
end
```
