# 943. Find the Shortest Superstring

- Difficulty: Hard
- Topics: Array, String, Dynamic Programming, Bit Manipulation, Bitmask
- Slug: find-the-shortest-superstring
- Problem ID: 980

## Description
Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them.
You may assume that no string in words is a substring of another string in words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["alex","loves","leetcode"]
Output: "alexlovesleetcode"
Explanation: All permutations of "alex","loves","leetcode" would also be accepted.
```

### Example 2
```text
Input: words = ["catg","ctaagt","gcta","ttca","atgcatc"]
Output: "gctaagttcatgcatc"
```


## Constraints
- 1 <= words.length <= 12
- 1 <= words[i].length <= 20
- words[i] consists of lowercase English letters.
- All the strings of words are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string shortestSuperstring(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public String shortestSuperstring(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestSuperstring(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
```

### c
```c
char* shortestSuperstring(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ShortestSuperstring(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
    
};
```

### typescript
```typescript
function shortestSuperstring(words: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return String
     */
    function shortestSuperstring($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestSuperstring(_ words: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestSuperstring(words: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String shortestSuperstring(List<String> words) {
    
  }
}
```

### golang
```golang
func shortestSuperstring(words []string) string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {String}
def shortest_superstring(words)
    
end
```

### scala
```scala
object Solution {
    def shortestSuperstring(words: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_superstring(words: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (shortest-superstring words)
  (-> (listof string?) string?)
  )
```

### erlang
```erlang
-spec shortest_superstring(Words :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
shortest_superstring(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_superstring(words :: [String.t]) :: String.t
  def shortest_superstring(words) do
    
  end
end
```
