# 28. Find the Index of the First Occurrence in a String

- Difficulty: Easy
- Topics: Two Pointers, String, String Matching
- Slug: find-the-index-of-the-first-occurrence-in-a-string
- Problem ID: 28

## Description
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

### Example 2
```text
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```


## Constraints
- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        
    }
};
```

### java
```java
class Solution {
    public int strStr(String haystack, String needle) {
        
    }
}
```

### python
```python
class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
```

### c
```c
int strStr(char* haystack, char* needle) {
    
}
```

### csharp
```csharp
public class Solution {
    public int StrStr(string haystack, string needle) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
};
```

### typescript
```typescript
function strStr(haystack: string, needle: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle) {
        
    }
}
```

### swift
```swift
class Solution {
    func strStr(_ haystack: String, _ needle: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun strStr(haystack: String, needle: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int strStr(String haystack, String needle) {
    
  }
}
```

### golang
```golang
func strStr(haystack string, needle string) int {
    
}
```

### ruby
```ruby
# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    
end
```

### scala
```scala
object Solution {
    def strStr(haystack: String, needle: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (str-str haystack needle)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec str_str(Haystack :: unicode:unicode_binary(), Needle :: unicode:unicode_binary()) -> integer().
str_str(Haystack, Needle) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec str_str(haystack :: String.t, needle :: String.t) :: integer
  def str_str(haystack, needle) do
    
  end
end
```
