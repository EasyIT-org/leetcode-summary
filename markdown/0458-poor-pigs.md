# 458. Poor Pigs

- Difficulty: Hard
- Topics: Math, Dynamic Programming, Combinatorics
- Slug: poor-pigs
- Problem ID: 458

## Description
There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous.
You can feed the pigs according to these steps:
Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: buckets = 4, minutesToDie = 15, minutesToTest = 15
Output: 2
Explanation: We can determine the poisonous bucket as follows:
At time 0, feed the first pig buckets 1 and 2, and feed the second pig buckets 2 and 3.
At time 15, there are 4 possible outcomes:
- If only the first pig dies, then bucket 1 must be poisonous.
- If only the second pig dies, then bucket 3 must be poisonous.
- If both pigs die, then bucket 2 must be poisonous.
- If neither pig dies, then bucket 4 must be poisonous.
```

### Example 2
```text
Input: buckets = 4, minutesToDie = 15, minutesToTest = 30
Output: 2
Explanation: We can determine the poisonous bucket as follows:
At time 0, feed the first pig bucket 1, and feed the second pig bucket 2.
At time 15, there are 2 possible outcomes:
- If either pig dies, then the poisonous bucket is the one it was fed.
- If neither pig dies, then feed the first pig bucket 3, and feed the second pig bucket 4.
At time 30, one of the two pigs must die, and the poisonous bucket is the one it was fed.
```


## Constraints
- 1 <= buckets <= 1000
- 1 <= minutesToDie <= minutesToTest <= 100

## Hints
- What if you only have one shot? Eg. 4 buckets, 15 mins to die, and 15 mins to test.
- How many states can we generate with x pigs and T tests?
- Find minimum <code>x</code> such that <code>(T+1)^x >= N</code>

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        
    }
};
```

### java
```java
class Solution {
    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        
    }
}
```

### python
```python
class Solution(object):
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        """
        :type buckets: int
        :type minutesToDie: int
        :type minutesToTest: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:
```

### c
```c
int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
    
}
```

### csharp
```csharp
public class Solution {
    public int PoorPigs(int buckets, int minutesToDie, int minutesToTest) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    
};
```

### typescript
```typescript
function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $buckets
     * @param Integer $minutesToDie
     * @param Integer $minutesToTest
     * @return Integer
     */
    function poorPigs($buckets, $minutesToDie, $minutesToTest) {
        
    }
}
```

### swift
```swift
class Solution {
    func poorPigs(_ buckets: Int, _ minutesToDie: Int, _ minutesToTest: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun poorPigs(buckets: Int, minutesToDie: Int, minutesToTest: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
    
  }
}
```

### golang
```golang
func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
    
}
```

### ruby
```ruby
# @param {Integer} buckets
# @param {Integer} minutes_to_die
# @param {Integer} minutes_to_test
# @return {Integer}
def poor_pigs(buckets, minutes_to_die, minutes_to_test)
    
end
```

### scala
```scala
object Solution {
    def poorPigs(buckets: Int, minutesToDie: Int, minutesToTest: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn poor_pigs(buckets: i32, minutes_to_die: i32, minutes_to_test: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (poor-pigs buckets minutesToDie minutesToTest)
  (-> exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec poor_pigs(Buckets :: integer(), MinutesToDie :: integer(), MinutesToTest :: integer()) -> integer().
poor_pigs(Buckets, MinutesToDie, MinutesToTest) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec poor_pigs(buckets :: integer, minutes_to_die :: integer, minutes_to_test :: integer) :: integer
  def poor_pigs(buckets, minutes_to_die, minutes_to_test) do
    
  end
end
```
