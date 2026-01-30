# 784. Letter Case Permutation

- Difficulty: Medium
- Topics: String, Backtracking, Bit Manipulation
- Slug: letter-case-permutation
- Problem ID: 800

## Description
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. Return the output in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
```

### Example 2
```text
Input: s = "3z4"
Output: ["3z4","3Z4"]
```


## Constraints
- 1 <= s.length <= 12
- s consists of lowercase English letters, uppercase English letters, and digits.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> letterCasePermutation(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> letterCasePermutation(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def letterCasePermutation(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** letterCasePermutation(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> LetterCasePermutation(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    
};
```

### typescript
```typescript
function letterCasePermutation(s: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function letterCasePermutation($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func letterCasePermutation(_ s: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun letterCasePermutation(s: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> letterCasePermutation(String s) {
    
  }
}
```

### golang
```golang
func letterCasePermutation(s string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[]}
def letter_case_permutation(s)
    
end
```

### scala
```scala
object Solution {
    def letterCasePermutation(s: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (letter-case-permutation s)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec letter_case_permutation(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
letter_case_permutation(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec letter_case_permutation(s :: String.t) :: [String.t]
  def letter_case_permutation(s) do
    
  end
end
```
