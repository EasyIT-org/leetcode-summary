# 399. Evaluate Division

- Difficulty: Medium
- Topics: Array, String, Depth-First Search, Breadth-First Search, Union Find, Graph, Shortest Path
- Slug: evaluate-division
- Problem ID: 399

## Description
You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
Return the answers to all queries. If a single answer cannot be determined, return -1.0.
Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.
Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0
```

### Example 2
```text
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
```

### Example 3
```text
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
```


## Constraints
- 1 <= equations.length <= 20
- equations[i].length == 2
- 1 <= Ai.length, Bi.length <= 5
- values.length == equations.length
- 0.0 < values[i] <= 20.0
- 1 <= queries.length <= 20
- queries[i].length == 2
- 1 <= Cj.length, Dj.length <= 5
- Ai, Bi, Cj, Dj consist of lower case English letters and digits.

## Hints
- Do you recognize this as a graph problem?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        
    }
};
```

### java
```java
class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        
    }
}
```

### python
```python
class Solution(object):
    def calcEquation(self, equations, values, queries):
        """
        :type equations: List[List[str]]
        :type values: List[float]
        :type queries: List[List[str]]
        :rtype: List[float]
        """
```

### python3
```python3
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* calcEquation(char*** equations, int equationsSize, int* equationsColSize, double* values, int valuesSize, char*** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public double[] CalcEquation(IList<IList<string>> equations, double[] values, IList<IList<string>> queries) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
};
```

### typescript
```typescript
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $equations
     * @param Float[] $values
     * @param String[][] $queries
     * @return Float[]
     */
    function calcEquation($equations, $values, $queries) {
        
    }
}
```

### swift
```swift
class Solution {
    func calcEquation(_ equations: [[String]], _ values: [Double], _ queries: [[String]]) -> [Double] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun calcEquation(equations: List<List<String>>, values: DoubleArray, queries: List<List<String>>): DoubleArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<double> calcEquation(List<List<String>> equations, List<double> values, List<List<String>> queries) {
    
  }
}
```

### golang
```golang
func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
    
}
```

### ruby
```ruby
# @param {String[][]} equations
# @param {Float[]} values
# @param {String[][]} queries
# @return {Float[]}
def calc_equation(equations, values, queries)
    
end
```

### scala
```scala
object Solution {
    def calcEquation(equations: List[List[String]], values: Array[Double], queries: List[List[String]]): Array[Double] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn calc_equation(equations: Vec<Vec<String>>, values: Vec<f64>, queries: Vec<Vec<String>>) -> Vec<f64> {
        
    }
}
```

### racket
```racket
(define/contract (calc-equation equations values queries)
  (-> (listof (listof string?)) (listof flonum?) (listof (listof string?)) (listof flonum?))
  )
```

### erlang
```erlang
-spec calc_equation(Equations :: [[unicode:unicode_binary()]], Values :: [float()], Queries :: [[unicode:unicode_binary()]]) -> [float()].
calc_equation(Equations, Values, Queries) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec calc_equation(equations :: [[String.t]], values :: [float], queries :: [[String.t]]) :: [float]
  def calc_equation(equations, values, queries) do
    
  end
end
```
