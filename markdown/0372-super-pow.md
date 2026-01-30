# 372. Super Pow

- Difficulty: Medium
- Topics: Math, Divide and Conquer
- Slug: super-pow
- Problem ID: 372

## Description
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: a = 2, b = [3]
Output: 8
```

### Example 2
```text
Input: a = 2, b = [1,0]
Output: 1024
```

### Example 3
```text
Input: a = 1, b = [4,3,3,8,5,2]
Output: 1
```


## Constraints
- 1 <= a <= 231 - 1
- 1 <= b.length <= 2000
- 0 <= b[i] <= 9
- b does not contain leading zeros.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int superPow(int a, vector<int>& b) {
        
    }
};
```

### java
```java
class Solution {
    public int superPow(int a, int[] b) {
        
    }
}
```

### python
```python
class Solution(object):
    def superPow(self, a, b):
        """
        :type a: int
        :type b: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def superPow(self, a: int, b: List[int]) -> int:
```

### c
```c
int superPow(int a, int* b, int bSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SuperPow(int a, int[] b) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    
};
```

### typescript
```typescript
function superPow(a: number, b: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $a
     * @param Integer[] $b
     * @return Integer
     */
    function superPow($a, $b) {
        
    }
}
```

### swift
```swift
class Solution {
    func superPow(_ a: Int, _ b: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun superPow(a: Int, b: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int superPow(int a, List<int> b) {
    
  }
}
```

### golang
```golang
func superPow(a int, b []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} a
# @param {Integer[]} b
# @return {Integer}
def super_pow(a, b)
    
end
```

### scala
```scala
object Solution {
    def superPow(a: Int, b: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn super_pow(a: i32, b: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (super-pow a b)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec super_pow(A :: integer(), B :: [integer()]) -> integer().
super_pow(A, B) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec super_pow(a :: integer, b :: [integer]) :: integer
  def super_pow(a, b) do
    
  end
end
```
