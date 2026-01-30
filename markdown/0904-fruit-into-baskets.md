# 904. Fruit Into Baskets

- Difficulty: Medium
- Topics: Array, Hash Table, Sliding Window
- Slug: fruit-into-baskets
- Problem ID: 940

## Description
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
Given the integer array fruits, return the maximum number of fruits you can pick.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
```

### Example 2
```text
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
```

### Example 3
```text
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
```


## Constraints
- 1 <= fruits.length <= 105
- 0 <= fruits[i] < fruits.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        
    }
};
```

### java
```java
class Solution {
    public int totalFruit(int[] fruits) {
        
    }
}
```

### python
```python
class Solution(object):
    def totalFruit(self, fruits):
        """
        :type fruits: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
```

### c
```c
int totalFruit(int* fruits, int fruitsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TotalFruit(int[] fruits) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
};
```

### typescript
```typescript
function totalFruit(fruits: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $fruits
     * @return Integer
     */
    function totalFruit($fruits) {
        
    }
}
```

### swift
```swift
class Solution {
    func totalFruit(_ fruits: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun totalFruit(fruits: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int totalFruit(List<int> fruits) {
    
  }
}
```

### golang
```golang
func totalFruit(fruits []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} fruits
# @return {Integer}
def total_fruit(fruits)
    
end
```

### scala
```scala
object Solution {
    def totalFruit(fruits: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn total_fruit(fruits: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (total-fruit fruits)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec total_fruit(Fruits :: [integer()]) -> integer().
total_fruit(Fruits) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec total_fruit(fruits :: [integer]) :: integer
  def total_fruit(fruits) do
    
  end
end
```
