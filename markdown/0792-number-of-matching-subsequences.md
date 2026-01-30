# 792. Number of Matching Subsequences

- Difficulty: Medium
- Topics: Array, Hash Table, String, Binary Search, Dynamic Programming, Trie, Sorting
- Slug: number-of-matching-subsequences
- Problem ID: 808

## Description
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
```

### Example 2
```text
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
```


## Constraints
- 1 <= s.length <= 5 * 104
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 50
- s and words[i] consist of only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numMatchingSubseq(string s, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int numMatchingSubseq(String s, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def numMatchingSubseq(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
```

### c
```c
int numMatchingSubseq(char* s, char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumMatchingSubseq(string s, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    
};
```

### typescript
```typescript
function numMatchingSubseq(s: string, words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $words
     * @return Integer
     */
    function numMatchingSubseq($s, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func numMatchingSubseq(_ s: String, _ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numMatchingSubseq(s: String, words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numMatchingSubseq(String s, List<String> words) {
    
  }
}
```

### golang
```golang
func numMatchingSubseq(s string, words []string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} words
# @return {Integer}
def num_matching_subseq(s, words)
    
end
```

### scala
```scala
object Solution {
    def numMatchingSubseq(s: String, words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_matching_subseq(s: String, words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-matching-subseq s words)
  (-> string? (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_matching_subseq(S :: unicode:unicode_binary(), Words :: [unicode:unicode_binary()]) -> integer().
num_matching_subseq(S, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_matching_subseq(s :: String.t, words :: [String.t]) :: integer
  def num_matching_subseq(s, words) do
    
  end
end
```
