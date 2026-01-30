# 770. Basic Calculator IV

- Difficulty: Hard
- Topics: Hash Table, Math, String, Stack, Recursion
- Slug: basic-calculator-iv
- Problem ID: 781

## Description
Given an expression such as expression = "e + 8 - a + 5" and an evaluation map such as {"e": 1} (given in terms of evalvars = ["e"] and evalints = [1]), return a list of tokens representing the simplified expression, such as ["-1*a","14"]
Expressions are evaluated in the usual order: brackets first, then multiplication, then addition and subtraction.
The format of the output is as follows:
Note: You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
Output: ["-1*a","14"]
```

### Example 2
```text
Input: expression = "e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12]
Output: ["-1*pressure","5"]
```

### Example 3
```text
Input: expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
Output: ["1*e*e","-64"]
```


## Constraints
- 1 <= expression.length <= 250
- expression consists of lowercase English letters, digits, '+', '-', '*', '(', ')', ' '.
- expression does not contain any leading or trailing spaces.
- All the tokens in expression are separated by a single space.
- 0 <= evalvars.length <= 100
- 1 <= evalvars[i].length <= 20
- evalvars[i] consists of lowercase English letters.
- evalints.length == evalvars.length
- -100 <= evalints[i] <= 100

## Hints
- One way is with a Polynomial class.  For example,

* `Poly:add(this, that)` returns the result of `this + that`.
* `Poly:sub(this, that)` returns the result of `this - that`.
* `Poly:mul(this, that)` returns the result of `this * that`.
* `Poly:evaluate(this, evalmap)` returns the polynomial after replacing all free variables with constants as specified by `evalmap`.
* `Poly:toList(this)` returns the polynomial in the correct output format.

* `Solution::combine(left, right, symbol)` returns the result of applying the binary operator represented by `symbol` to `left` and `right`.
* `Solution::make(expr)` makes a new `Poly` represented by either the constant or free variable specified by `expr`.
* `Solution::parse(expr)` parses an expression into a new `Poly`.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> basicCalculatorIV(string expression, vector<string>& evalvars, vector<int>& evalints) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> basicCalculatorIV(String expression, String[] evalvars, int[] evalints) {
        
    }
}
```

### python
```python
class Solution(object):
    def basicCalculatorIV(self, expression, evalvars, evalints):
        """
        :type expression: str
        :type evalvars: List[str]
        :type evalints: List[int]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def basicCalculatorIV(self, expression: str, evalvars: List[str], evalints: List[int]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** basicCalculatorIV(char* expression, char** evalvars, int evalvarsSize, int* evalints, int evalintsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> BasicCalculatorIV(string expression, string[] evalvars, int[] evalints) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = function(expression, evalvars, evalints) {
    
};
```

### typescript
```typescript
function basicCalculatorIV(expression: string, evalvars: string[], evalints: number[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @param String[] $evalvars
     * @param Integer[] $evalints
     * @return String[]
     */
    function basicCalculatorIV($expression, $evalvars, $evalints) {
        
    }
}
```

### swift
```swift
class Solution {
    func basicCalculatorIV(_ expression: String, _ evalvars: [String], _ evalints: [Int]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun basicCalculatorIV(expression: String, evalvars: Array<String>, evalints: IntArray): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> basicCalculatorIV(String expression, List<String> evalvars, List<int> evalints) {
    
  }
}
```

### golang
```golang
func basicCalculatorIV(expression string, evalvars []string, evalints []int) []string {
    
}
```

### ruby
```ruby
# @param {String} expression
# @param {String[]} evalvars
# @param {Integer[]} evalints
# @return {String[]}
def basic_calculator_iv(expression, evalvars, evalints)
    
end
```

### scala
```scala
object Solution {
    def basicCalculatorIV(expression: String, evalvars: Array[String], evalints: Array[Int]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn basic_calculator_iv(expression: String, evalvars: Vec<String>, evalints: Vec<i32>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (basic-calculator-iv expression evalvars evalints)
  (-> string? (listof string?) (listof exact-integer?) (listof string?))
  )
```

### erlang
```erlang
-spec basic_calculator_iv(Expression :: unicode:unicode_binary(), Evalvars :: [unicode:unicode_binary()], Evalints :: [integer()]) -> [unicode:unicode_binary()].
basic_calculator_iv(Expression, Evalvars, Evalints) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec basic_calculator_iv(expression :: String.t, evalvars :: [String.t], evalints :: [integer]) :: [String.t]
  def basic_calculator_iv(expression, evalvars, evalints) do
    
  end
end
```
