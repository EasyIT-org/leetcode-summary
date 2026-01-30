# 682. Baseball Game

- Difficulty: Easy
- Topics: Array, Stack, Simulation
- Slug: baseball-game
- Problem ID: 682

## Description
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
Return the sum of all the scores on the record after applying all the operations.
The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
```

### Example 2
```text
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
```

### Example 3
```text
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
```


## Constraints
- 1 <= operations.length <= 1000
- operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
- For operation "+", there will always be at least two previous scores on the record.
- For operations "C" and "D", there will always be at least one previous score on the record.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int calPoints(vector<string>& operations) {
        
    }
};
```

### java
```java
class Solution {
    public int calPoints(String[] operations) {
        
    }
}
```

### python
```python
class Solution(object):
    def calPoints(self, operations):
        """
        :type operations: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def calPoints(self, operations: List[str]) -> int:
```

### c
```c
int calPoints(char** operations, int operationsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CalPoints(string[] operations) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
};
```

### typescript
```typescript
function calPoints(operations: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $operations
     * @return Integer
     */
    function calPoints($operations) {
        
    }
}
```

### swift
```swift
class Solution {
    func calPoints(_ operations: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun calPoints(operations: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int calPoints(List<String> operations) {
    
  }
}
```

### golang
```golang
func calPoints(operations []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} operations
# @return {Integer}
def cal_points(operations)
    
end
```

### scala
```scala
object Solution {
    def calPoints(operations: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn cal_points(operations: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (cal-points operations)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec cal_points(Operations :: [unicode:unicode_binary()]) -> integer().
cal_points(Operations) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec cal_points(operations :: [String.t]) :: integer
  def cal_points(operations) do
    
  end
end
```
