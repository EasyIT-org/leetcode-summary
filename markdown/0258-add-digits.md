# 258. Add Digits

- Difficulty: Easy
- Topics: Math, Simulation, Number Theory
- Slug: add-digits
- Problem ID: 258

## Description
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
Example 1:
Example 2:
Constraints:
Follow up: Could you do it without any loop/recursion in O(1) runtime?

## Examples
### Example 1
```text
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
```

### Example 2
```text
Input: num = 0
Output: 0
```


## Constraints
- 0 <= num <= 231 - 1

## Hints
- A naive implementation of the above process is trivial. Could you come up with other methods?
- What are all the possible results?
- How do they occur, periodically or randomly?
- You may find this <a href="https://en.wikipedia.org/wiki/Digital_root" target="_blank">Wikipedia article</a> useful.

## Follow Ups
- Could you do it without any loop/recursion in O(1) runtime?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int addDigits(int num) {
        
    }
};
```

### java
```java
class Solution {
    public int addDigits(int num) {
        
    }
}
```

### python
```python
class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def addDigits(self, num: int) -> int:
```

### c
```c
int addDigits(int num) {
    
}
```

### csharp
```csharp
public class Solution {
    public int AddDigits(int num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
};
```

### typescript
```typescript
function addDigits(num: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function addDigits($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func addDigits(_ num: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun addDigits(num: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int addDigits(int num) {
    
  }
}
```

### golang
```golang
func addDigits(num int) int {
    
}
```

### ruby
```ruby
# @param {Integer} num
# @return {Integer}
def add_digits(num)
    
end
```

### scala
```scala
object Solution {
    def addDigits(num: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (add-digits num)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec add_digits(Num :: integer()) -> integer().
add_digits(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec add_digits(num :: integer) :: integer
  def add_digits(num) do
    
  end
end
```
