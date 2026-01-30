# 1002. Find Common Characters

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: find-common-characters
- Problem ID: 1044

## Description
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
```

### Example 2
```text
Input: words = ["cool","lock","cook"]
Output: ["c","o"]
```


## Constraints
- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- words[i] consists of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> commonChars(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def commonChars(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** commonChars(char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> CommonChars(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
};
```

### typescript
```typescript
function commonChars(words: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return String[]
     */
    function commonChars($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func commonChars(_ words: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun commonChars(words: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> commonChars(List<String> words) {
    
  }
}
```

### golang
```golang
func commonChars(words []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {String[]}
def common_chars(words)
    
end
```

### scala
```scala
object Solution {
    def commonChars(words: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn common_chars(words: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (common-chars words)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec common_chars(Words :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
common_chars(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec common_chars(words :: [String.t]) :: [String.t]
  def common_chars(words) do
    
  end
end
```
