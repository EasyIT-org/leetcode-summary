# 804. Unique Morse Code Words

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: unique-morse-code-words
- Problem ID: 822

## Description
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
For convenience, the full table for the 26 letters of the English alphabet is given below:
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
Return the number of different transformations among all words we have.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

### Example 2
```text
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
```

### Example 3
```text
Input: words = ["a"]
Output: 1
```


## Constraints
- 1 <= words.length <= 100
- 1 <= words[i].length <= 12
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
    int uniqueMorseRepresentations(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
```

### c
```c
int uniqueMorseRepresentations(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int UniqueMorseRepresentations(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
};
```

### typescript
```typescript
function uniqueMorseRepresentations(words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function uniqueMorseRepresentations($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func uniqueMorseRepresentations(_ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uniqueMorseRepresentations(words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int uniqueMorseRepresentations(List<String> words) {
    
  }
}
```

### golang
```golang
func uniqueMorseRepresentations(words []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer}
def unique_morse_representations(words)
    
end
```

### scala
```scala
object Solution {
    def uniqueMorseRepresentations(words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (unique-morse-representations words)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec unique_morse_representations(Words :: [unicode:unicode_binary()]) -> integer().
unique_morse_representations(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec unique_morse_representations(words :: [String.t]) :: integer
  def unique_morse_representations(words) do
    
  end
end
```
