# 966. Vowel Spellchecker

- Difficulty: Medium
- Topics: Array, Hash Table, String
- Slug: vowel-spellchecker
- Problem ID: 1006

## Description
Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.
For a given query word, the spell checker handles two categories of spelling mistakes:
In addition, the spell checker operates under the following precedence rules:
Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
```

### Example 2
```text
Input: wordlist = ["yellow"], queries = ["YellOw"]
Output: ["yellow"]
```


## Constraints
- 1 <= wordlist.length, queries.length <= 5000
- 1 <= wordlist[i].length, queries[i].length <= 7
- wordlist[i] and queries[i] consist only of only English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        
    }
};
```

### java
```java
class Solution {
    public String[] spellchecker(String[] wordlist, String[] queries) {
        
    }
}
```

### python
```python
class Solution(object):
    def spellchecker(self, wordlist, queries):
        """
        :type wordlist: List[str]
        :type queries: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def spellchecker(self, wordlist: List[str], queries: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** spellchecker(char** wordlist, int wordlistSize, char** queries, int queriesSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] Spellchecker(string[] wordlist, string[] queries) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    
};
```

### typescript
```typescript
function spellchecker(wordlist: string[], queries: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $wordlist
     * @param String[] $queries
     * @return String[]
     */
    function spellchecker($wordlist, $queries) {
        
    }
}
```

### swift
```swift
class Solution {
    func spellchecker(_ wordlist: [String], _ queries: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun spellchecker(wordlist: Array<String>, queries: Array<String>): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> spellchecker(List<String> wordlist, List<String> queries) {
    
  }
}
```

### golang
```golang
func spellchecker(wordlist []string, queries []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} wordlist
# @param {String[]} queries
# @return {String[]}
def spellchecker(wordlist, queries)
    
end
```

### scala
```scala
object Solution {
    def spellchecker(wordlist: Array[String], queries: Array[String]): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn spellchecker(wordlist: Vec<String>, queries: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (spellchecker wordlist queries)
  (-> (listof string?) (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec spellchecker(Wordlist :: [unicode:unicode_binary()], Queries :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
spellchecker(Wordlist, Queries) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec spellchecker(wordlist :: [String.t], queries :: [String.t]) :: [String.t]
  def spellchecker(wordlist, queries) do
    
  end
end
```
