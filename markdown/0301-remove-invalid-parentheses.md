# 301. Remove Invalid Parentheses

- Difficulty: Hard
- Topics: String, Backtracking, Breadth-First Search
- Slug: remove-invalid-parentheses
- Problem ID: 301

## Description
Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.
Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "()())()"
Output: ["(())()","()()()"]
```

### Example 2
```text
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
```

### Example 3
```text
Input: s = ")("
Output: [""]
```


## Constraints
- 1 <= s.length <= 25
- s consists of lowercase English letters and parentheses '(' and ')'.
- There will be at most 20 parentheses in s.

## Hints
- Since we do not know which brackets can be removed, we try all the options! We can use recursion.
- In the recursion, for each bracket, we can either use it or remove it.
- Recursion will generate all the valid parentheses strings but we want the ones with the least number of parentheses deleted.
- We can count the number of invalid brackets to be deleted and only generate the valid strings in the recusrion.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> removeInvalidParentheses(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> removeInvalidParentheses(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeInvalidParentheses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** removeInvalidParentheses(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> RemoveInvalidParentheses(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
};
```

### typescript
```typescript
function removeInvalidParentheses(s: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function removeInvalidParentheses($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeInvalidParentheses(_ s: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeInvalidParentheses(s: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> removeInvalidParentheses(String s) {
    
  }
}
```

### golang
```golang
func removeInvalidParentheses(s string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[]}
def remove_invalid_parentheses(s)
    
end
```

### scala
```scala
object Solution {
    def removeInvalidParentheses(s: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_invalid_parentheses(s: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (remove-invalid-parentheses s)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec remove_invalid_parentheses(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
remove_invalid_parentheses(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_invalid_parentheses(s :: String.t) :: [String.t]
  def remove_invalid_parentheses(s) do
    
  end
end
```
