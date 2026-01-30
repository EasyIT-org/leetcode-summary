# 551. Student Attendance Record I

- Difficulty: Easy
- Topics: String
- Slug: student-attendance-record-i
- Problem ID: 551

## Description
You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
The student is eligible for an attendance award if they meet both of the following criteria:
Return true if the student is eligible for an attendance award, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
```

### Example 2
```text
Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
```


## Constraints
- 1 <= s.length <= 1000
- s[i] is either 'A', 'L', or 'P'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool checkRecord(string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean checkRecord(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkRecord(self, s):
        """
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def checkRecord(self, s: str) -> bool:
```

### c
```c
bool checkRecord(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CheckRecord(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
};
```

### typescript
```typescript
function checkRecord(s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkRecord($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkRecord(_ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkRecord(s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool checkRecord(String s) {
    
  }
}
```

### golang
```golang
func checkRecord(s string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Boolean}
def check_record(s)
    
end
```

### scala
```scala
object Solution {
    def checkRecord(s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_record(s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (check-record s)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec check_record(S :: unicode:unicode_binary()) -> boolean().
check_record(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_record(s :: String.t) :: boolean
  def check_record(s) do
    
  end
end
```
