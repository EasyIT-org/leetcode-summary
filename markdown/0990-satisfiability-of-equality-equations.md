# 990. Satisfiability of Equality Equations

- Difficulty: Medium
- Topics: Array, String, Union Find, Graph
- Slug: satisfiability-of-equality-equations
- Problem ID: 1032

## Description
You are given an array of strings equations that represent relationships between variables where each string equations[i] is of length 4 and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different) that represent one-letter variable names.
Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: equations = ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.
```

### Example 2
```text
Input: equations = ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
```


## Constraints
- 1 <= equations.length <= 500
- equations[i].length == 4
- equations[i][0] is a lowercase letter.
- equations[i][1] is either '=' or '!'.
- equations[i][2] is '='.
- equations[i][3] is a lowercase letter.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool equationsPossible(vector<string>& equations) {
        
    }
};
```

### java
```java
class Solution {
    public boolean equationsPossible(String[] equations) {
        
    }
}
```

### python
```python
class Solution(object):
    def equationsPossible(self, equations):
        """
        :type equations: List[str]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
```

### c
```c
bool equationsPossible(char** equations, int equationsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool EquationsPossible(string[] equations) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    
};
```

### typescript
```typescript
function equationsPossible(equations: string[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $equations
     * @return Boolean
     */
    function equationsPossible($equations) {
        
    }
}
```

### swift
```swift
class Solution {
    func equationsPossible(_ equations: [String]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun equationsPossible(equations: Array<String>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool equationsPossible(List<String> equations) {
    
  }
}
```

### golang
```golang
func equationsPossible(equations []string) bool {
    
}
```

### ruby
```ruby
# @param {String[]} equations
# @return {Boolean}
def equations_possible(equations)
    
end
```

### scala
```scala
object Solution {
    def equationsPossible(equations: Array[String]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn equations_possible(equations: Vec<String>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (equations-possible equations)
  (-> (listof string?) boolean?)
  )
```

### erlang
```erlang
-spec equations_possible(Equations :: [unicode:unicode_binary()]) -> boolean().
equations_possible(Equations) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec equations_possible(equations :: [String.t]) :: boolean
  def equations_possible(equations) do
    
  end
end
```
