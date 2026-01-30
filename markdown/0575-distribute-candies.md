# 575. Distribute Candies

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: distribute-candies
- Problem ID: 575

## Description
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
```

### Example 2
```text
Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
```

### Example 3
```text
Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
```


## Constraints
- n == candyType.length
- 2 <= n <= 104
- n is even.
- -105 <= candyType[i] <= 105

## Hints
- To maximize the number of kinds of candies, we should try to distribute candies such that Alice will gain all kinds.
- What is the upper limit of the number of kinds of candies Alice will gain? Remember candies are to distributed equally.
- Which data structure is the most suitable for finding the number of kinds of candies?
- Will hashset solves the problem? Inserting all candies kind in the hashset and then checking its size with upper limit.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        
    }
};
```

### java
```java
class Solution {
    public int distributeCandies(int[] candyType) {
        
    }
}
```

### python
```python
class Solution(object):
    def distributeCandies(self, candyType):
        """
        :type candyType: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
```

### c
```c
int distributeCandies(int* candyType, int candyTypeSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int DistributeCandies(int[] candyType) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    
};
```

### typescript
```typescript
function distributeCandies(candyType: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $candyType
     * @return Integer
     */
    function distributeCandies($candyType) {
        
    }
}
```

### swift
```swift
class Solution {
    func distributeCandies(_ candyType: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun distributeCandies(candyType: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int distributeCandies(List<int> candyType) {
    
  }
}
```

### golang
```golang
func distributeCandies(candyType []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} candy_type
# @return {Integer}
def distribute_candies(candy_type)
    
end
```

### scala
```scala
object Solution {
    def distributeCandies(candyType: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (distribute-candies candyType)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec distribute_candies(CandyType :: [integer()]) -> integer().
distribute_candies(CandyType) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec distribute_candies(candy_type :: [integer]) :: integer
  def distribute_candies(candy_type) do
    
  end
end
```
