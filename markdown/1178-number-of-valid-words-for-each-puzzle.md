# 1178. Number of Valid Words for Each Puzzle

- Difficulty: Hard
- Topics: Array, Hash Table, String, Bit Manipulation, Trie
- Slug: number-of-valid-words-for-each-puzzle
- Problem ID: 1282

## Description
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["aaaa","asas","able","ability","actt","actor","access"], puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
Output: [1,1,3,2,4,0]
Explanation: 
1 valid word for "aboveyz" : "aaaa" 
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There are no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
```

### Example 2
```text
Input: words = ["apple","pleas","please"], puzzles = ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]
Output: [0,1,3,2,0]
```


## Constraints
- 1 <= words.length <= 105
- 4 <= words[i].length <= 50
- 1 <= puzzles.length <= 104
- puzzles[i].length == 7
- words[i] and puzzles[i] consist of lowercase English letters.
- Each puzzles[i] does not contain repeated characters.

## Hints
- Exploit the fact that the length of the puzzle is only 7.
- Use bit-masks to represent the word and puzzle strings.
- For each puzzle, count the number of words whose bit-mask is a sub-mask of the puzzle's bit-mask.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findNumOfValidWords(vector<string>& words, vector<string>& puzzles) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
        
    }
}
```

### python
```python
class Solution(object):
    def findNumOfValidWords(self, words, puzzles):
        """
        :type words: List[str]
        :type puzzles: List[str]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findNumOfValidWords(char** words, int wordsSize, char** puzzles, int puzzlesSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindNumOfValidWords(string[] words, string[] puzzles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    
};
```

### typescript
```typescript
function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param String[] $puzzles
     * @return Integer[]
     */
    function findNumOfValidWords($words, $puzzles) {
        
    }
}
```

### swift
```swift
class Solution {
    func findNumOfValidWords(_ words: [String], _ puzzles: [String]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findNumOfValidWords(words: Array<String>, puzzles: Array<String>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findNumOfValidWords(List<String> words, List<String> puzzles) {
    
  }
}
```

### golang
```golang
func findNumOfValidWords(words []string, puzzles []string) []int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {String[]} puzzles
# @return {Integer[]}
def find_num_of_valid_words(words, puzzles)
    
end
```

### scala
```scala
object Solution {
    def findNumOfValidWords(words: Array[String], puzzles: Array[String]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_num_of_valid_words(words: Vec<String>, puzzles: Vec<String>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-num-of-valid-words words puzzles)
  (-> (listof string?) (listof string?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_num_of_valid_words(Words :: [unicode:unicode_binary()], Puzzles :: [unicode:unicode_binary()]) -> [integer()].
find_num_of_valid_words(Words, Puzzles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_num_of_valid_words(words :: [String.t], puzzles :: [String.t]) :: [integer]
  def find_num_of_valid_words(words, puzzles) do
    
  end
end
```
