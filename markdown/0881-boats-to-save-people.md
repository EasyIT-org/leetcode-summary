# 881. Boats to Save People

- Difficulty: Medium
- Topics: Array, Two Pointers, Greedy, Sorting
- Slug: boats-to-save-people
- Problem ID: 917

## Description
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
```

### Example 2
```text
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
```

### Example 3
```text
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
```


## Constraints
- 1 <= people.length <= 5 * 104
- 1 <= people[i] <= limit <= 3 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        
    }
};
```

### java
```java
class Solution {
    public int numRescueBoats(int[] people, int limit) {
        
    }
}
```

### python
```python
class Solution(object):
    def numRescueBoats(self, people, limit):
        """
        :type people: List[int]
        :type limit: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
```

### c
```c
int numRescueBoats(int* people, int peopleSize, int limit) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumRescueBoats(int[] people, int limit) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
};
```

### typescript
```typescript
function numRescueBoats(people: number[], limit: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $people
     * @param Integer $limit
     * @return Integer
     */
    function numRescueBoats($people, $limit) {
        
    }
}
```

### swift
```swift
class Solution {
    func numRescueBoats(_ people: [Int], _ limit: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numRescueBoats(people: IntArray, limit: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numRescueBoats(List<int> people, int limit) {
    
  }
}
```

### golang
```golang
func numRescueBoats(people []int, limit int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} people
# @param {Integer} limit
# @return {Integer}
def num_rescue_boats(people, limit)
    
end
```

### scala
```scala
object Solution {
    def numRescueBoats(people: Array[Int], limit: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_rescue_boats(people: Vec<i32>, limit: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-rescue-boats people limit)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_rescue_boats(People :: [integer()], Limit :: integer()) -> integer().
num_rescue_boats(People, Limit) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_rescue_boats(people :: [integer], limit :: integer) :: integer
  def num_rescue_boats(people, limit) do
    
  end
end
```
