# 17. Letter Combinations of a Phone Number

- Difficulty: Medium
- Topics: Hash Table, String, Backtracking
- Slug: letter-combinations-of-a-phone-number
- Problem ID: 17

## Description
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```
Images:
- https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png

### Example 2
```text
Input: digits = ""
Output: []
```
Images:
- https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png

### Example 3
```text
Input: digits = "2"
Output: ["a","b","c"]
```
Images:
- https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png


## Constraints
- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> letterCombinations(String digits) {
        
    }
}
```

### python
```python
class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** letterCombinations(char* digits, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> LetterCombinations(string digits) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
};
```

### typescript
```typescript
function letterCombinations(digits: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $digits
     * @return String[]
     */
    function letterCombinations($digits) {
        
    }
}
```

### swift
```swift
class Solution {
    func letterCombinations(_ digits: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun letterCombinations(digits: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> letterCombinations(String digits) {
    
  }
}
```

### golang
```golang
func letterCombinations(digits string) []string {
    
}
```

### ruby
```ruby
# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    
end
```

### scala
```scala
object Solution {
    def letterCombinations(digits: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (letter-combinations digits)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec letter_combinations(Digits :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
letter_combinations(Digits) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec letter_combinations(digits :: String.t) :: [String.t]
  def letter_combinations(digits) do
    
  end
end
```
