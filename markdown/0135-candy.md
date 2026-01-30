# 135. Candy

- Difficulty: Hard
- Topics: Array, Greedy
- Slug: candy
- Problem ID: 135

## Description
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Return the minimum number of candies you need to have to distribute the candies to the children.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
```

### Example 2
```text
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
```


## Constraints
- n == ratings.length
- 1 <= n <= 2 * 104
- 0 <= ratings[i] <= 2 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int candy(vector<int>& ratings) {
        
    }
};
```

### java
```java
class Solution {
    public int candy(int[] ratings) {
        
    }
}
```

### python
```python
class Solution(object):
    def candy(self, ratings):
        """
        :type ratings: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def candy(self, ratings: List[int]) -> int:
```

### c
```c
int candy(int* ratings, int ratingsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Candy(int[] ratings) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
};
```

### typescript
```typescript
function candy(ratings: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $ratings
     * @return Integer
     */
    function candy($ratings) {
        
    }
}
```

### swift
```swift
class Solution {
    func candy(_ ratings: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun candy(ratings: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int candy(List<int> ratings) {
    
  }
}
```

### golang
```golang
func candy(ratings []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} ratings
# @return {Integer}
def candy(ratings)
    
end
```

### scala
```scala
object Solution {
    def candy(ratings: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn candy(ratings: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (candy ratings)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec candy(Ratings :: [integer()]) -> integer().
candy(Ratings) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec candy(ratings :: [integer]) :: integer
  def candy(ratings) do
    
  end
end
```
