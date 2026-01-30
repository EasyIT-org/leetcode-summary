# 282. Expression Add Operators

- Difficulty: Hard
- Topics: Math, String, Backtracking
- Slug: expression-add-operators
- Problem ID: 282

## Description
Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.
Note that operands in the returned expressions should not contain leading zeros.
Note that a number can contain multiple digits.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: num = "123", target = 6
Output: ["1*2*3","1+2+3"]
Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
```

### Example 2
```text
Input: num = "232", target = 8
Output: ["2*3+2","2+3*2"]
Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
```

### Example 3
```text
Input: num = "3456237490", target = 9191
Output: []
Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
```


## Constraints
- 1 <= num.length <= 10
- num consists of only digits.
- -231 <= target <= 231 - 1

## Hints
- Note that a number can contain multiple digits.
- Since the question asks us to find <b>all</b> of the valid expressions, we need a way to iterate over all of them. (<b>Hint:</b> Recursion!)
- We can keep track of the expression string and evaluate it at the very end. But that would take a lot of time. Can we keep track of the expression's value as well so as to avoid the evaluation at the very end of recursion?
- Think carefully about the multiply operator. It has a higher precedence than the addition and subtraction operators. 

<br> 1 + 2 = 3  <br>
1 + 2 - 4 --> 3 - 4 --> -1 <br>
1 + 2 - 4 * 12 --> -1 * 12 --> -12 (WRONG!) <br>
1 + 2 - 4 * 12 --> -1 - (-4) + (-4 * 12) --> 3 + (-48) --> -45 (CORRECT!)
- We simply need to keep track of the last operand in our expression and reverse it's effect on the expression's value while considering the multiply operator.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> addOperators(string num, int target) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> addOperators(String num, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def addOperators(self, num, target):
        """
        :type num: str
        :type target: int
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** addOperators(char* num, int target, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> AddOperators(string num, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    
};
```

### typescript
```typescript
function addOperators(num: string, target: number): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $num
     * @param Integer $target
     * @return String[]
     */
    function addOperators($num, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func addOperators(_ num: String, _ target: Int) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun addOperators(num: String, target: Int): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> addOperators(String num, int target) {
    
  }
}
```

### golang
```golang
func addOperators(num string, target int) []string {
    
}
```

### ruby
```ruby
# @param {String} num
# @param {Integer} target
# @return {String[]}
def add_operators(num, target)
    
end
```

### scala
```scala
object Solution {
    def addOperators(num: String, target: Int): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn add_operators(num: String, target: i32) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (add-operators num target)
  (-> string? exact-integer? (listof string?))
  )
```

### erlang
```erlang
-spec add_operators(Num :: unicode:unicode_binary(), Target :: integer()) -> [unicode:unicode_binary()].
add_operators(Num, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec add_operators(num :: String.t, target :: integer) :: [String.t]
  def add_operators(num, target) do
    
  end
end
```
