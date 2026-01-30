# 552. Student Attendance Record II

- Difficulty: Hard
- Topics: Dynamic Programming
- Slug: student-attendance-record-ii
- Problem ID: 552

## Description
An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
Any student is eligible for an attendance award if they meet both of the following criteria:
Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
```

### Example 2
```text
Input: n = 1
Output: 3
```

### Example 3
```text
Input: n = 10101
Output: 183236316
```


## Constraints
- 1 <= n <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int checkRecord(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int checkRecord(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkRecord(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def checkRecord(self, n: int) -> int:
```

### c
```c
int checkRecord(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CheckRecord(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    
};
```

### typescript
```typescript
function checkRecord(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function checkRecord($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkRecord(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkRecord(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int checkRecord(int n) {
    
  }
}
```

### golang
```golang
func checkRecord(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def check_record(n)
    
end
```

### scala
```scala
object Solution {
    def checkRecord(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_record(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (check-record n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec check_record(N :: integer()) -> integer().
check_record(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_record(n :: integer) :: integer
  def check_record(n) do
    
  end
end
```
