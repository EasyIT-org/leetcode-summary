# 857. Minimum Cost to Hire K Workers

- Difficulty: Hard
- Topics: Array, Greedy, Sorting, Heap (Priority Queue)
- Slug: minimum-cost-to-hire-k-workers
- Problem ID: 887

## Description
There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.
We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:
Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
```

### Example 2
```text
Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
Output: 30.66667
Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.
```


## Constraints
- n == quality.length == wage.length
- 1 <= k <= n <= 104
- 1 <= quality[i], wage[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) {
        
    }
};
```

### java
```java
class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def mincostToHireWorkers(self, quality, wage, k):
        """
        :type quality: List[int]
        :type wage: List[int]
        :type k: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
```

### c
```c
double mincostToHireWorkers(int* quality, int qualitySize, int* wage, int wageSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public double MincostToHireWorkers(int[] quality, int[] wage, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    
};
```

### typescript
```typescript
function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $quality
     * @param Integer[] $wage
     * @param Integer $k
     * @return Float
     */
    function mincostToHireWorkers($quality, $wage, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func mincostToHireWorkers(_ quality: [Int], _ wage: [Int], _ k: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mincostToHireWorkers(quality: IntArray, wage: IntArray, k: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double mincostToHireWorkers(List<int> quality, List<int> wage, int k) {
    
  }
}
```

### golang
```golang
func mincostToHireWorkers(quality []int, wage []int, k int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} quality
# @param {Integer[]} wage
# @param {Integer} k
# @return {Float}
def mincost_to_hire_workers(quality, wage, k)
    
end
```

### scala
```scala
object Solution {
    def mincostToHireWorkers(quality: Array[Int], wage: Array[Int], k: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn mincost_to_hire_workers(quality: Vec<i32>, wage: Vec<i32>, k: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (mincost-to-hire-workers quality wage k)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec mincost_to_hire_workers(Quality :: [integer()], Wage :: [integer()], K :: integer()) -> float().
mincost_to_hire_workers(Quality, Wage, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec mincost_to_hire_workers(quality :: [integer], wage :: [integer], k :: integer) :: float
  def mincost_to_hire_workers(quality, wage, k) do
    
  end
end
```
