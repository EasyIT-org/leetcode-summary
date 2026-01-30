# 318. Maximum Product of Word Lengths

- Difficulty: Medium
- Topics: Array, String, Bit Manipulation
- Slug: maximum-product-of-word-lengths
- Problem ID: 318

## Description
Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
```

### Example 2
```text
Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".
```

### Example 3
```text
Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
```


## Constraints
- 2 <= words.length <= 1000
- 1 <= words[i].length <= 1000
- words[i] consists only of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxProduct(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int maxProduct(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxProduct(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxProduct(self, words: List[str]) -> int:
```

### c
```c
int maxProduct(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxProduct(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
};
```

### typescript
```typescript
function maxProduct(words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function maxProduct($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxProduct(_ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxProduct(words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxProduct(List<String> words) {
    
  }
}
```

### golang
```golang
func maxProduct(words []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer}
def max_product(words)
    
end
```

### scala
```scala
object Solution {
    def maxProduct(words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_product(words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-product words)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_product(Words :: [unicode:unicode_binary()]) -> integer().
max_product(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_product(words :: [String.t]) :: integer
  def max_product(words) do
    
  end
end
```
