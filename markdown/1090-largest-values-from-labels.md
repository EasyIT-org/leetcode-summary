# 1090. Largest Values From Labels

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Sorting, Counting
- Slug: largest-values-from-labels
- Problem ID: 1169

## Description
You are given n item's value and label as two integer arrays values and labels. You are also given two integers numWanted and useLimit.
Your task is to find a subset of items with the maximum sum of their values such that:
Return the maximum sum.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
Output: 9
Explanation:
The subset chosen is the first, third, and fifth items with the sum of values 5 + 3 + 1.
```

### Example 2
```text
Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
Output: 12
Explanation:
The subset chosen is the first, second, and third items with the sum of values 5 + 4 + 3.
```

### Example 3
```text
Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
Output: 16
Explanation:
The subset chosen is the first and fourth items with the sum of values 9 + 7.
```


## Constraints
- n == values.length == labels.length
- 1 <= n <= 2 * 104
- 0 <= values[i], labels[i] <= 2 * 104
- 1 <= numWanted, useLimit <= n

## Hints
- Consider the items in order from largest to smallest value, and greedily take the items if they fall under the use_limit.  We can keep track of how many items of each label are used by using a hash table.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largestValsFromLabels(vector<int>& values, vector<int>& labels, int numWanted, int useLimit) {
        
    }
};
```

### java
```java
class Solution {
    public int largestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestValsFromLabels(self, values, labels, numWanted, useLimit):
        """
        :type values: List[int]
        :type labels: List[int]
        :type numWanted: int
        :type useLimit: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestValsFromLabels(self, values: List[int], labels: List[int], numWanted: int, useLimit: int) -> int:
```

### c
```c
int largestValsFromLabels(int* values, int valuesSize, int* labels, int labelsSize, int numWanted, int useLimit) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    
};
```

### typescript
```typescript
function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $values
     * @param Integer[] $labels
     * @param Integer $numWanted
     * @param Integer $useLimit
     * @return Integer
     */
    function largestValsFromLabels($values, $labels, $numWanted, $useLimit) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestValsFromLabels(_ values: [Int], _ labels: [Int], _ numWanted: Int, _ useLimit: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestValsFromLabels(values: IntArray, labels: IntArray, numWanted: Int, useLimit: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestValsFromLabels(List<int> values, List<int> labels, int numWanted, int useLimit) {
    
  }
}
```

### golang
```golang
func largestValsFromLabels(values []int, labels []int, numWanted int, useLimit int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} values
# @param {Integer[]} labels
# @param {Integer} num_wanted
# @param {Integer} use_limit
# @return {Integer}
def largest_vals_from_labels(values, labels, num_wanted, use_limit)
    
end
```

### scala
```scala
object Solution {
    def largestValsFromLabels(values: Array[Int], labels: Array[Int], numWanted: Int, useLimit: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_vals_from_labels(values: Vec<i32>, labels: Vec<i32>, num_wanted: i32, use_limit: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-vals-from-labels values labels numWanted useLimit)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec largest_vals_from_labels(Values :: [integer()], Labels :: [integer()], NumWanted :: integer(), UseLimit :: integer()) -> integer().
largest_vals_from_labels(Values, Labels, NumWanted, UseLimit) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_vals_from_labels(values :: [integer], labels :: [integer], num_wanted :: integer, use_limit :: integer) :: integer
  def largest_vals_from_labels(values, labels, num_wanted, use_limit) do
    
  end
end
```
