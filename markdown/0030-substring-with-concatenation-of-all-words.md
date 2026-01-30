# 30. Substring with Concatenation of All Words

- Difficulty: Hard
- Topics: Hash Table, String, Sliding Window
- Slug: substring-with-concatenation-of-all-words
- Problem ID: 30

## Description
You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation:
The substring starting at 0 is "barfoo" . It is the concatenation of ["bar","foo"] which is a permutation of words . The substring starting at 9 is "foobar" . It is the concatenation of ["foo","bar"] which is a permutation of words .
```

### Example 2
```text
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation:
There is no concatenated substring.
```

### Example 3
```text
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation:
The substring starting at 6 is "foobarthe" . It is the concatenation of ["foo","bar","the"] . The substring starting at 9 is "barthefoo" . It is the concatenation of ["bar","the","foo"] . The substring starting at 12 is "thefoobar" . It is the concatenation of ["the","foo","bar"] .
```


## Constraints
- 1 <= s.length <= 104
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 30
- s and words[i] consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def findSubstring(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findSubstring(char* s, char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindSubstring(string s, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    
};
```

### typescript
```typescript
function findSubstring(s: string, words: string[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $words
     * @return Integer[]
     */
    function findSubstring($s, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func findSubstring(_ s: String, _ words: [String]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findSubstring(s: String, words: Array<String>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findSubstring(String s, List<String> words) {
    
  }
}
```

### golang
```golang
func findSubstring(s string, words []string) []int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} words
# @return {Integer[]}
def find_substring(s, words)
    
end
```

### scala
```scala
object Solution {
    def findSubstring(s: String, words: Array[String]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_substring(s: String, words: Vec<String>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-substring s words)
  (-> string? (listof string?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_substring(S :: unicode:unicode_binary(), Words :: [unicode:unicode_binary()]) -> [integer()].
find_substring(S, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_substring(s :: String.t, words :: [String.t]) :: [integer]
  def find_substring(s, words) do
    
  end
end
```
