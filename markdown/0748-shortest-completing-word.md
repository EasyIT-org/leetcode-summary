# 748. Shortest Completing Word

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: shortest-completing-word
- Problem ID: 749

## Description
Given a string licensePlate and an array of strings words, find the shortest completing word in words.
A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
Output: "steps"
Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
"step" contains 't' and 'p', but only contains 1 's'.
"steps" contains 't', 'p', and both 's' characters.
"stripe" is missing an 's'.
"stepple" is missing an 's'.
Since "steps" is the only word containing all the letters, that is the answer.
```

### Example 2
```text
Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
Output: "pest"
Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
```


## Constraints
- 1 <= licensePlate.length <= 7
- licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 15
- words[i] consists of lower case English letters.

## Hints
- Count only the letters (possibly converted to lowercase) of each word.  If a word is shorter and the count of each letter is at least the count of that letter in the licensePlate, it is the best answer we've seen yet.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string shortestCompletingWord(string licensePlate, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public String shortestCompletingWord(String licensePlate, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestCompletingWord(self, licensePlate, words):
        """
        :type licensePlate: str
        :type words: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
```

### c
```c
char* shortestCompletingWord(char* licensePlate, char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ShortestCompletingWord(string licensePlate, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    
};
```

### typescript
```typescript
function shortestCompletingWord(licensePlate: string, words: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $licensePlate
     * @param String[] $words
     * @return String
     */
    function shortestCompletingWord($licensePlate, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestCompletingWord(_ licensePlate: String, _ words: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestCompletingWord(licensePlate: String, words: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String shortestCompletingWord(String licensePlate, List<String> words) {
    
  }
}
```

### golang
```golang
func shortestCompletingWord(licensePlate string, words []string) string {
    
}
```

### ruby
```ruby
# @param {String} license_plate
# @param {String[]} words
# @return {String}
def shortest_completing_word(license_plate, words)
    
end
```

### scala
```scala
object Solution {
    def shortestCompletingWord(licensePlate: String, words: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_completing_word(license_plate: String, words: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (shortest-completing-word licensePlate words)
  (-> string? (listof string?) string?)
  )
```

### erlang
```erlang
-spec shortest_completing_word(LicensePlate :: unicode:unicode_binary(), Words :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
shortest_completing_word(LicensePlate, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_completing_word(license_plate :: String.t, words :: [String.t]) :: String.t
  def shortest_completing_word(license_plate, words) do
    
  end
end
```
