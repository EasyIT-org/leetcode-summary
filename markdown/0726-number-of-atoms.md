# 726. Number of Atoms

- Difficulty: Hard
- Topics: Hash Table, String, Stack, Sorting
- Slug: number-of-atoms
- Problem ID: 726

## Description
Given a string formula representing a chemical formula, return the count of each atom.
The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.
One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.
Two formulas are concatenated together to produce another formula.
A formula placed in parentheses, and a count (optionally added) is also a formula.
Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.
The test cases are generated so that all the values in the output fit in a 32-bit integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
```

### Example 2
```text
Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
```

### Example 3
```text
Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
```


## Constraints
- 1 <= formula.length <= 1000
- formula consists of English letters, digits, '(', and ')'.
- formula is always valid.

## Hints
- To parse formula[i:], when we see a `'('`, we will parse recursively whatever is inside the brackets (up to the correct closing ending bracket) and add it to our count, multiplying by the following multiplicity if there is one.

Otherwise, we should see an uppercase character: we will parse the rest of the letters to get the name, and add that (plus the multiplicity if there is one.)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string countOfAtoms(string formula) {
        
    }
};
```

### java
```java
class Solution {
    public String countOfAtoms(String formula) {
        
    }
}
```

### python
```python
class Solution(object):
    def countOfAtoms(self, formula):
        """
        :type formula: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def countOfAtoms(self, formula: str) -> str:
```

### c
```c
char* countOfAtoms(char* formula) {
    
}
```

### csharp
```csharp
public class Solution {
    public string CountOfAtoms(string formula) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    
};
```

### typescript
```typescript
function countOfAtoms(formula: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $formula
     * @return String
     */
    function countOfAtoms($formula) {
        
    }
}
```

### swift
```swift
class Solution {
    func countOfAtoms(_ formula: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countOfAtoms(formula: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String countOfAtoms(String formula) {
    
  }
}
```

### golang
```golang
func countOfAtoms(formula string) string {
    
}
```

### ruby
```ruby
# @param {String} formula
# @return {String}
def count_of_atoms(formula)
    
end
```

### scala
```scala
object Solution {
    def countOfAtoms(formula: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_of_atoms(formula: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (count-of-atoms formula)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec count_of_atoms(Formula :: unicode:unicode_binary()) -> unicode:unicode_binary().
count_of_atoms(Formula) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_of_atoms(formula :: String.t) :: String.t
  def count_of_atoms(formula) do
    
  end
end
```
