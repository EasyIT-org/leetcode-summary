# 1052. Grumpy Bookstore Owner

- Difficulty: Medium
- Topics: Array, Sliding Window
- Slug: grumpy-bookstore-owner
- Problem ID: 1138

## Description
There is a bookstore owner that has a store open for n minutes. You are given an integer array customers of length n where customers[i] is the number of the customers that enter the store at the start of the ith minute and all those customers leave after the end of that minute.
During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.
The bookstore owner knows a secret technique to remain not grumpy for minutes consecutive minutes, but this technique can only be used once.
Return the maximum number of customers that can be satisfied throughout the day.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation:
The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

### Example 2
```text
Input: customers = [1], grumpy = [0], minutes = 1
Output: 1
```


## Constraints
- n == customers.length == grumpy.length
- 1 <= minutes <= n <= 2 * 104
- 0 <= customers[i] <= 1000
- grumpy[i] is either 0 or 1.

## Hints
- Say the store owner uses their power in minute 1 to X and we have some answer A.  If they instead use their power from minute 2 to X+1, we only have to use data from minutes 1, 2, X and X+1 to update our answer A.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSatisfied(self, customers, grumpy, minutes):
        """
        :type customers: List[int]
        :type grumpy: List[int]
        :type minutes: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
```

### c
```c
int maxSatisfied(int* customers, int customersSize, int* grumpy, int grumpySize, int minutes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSatisfied(int[] customers, int[] grumpy, int minutes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
};
```

### typescript
```typescript
function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $customers
     * @param Integer[] $grumpy
     * @param Integer $minutes
     * @return Integer
     */
    function maxSatisfied($customers, $grumpy, $minutes) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSatisfied(_ customers: [Int], _ grumpy: [Int], _ minutes: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSatisfied(customers: IntArray, grumpy: IntArray, minutes: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSatisfied(List<int> customers, List<int> grumpy, int minutes) {
    
  }
}
```

### golang
```golang
func maxSatisfied(customers []int, grumpy []int, minutes int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} customers
# @param {Integer[]} grumpy
# @param {Integer} minutes
# @return {Integer}
def max_satisfied(customers, grumpy, minutes)
    
end
```

### scala
```scala
object Solution {
    def maxSatisfied(customers: Array[Int], grumpy: Array[Int], minutes: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_satisfied(customers: Vec<i32>, grumpy: Vec<i32>, minutes: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-satisfied customers grumpy minutes)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec max_satisfied(Customers :: [integer()], Grumpy :: [integer()], Minutes :: integer()) -> integer().
max_satisfied(Customers, Grumpy, Minutes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_satisfied(customers :: [integer], grumpy :: [integer], minutes :: integer) :: integer
  def max_satisfied(customers, grumpy, minutes) do
    
  end
end
```
