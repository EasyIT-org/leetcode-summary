# 472. Concatenated Words

- Difficulty: Hard
- Topics: Array, String, Dynamic Programming, Depth-First Search, Trie, Sorting
- Slug: concatenated-words
- Problem ID: 472

## Description
Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
```

### Example 2
```text
Input: words = ["cat","dog","catdog"]
Output: ["catdog"]
```


## Constraints
- 1 <= words.length <= 104
- 1 <= words[i].length <= 30
- words[i] consists of only lowercase English letters.
- All the strings of words are unique.
- 1 <= sum(words[i].length) <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def findAllConcatenatedWordsInADict(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findAllConcatenatedWordsInADict(char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FindAllConcatenatedWordsInADict(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
};
```

### typescript
```typescript
function findAllConcatenatedWordsInADict(words: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return String[]
     */
    function findAllConcatenatedWordsInADict($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func findAllConcatenatedWordsInADict(_ words: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findAllConcatenatedWordsInADict(words: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findAllConcatenatedWordsInADict(List<String> words) {
    
  }
}
```

### golang
```golang
func findAllConcatenatedWordsInADict(words []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {String[]}
def find_all_concatenated_words_in_a_dict(words)
    
end
```

### scala
```scala
object Solution {
    def findAllConcatenatedWordsInADict(words: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_all_concatenated_words_in_a_dict(words: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-all-concatenated-words-in-a-dict words)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec find_all_concatenated_words_in_a_dict(Words :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
find_all_concatenated_words_in_a_dict(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_all_concatenated_words_in_a_dict(words :: [String.t]) :: [String.t]
  def find_all_concatenated_words_in_a_dict(words) do
    
  end
end
```
