# 828. Count Unique Characters of All Substrings of a Given String

- Difficulty: Hard
- Topics: Hash Table, String, Dynamic Programming
- Slug: count-unique-characters-of-all-substrings-of-a-given-string
- Problem ID: 855

## Description
Let's define a function countUniqueChars(s) that returns the number of unique characters in s.
Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.
Notice that some substrings can be repeated so in this case you have to count the repeated ones too.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "ABC"
Output: 10
Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
```

### Example 2
```text
Input: s = "ABA"
Output: 8
Explanation: The same as example 1, except countUniqueChars("ABA") = 1.
```

### Example 3
```text
Input: s = "LEETCODE"
Output: 92
```


## Constraints
- 1 <= s.length <= 105
- s consists of uppercase English letters only.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int uniqueLetterString(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int uniqueLetterString(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def uniqueLetterString(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def uniqueLetterString(self, s: str) -> int:
```

### c
```c
int uniqueLetterString(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int UniqueLetterString(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    
};
```

### typescript
```typescript
function uniqueLetterString(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function uniqueLetterString($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func uniqueLetterString(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uniqueLetterString(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int uniqueLetterString(String s) {
    
  }
}
```

### golang
```golang
func uniqueLetterString(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def unique_letter_string(s)
    
end
```

### scala
```scala
object Solution {
    def uniqueLetterString(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn unique_letter_string(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (unique-letter-string s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec unique_letter_string(S :: unicode:unicode_binary()) -> integer().
unique_letter_string(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec unique_letter_string(s :: String.t) :: integer
  def unique_letter_string(s) do
    
  end
end
```
