# 467. Unique Substrings in Wraparound String

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: unique-substrings-in-wraparound-string
- Problem ID: 467

## Description
We define the string base to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so base will look like this:
Given a string s, return the number of unique non-empty substrings of s are present in base.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "a"
Output: 1
Explanation: Only the substring "a" of s is in base.
```

### Example 2
```text
Input: s = "cac"
Output: 2
Explanation: There are two substrings ("a", "c") of s in base.
```

### Example 3
```text
Input: s = "zab"
Output: 6
Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of s in base.
```


## Constraints
- 1 <= s.length <= 105
- s consists of lowercase English letters.

## Hints
- One possible solution might be to consider allocating an array size of 26 for each character in the alphabet. (Credits to @r2ysxu)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findSubstringInWraproundString(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int findSubstringInWraproundString(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def findSubstringInWraproundString(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
```

### c
```c
int findSubstringInWraproundString(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindSubstringInWraproundString(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    
};
```

### typescript
```typescript
function findSubstringInWraproundString(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function findSubstringInWraproundString($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func findSubstringInWraproundString(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findSubstringInWraproundString(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findSubstringInWraproundString(String s) {
    
  }
}
```

### golang
```golang
func findSubstringInWraproundString(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def find_substring_in_wrapround_string(s)
    
end
```

### scala
```scala
object Solution {
    def findSubstringInWraproundString(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_substring_in_wrapround_string(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-substring-in-wrapround-string s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec find_substring_in_wrapround_string(S :: unicode:unicode_binary()) -> integer().
find_substring_in_wrapround_string(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_substring_in_wrapround_string(s :: String.t) :: integer
  def find_substring_in_wrapround_string(s) do
    
  end
end
```
