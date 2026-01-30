# 521. Longest Uncommon Subsequence I

- Difficulty: Easy
- Topics: String
- Slug: longest-uncommon-subsequence-i
- Problem ID: 521

## Description
Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.
An uncommon subsequence between two strings is a string that is a subsequence of exactly one of them.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: a = "aba", b = "cdc"
Output: 3
Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.
```

### Example 2
```text
Input: a = "aaa", b = "bbb"
Output: 3
Explanation: The longest uncommon subsequences are "aaa" and "bbb".
```

### Example 3
```text
Input: a = "aaa", b = "aaa"
Output: -1
Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.
```


## Constraints
- 1 <= a.length, b.length <= 100
- a and b consist of lower-case English letters.

## Hints
- Think very simple.
- If <code>a == b</code>, the answer is -1.
- Otherwise, the answer is the string <code>a</code> or the string <code>b</code>.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findLUSlength(string a, string b) {
        
    }
};
```

### java
```java
class Solution {
    public int findLUSlength(String a, String b) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLUSlength(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLUSlength(self, a: str, b: str) -> int:
```

### c
```c
int findLUSlength(char* a, char* b) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLUSlength(string a, string b) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    
};
```

### typescript
```typescript
function findLUSlength(a: string, b: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $a
     * @param String $b
     * @return Integer
     */
    function findLUSlength($a, $b) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLUSlength(_ a: String, _ b: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLUSlength(a: String, b: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLUSlength(String a, String b) {
    
  }
}
```

### golang
```golang
func findLUSlength(a string, b string) int {
    
}
```

### ruby
```ruby
# @param {String} a
# @param {String} b
# @return {Integer}
def find_lu_slength(a, b)
    
end
```

### scala
```scala
object Solution {
    def findLUSlength(a: String, b: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_lu_slength(a: String, b: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-lu-slength a b)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec find_lu_slength(A :: unicode:unicode_binary(), B :: unicode:unicode_binary()) -> integer().
find_lu_slength(A, B) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_lu_slength(a :: String.t, b :: String.t) :: integer
  def find_lu_slength(a, b) do
    
  end
end
```
