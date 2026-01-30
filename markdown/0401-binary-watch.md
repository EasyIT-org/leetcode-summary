# 401. Binary Watch

- Difficulty: Easy
- Topics: Backtracking, Bit Manipulation
- Slug: binary-watch
- Problem ID: 401

## Description
A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.
The hour must not contain a leading zero.
The minute must consist of two digits and may contain a leading zero.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
```
Images:
- https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg

### Example 2
```text
Input: turnedOn = 9
Output: []
```
Images:
- https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg


## Constraints
- 0 <= turnedOn <= 10

## Hints
- Simplify by seeking for solutions that involve comparing bit counts.
- Consider calculating all possible times for comparison purposes.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> readBinaryWatch(int turnedOn) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> readBinaryWatch(int turnedOn) {
        
    }
}
```

### python
```python
class Solution(object):
    def readBinaryWatch(self, turnedOn):
        """
        :type turnedOn: int
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** readBinaryWatch(int turnedOn, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> ReadBinaryWatch(int turnedOn) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    
};
```

### typescript
```typescript
function readBinaryWatch(turnedOn: number): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $turnedOn
     * @return String[]
     */
    function readBinaryWatch($turnedOn) {
        
    }
}
```

### swift
```swift
class Solution {
    func readBinaryWatch(_ turnedOn: Int) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun readBinaryWatch(turnedOn: Int): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> readBinaryWatch(int turnedOn) {
    
  }
}
```

### golang
```golang
func readBinaryWatch(turnedOn int) []string {
    
}
```

### ruby
```ruby
# @param {Integer} turned_on
# @return {String[]}
def read_binary_watch(turned_on)
    
end
```

### scala
```scala
object Solution {
    def readBinaryWatch(turnedOn: Int): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (read-binary-watch turnedOn)
  (-> exact-integer? (listof string?))
  )
```

### erlang
```erlang
-spec read_binary_watch(TurnedOn :: integer()) -> [unicode:unicode_binary()].
read_binary_watch(TurnedOn) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec read_binary_watch(turned_on :: integer) :: [String.t]
  def read_binary_watch(turned_on) do
    
  end
end
```
