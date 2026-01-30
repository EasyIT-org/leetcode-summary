# 68. Text Justification

- Difficulty: Hard
- Topics: Array, String, Simulation
- Slug: text-justification
- Problem ID: 68

## Description
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
For the last line of text, it should be left-justified, and no extra space is inserted between words.
Note:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

### Example 2
```text
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
```

### Example 3
```text
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```


## Constraints
- 1 <= words.length <= 300
- 1 <= words[i].length <= 20
- words[i] consists of only English letters and symbols.
- 1 <= maxWidth <= 100
- words[i].length <= maxWidth

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        
    }
}
```

### python
```python
class Solution(object):
    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FullJustify(string[] words, int maxWidth) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
};
```

### typescript
```typescript
function fullJustify(words: string[], maxWidth: number): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param Integer $maxWidth
     * @return String[]
     */
    function fullJustify($words, $maxWidth) {
        
    }
}
```

### swift
```swift
class Solution {
    func fullJustify(_ words: [String], _ maxWidth: Int) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun fullJustify(words: Array<String>, maxWidth: Int): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> fullJustify(List<String> words, int maxWidth) {
    
  }
}
```

### golang
```golang
func fullJustify(words []string, maxWidth int) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {Integer} max_width
# @return {String[]}
def full_justify(words, max_width)
    
end
```

### scala
```scala
object Solution {
    def fullJustify(words: Array[String], maxWidth: Int): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (full-justify words maxWidth)
  (-> (listof string?) exact-integer? (listof string?))
  )
```

### erlang
```erlang
-spec full_justify(Words :: [unicode:unicode_binary()], MaxWidth :: integer()) -> [unicode:unicode_binary()].
full_justify(Words, MaxWidth) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec full_justify(words :: [String.t], max_width :: integer) :: [String.t]
  def full_justify(words, max_width) do
    
  end
end
```
