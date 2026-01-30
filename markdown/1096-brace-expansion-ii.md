# 1096. Brace Expansion II

- Difficulty: Hard
- Topics: String, Backtracking, Stack, Breadth-First Search
- Slug: brace-expansion-ii
- Problem ID: 1188

## Description
Under the grammar given below, strings can represent a set of lowercase words. Let R(expr) denote the set of words the expression represents.
The grammar can best be understood through simple examples:
Formally, the three rules for our grammar:
Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: expression = "{a,b}{c,{d,e}}"
Output: ["ac","ad","ae","bc","bd","be"]
```

### Example 2
```text
Input: expression = "{{a,z},a{b,c},{ab,z}}"
Output: ["a","ab","ac","z"]
Explanation: Each distinct word is written only once in the final answer.
```


## Constraints
- 1 <= expression.length <= 60
- expression[i] consists of '{', '}', ','or lowercase English letters.
- The given expression represents a set of words based on the grammar given in the description.

## Hints
- You can write helper methods to parse the next "chunk" of the expression.  If you see eg. "a", the answer is just the set {a}.  If you see "{", you parse until you complete the "}" (the number of { and } seen are equal) and that becomes a chunk that you find where the appropriate commas are, and parse each individual expression between the commas.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> braceExpansionII(string expression) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> braceExpansionII(String expression) {
        
    }
}
```

### python
```python
class Solution(object):
    def braceExpansionII(self, expression):
        """
        :type expression: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def braceExpansionII(self, expression: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** braceExpansionII(char* expression, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> BraceExpansionII(string expression) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    
};
```

### typescript
```typescript
function braceExpansionII(expression: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @return String[]
     */
    function braceExpansionII($expression) {
        
    }
}
```

### swift
```swift
class Solution {
    func braceExpansionII(_ expression: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun braceExpansionII(expression: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> braceExpansionII(String expression) {
    
  }
}
```

### golang
```golang
func braceExpansionII(expression string) []string {
    
}
```

### ruby
```ruby
# @param {String} expression
# @return {String[]}
def brace_expansion_ii(expression)
    
end
```

### scala
```scala
object Solution {
    def braceExpansionII(expression: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn brace_expansion_ii(expression: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (brace-expansion-ii expression)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec brace_expansion_ii(Expression :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
brace_expansion_ii(Expression) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec brace_expansion_ii(expression :: String.t) :: [String.t]
  def brace_expansion_ii(expression) do
    
  end
end
```
