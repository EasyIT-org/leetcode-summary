# 826. Most Profit Assigning Work

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Greedy, Sorting
- Slug: most-profit-assigning-work
- Problem ID: 853

## Description
You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:
Every worker can be assigned at most one job, but one job can be completed multiple times.
Return the maximum profit we can achieve after assigning the workers to the jobs.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
```

### Example 2
```text
Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
Output: 0
```


## Constraints
- n == difficulty.length
- n == profit.length
- m == worker.length
- 1 <= n, m <= 104
- 1 <= difficulty[i], profit[i], worker[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        
    }
};
```

### java
```java
class Solution {
    public int maxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxProfitAssignment(self, difficulty, profit, worker):
        """
        :type difficulty: List[int]
        :type profit: List[int]
        :type worker: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
```

### c
```c
int maxProfitAssignment(int* difficulty, int difficultySize, int* profit, int profitSize, int* worker, int workerSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    
};
```

### typescript
```typescript
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $difficulty
     * @param Integer[] $profit
     * @param Integer[] $worker
     * @return Integer
     */
    function maxProfitAssignment($difficulty, $profit, $worker) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxProfitAssignment(_ difficulty: [Int], _ profit: [Int], _ worker: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxProfitAssignment(difficulty: IntArray, profit: IntArray, worker: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxProfitAssignment(List<int> difficulty, List<int> profit, List<int> worker) {
    
  }
}
```

### golang
```golang
func maxProfitAssignment(difficulty []int, profit []int, worker []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} difficulty
# @param {Integer[]} profit
# @param {Integer[]} worker
# @return {Integer}
def max_profit_assignment(difficulty, profit, worker)
    
end
```

### scala
```scala
object Solution {
    def maxProfitAssignment(difficulty: Array[Int], profit: Array[Int], worker: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_profit_assignment(difficulty: Vec<i32>, profit: Vec<i32>, worker: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-profit-assignment difficulty profit worker)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_profit_assignment(Difficulty :: [integer()], Profit :: [integer()], Worker :: [integer()]) -> integer().
max_profit_assignment(Difficulty, Profit, Worker) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_profit_assignment(difficulty :: [integer], profit :: [integer], worker :: [integer]) :: integer
  def max_profit_assignment(difficulty, profit, worker) do
    
  end
end
```
