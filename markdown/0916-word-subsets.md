# 916. Word Subsets

- Difficulty: Medium
- Topics: Array, Hash Table, String
- Slug: word-subsets
- Problem ID: 952

## Description
You are given two string arrays words1 and words2.
A string b is a subset of string a if every letter in b occurs in a including multiplicity.
A string a from words1 is universal if for every string b in words2, b is a subset of a.
Return an array of all the universal strings in words1. You may return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
```

### Example 2
```text
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lc","eo"]
Output: ["leetcode"]
```

### Example 3
```text
Input: words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"], words2 = ["c","cc","b"]
Output: ["cccbb"]
```


## Constraints
- 1 <= words1.length, words2.length <= 104
- 1 <= words1[i].length, words2[i].length <= 10
- words1[i] and words2[i] consist only of lowercase English letters.
- All the strings of words1 are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> wordSubsets(vector<string>& words1, vector<string>& words2) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> wordSubsets(String[] words1, String[] words2) {
        
    }
}
```

### python
```python
class Solution(object):
    def wordSubsets(self, words1, words2):
        """
        :type words1: List[str]
        :type words2: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** wordSubsets(char** words1, int words1Size, char** words2, int words2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> WordSubsets(string[] words1, string[] words2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    
};
```

### typescript
```typescript
function wordSubsets(words1: string[], words2: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words1
     * @param String[] $words2
     * @return String[]
     */
    function wordSubsets($words1, $words2) {
        
    }
}
```

### swift
```swift
class Solution {
    func wordSubsets(_ words1: [String], _ words2: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun wordSubsets(words1: Array<String>, words2: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> wordSubsets(List<String> words1, List<String> words2) {
    
  }
}
```

### golang
```golang
func wordSubsets(words1 []string, words2 []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words1
# @param {String[]} words2
# @return {String[]}
def word_subsets(words1, words2)
    
end
```

### scala
```scala
object Solution {
    def wordSubsets(words1: Array[String], words2: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn word_subsets(words1: Vec<String>, words2: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (word-subsets words1 words2)
  (-> (listof string?) (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec word_subsets(Words1 :: [unicode:unicode_binary()], Words2 :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
word_subsets(Words1, Words2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec word_subsets(words1 :: [String.t], words2 :: [String.t]) :: [String.t]
  def word_subsets(words1, words2) do
    
  end
end
```
