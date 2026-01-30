# 854. K-Similar Strings

- Difficulty: Hard
- Topics: Hash Table, String, Breadth-First Search
- Slug: k-similar-strings
- Problem ID: 884

## Description
Strings s1 and s2 are k-similar (for some non-negative integer k) if we can swap the positions of two letters in s1 exactly k times so that the resulting string equals s2.
Given two anagrams s1 and s2, return the smallest k for which s1 and s2 are k-similar.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "ab", s2 = "ba"
Output: 1
Explanation: The two string are 1-similar because we can use one swap to change s1 to s2: "ab" --> "ba".
```

### Example 2
```text
Input: s1 = "abc", s2 = "bca"
Output: 2
Explanation: The two strings are 2-similar because we can use two swaps to change s1 to s2: "abc" --> "bac" --> "bca".
```


## Constraints
- 1 <= s1.length <= 20
- s2.length == s1.length
- s1 and s2 contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}.
- s2 is an anagram of s1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int kSimilarity(string s1, string s2) {
        
    }
};
```

### java
```java
class Solution {
    public int kSimilarity(String s1, String s2) {
        
    }
}
```

### python
```python
class Solution(object):
    def kSimilarity(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
```

### c
```c
int kSimilarity(char* s1, char* s2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KSimilarity(string s1, string s2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
    
};
```

### typescript
```typescript
function kSimilarity(s1: string, s2: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Integer
     */
    function kSimilarity($s1, $s2) {
        
    }
}
```

### swift
```swift
class Solution {
    func kSimilarity(_ s1: String, _ s2: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kSimilarity(s1: String, s2: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int kSimilarity(String s1, String s2) {
    
  }
}
```

### golang
```golang
func kSimilarity(s1 string, s2 string) int {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @return {Integer}
def k_similarity(s1, s2)
    
end
```

### scala
```scala
object Solution {
    def kSimilarity(s1: String, s2: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn k_similarity(s1: String, s2: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (k-similarity s1 s2)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec k_similarity(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> integer().
k_similarity(S1, S2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec k_similarity(s1 :: String.t, s2 :: String.t) :: integer
  def k_similarity(s1, s2) do
    
  end
end
```
