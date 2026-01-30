# 884. Uncommon Words from Two Sentences

- Difficulty: Easy
- Topics: Hash Table, String, Counting
- Slug: uncommon-words-from-two-sentences
- Problem ID: 920

## Description
A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Explanation:
The word "sweet" appears only in s1 , while the word "sour" appears only in s2 .
```

### Example 2
```text
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
```


## Constraints
- 1 <= s1.length, s2.length <= 200
- s1 and s2 consist of lowercase English letters and spaces.
- s1 and s2 do not have leading or trailing spaces.
- All the words in s1 and s2 are separated by a single space.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> uncommonFromSentences(string s1, string s2) {
        
    }
};
```

### java
```java
class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        
    }
}
```

### python
```python
class Solution(object):
    def uncommonFromSentences(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** uncommonFromSentences(char* s1, char* s2, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] UncommonFromSentences(string s1, string s2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
};
```

### typescript
```typescript
function uncommonFromSentences(s1: string, s2: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return String[]
     */
    function uncommonFromSentences($s1, $s2) {
        
    }
}
```

### swift
```swift
class Solution {
    func uncommonFromSentences(_ s1: String, _ s2: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uncommonFromSentences(s1: String, s2: String): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> uncommonFromSentences(String s1, String s2) {
    
  }
}
```

### golang
```golang
func uncommonFromSentences(s1 string, s2 string) []string {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @return {String[]}
def uncommon_from_sentences(s1, s2)
    
end
```

### scala
```scala
object Solution {
    def uncommonFromSentences(s1: String, s2: String): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn uncommon_from_sentences(s1: String, s2: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (uncommon-from-sentences s1 s2)
  (-> string? string? (listof string?))
  )
```

### erlang
```erlang
-spec uncommon_from_sentences(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
uncommon_from_sentences(S1, S2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec uncommon_from_sentences(s1 :: String.t, s2 :: String.t) :: [String.t]
  def uncommon_from_sentences(s1, s2) do
    
  end
end
```
