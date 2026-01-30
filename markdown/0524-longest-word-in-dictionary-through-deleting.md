# 524. Longest Word in Dictionary through Deleting

- Difficulty: Medium
- Topics: Array, Two Pointers, String, Sorting
- Slug: longest-word-in-dictionary-through-deleting
- Problem ID: 524

## Description
Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
Output: "apple"
```

### Example 2
```text
Input: s = "abpcplea", dictionary = ["a","b","c"]
Output: "a"
```


## Constraints
- 1 <= s.length <= 1000
- 1 <= dictionary.length <= 1000
- 1 <= dictionary[i].length <= 1000
- s and dictionary[i] consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string findLongestWord(string s, vector<string>& dictionary) {
        
    }
};
```

### java
```java
class Solution {
    public String findLongestWord(String s, List<String> dictionary) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLongestWord(self, s, dictionary):
        """
        :type s: str
        :type dictionary: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
```

### c
```c
char* findLongestWord(char* s, char** dictionary, int dictionarySize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string FindLongestWord(string s, IList<string> dictionary) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    
};
```

### typescript
```typescript
function findLongestWord(s: string, dictionary: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $dictionary
     * @return String
     */
    function findLongestWord($s, $dictionary) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLongestWord(_ s: String, _ dictionary: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLongestWord(s: String, dictionary: List<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String findLongestWord(String s, List<String> dictionary) {
    
  }
}
```

### golang
```golang
func findLongestWord(s string, dictionary []string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} dictionary
# @return {String}
def find_longest_word(s, dictionary)
    
end
```

### scala
```scala
object Solution {
    def findLongestWord(s: String, dictionary: List[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_longest_word(s: String, dictionary: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (find-longest-word s dictionary)
  (-> string? (listof string?) string?)
  )
```

### erlang
```erlang
-spec find_longest_word(S :: unicode:unicode_binary(), Dictionary :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
find_longest_word(S, Dictionary) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_longest_word(s :: String.t, dictionary :: [String.t]) :: String.t
  def find_longest_word(s, dictionary) do
    
  end
end
```
