# 605. Can Place Flowers

- Difficulty: Easy
- Topics: Array, Greedy
- Slug: can-place-flowers
- Problem ID: 605

## Description
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

### Example 2
```text
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```


## Constraints
- 1 <= flowerbed.length <= 2 * 104
- flowerbed[i] is 0 or 1.
- There are no two adjacent flowers in flowerbed.
- 0 <= n <= flowerbed.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
```

### c
```c
bool canPlaceFlowers(int* flowerbed, int flowerbedSize, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
};
```

### typescript
```typescript
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $flowerbed
     * @param Integer $n
     * @return Boolean
     */
    function canPlaceFlowers($flowerbed, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func canPlaceFlowers(_ flowerbed: [Int], _ n: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canPlaceFlowers(flowerbed: IntArray, n: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canPlaceFlowers(List<int> flowerbed, int n) {
    
  }
}
```

### golang
```golang
func canPlaceFlowers(flowerbed []int, n int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def can_place_flowers(flowerbed, n)
    
end
```

### scala
```scala
object Solution {
    def canPlaceFlowers(flowerbed: Array[Int], n: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-place-flowers flowerbed n)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec can_place_flowers(Flowerbed :: [integer()], N :: integer()) -> boolean().
can_place_flowers(Flowerbed, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_place_flowers(flowerbed :: [integer], n :: integer) :: boolean
  def can_place_flowers(flowerbed, n) do
    
  end
end
```
