# 1093. Statistics from a Large Sample

- Difficulty: Medium
- Topics: Array, Math, Probability and Statistics
- Slug: statistics-from-a-large-sample
- Problem ID: 1183

## Description
You are given a large sample of integers in the range [0, 255]. Since the sample is so large, it is represented by an array count where count[k] is the number of times that k appears in the sample.
Calculate the following statistics:
Return the statistics of the sample as an array of floating-point numbers [minimum, maximum, mean, median, mode]. Answers within 10-5 of the actual answer will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.37500,2.50000,3.00000]
Explanation: The sample represented by count is [1,2,2,2,3,3,3,3].
The minimum and maximum are 1 and 3 respectively.
The mean is (1+2+2+2+3+3+3+3) / 8 = 19 / 8 = 2.375.
Since the size of the sample is even, the median is the average of the two middle elements 2 and 3, which is 2.5.
The mode is 3 as it appears the most in the sample.
```

### Example 2
```text
Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
Explanation: The sample represented by count is [1,1,1,1,2,2,2,3,3,4,4].
The minimum and maximum are 1 and 4 respectively.
The mean is (1+1+1+1+2+2+2+3+3+4+4) / 11 = 24 / 11 = 2.18181818... (for display purposes, the output shows the rounded number 2.18182).
Since the size of the sample is odd, the median is the middle element 2.
The mode is 1 as it appears the most in the sample.
```


## Constraints
- count.length == 256
- 0 <= count[i] <= 109
- 1 <= sum(count) <= 109
- The mode of the sample that count represents is unique.

## Hints
- The hard part is the median.  Write a helper function which finds the k-th element from the sample.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<double> sampleStats(vector<int>& count) {
        
    }
};
```

### java
```java
class Solution {
    public double[] sampleStats(int[] count) {
        
    }
}
```

### python
```python
class Solution(object):
    def sampleStats(self, count):
        """
        :type count: List[int]
        :rtype: List[float]
        """
```

### python3
```python3
class Solution:
    def sampleStats(self, count: List[int]) -> List[float]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* sampleStats(int* count, int countSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public double[] SampleStats(int[] count) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    
};
```

### typescript
```typescript
function sampleStats(count: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $count
     * @return Float[]
     */
    function sampleStats($count) {
        
    }
}
```

### swift
```swift
class Solution {
    func sampleStats(_ count: [Int]) -> [Double] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sampleStats(count: IntArray): DoubleArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<double> sampleStats(List<int> count) {
    
  }
}
```

### golang
```golang
func sampleStats(count []int) []float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} count
# @return {Float[]}
def sample_stats(count)
    
end
```

### scala
```scala
object Solution {
    def sampleStats(count: Array[Int]): Array[Double] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sample_stats(count: Vec<i32>) -> Vec<f64> {
        
    }
}
```

### racket
```racket
(define/contract (sample-stats count)
  (-> (listof exact-integer?) (listof flonum?))
  )
```

### erlang
```erlang
-spec sample_stats(Count :: [integer()]) -> [float()].
sample_stats(Count) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sample_stats(count :: [integer]) :: [float]
  def sample_stats(count) do
    
  end
end
```
