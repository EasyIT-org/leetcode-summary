# 781. Rabbits in Forest

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Greedy
- Slug: rabbits-in-forest
- Problem ID: 797

## Description
There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.
Given the array answers, return the minimum number of rabbits that could be in the forest.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: answers = [1,1,2]
Output: 5
Explanation:
The two rabbits that answered "1" could both be the same color, say red.
The rabbit that answered "2" can't be red or the answers would be inconsistent.
Say the rabbit that answered "2" was blue.
Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.
```

### Example 2
```text
Input: answers = [10,10,10]
Output: 11
```


## Constraints
- 1 <= answers.length <= 1000
- 0 <= answers[i] < 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numRabbits(vector<int>& answers) {
        
    }
};
```

### java
```java
class Solution {
    public int numRabbits(int[] answers) {
        
    }
}
```

### python
```python
class Solution(object):
    def numRabbits(self, answers):
        """
        :type answers: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numRabbits(self, answers: List[int]) -> int:
```

### c
```c
int numRabbits(int* answers, int answersSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumRabbits(int[] answers) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    
};
```

### typescript
```typescript
function numRabbits(answers: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $answers
     * @return Integer
     */
    function numRabbits($answers) {
        
    }
}
```

### swift
```swift
class Solution {
    func numRabbits(_ answers: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numRabbits(answers: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numRabbits(List<int> answers) {
    
  }
}
```

### golang
```golang
func numRabbits(answers []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} answers
# @return {Integer}
def num_rabbits(answers)
    
end
```

### scala
```scala
object Solution {
    def numRabbits(answers: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_rabbits(answers: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-rabbits answers)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_rabbits(Answers :: [integer()]) -> integer().
num_rabbits(Answers) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_rabbits(answers :: [integer]) :: integer
  def num_rabbits(answers) do
    
  end
end
```
