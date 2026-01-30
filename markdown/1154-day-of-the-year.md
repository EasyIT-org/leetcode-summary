# 1154. Day of the Year

- Difficulty: Easy
- Topics: Math, String
- Slug: day-of-the-year
- Problem ID: 1260

## Description
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
```

### Example 2
```text
Input: date = "2019-02-10"
Output: 41
```


## Constraints
- date.length == 10
- date[4] == date[7] == '-', and all other date[i]'s are digits
- date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.

## Hints
- Have a integer array of how many days there are per month.  February gets one extra day if its a leap year.  Then, we can manually count the ordinal as day + (number of days in months before this one).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int dayOfYear(string date) {
        
    }
};
```

### java
```java
class Solution {
    public int dayOfYear(String date) {
        
    }
}
```

### python
```python
class Solution(object):
    def dayOfYear(self, date):
        """
        :type date: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def dayOfYear(self, date: str) -> int:
```

### c
```c
int dayOfYear(char* date) {
    
}
```

### csharp
```csharp
public class Solution {
    public int DayOfYear(string date) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    
};
```

### typescript
```typescript
function dayOfYear(date: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $date
     * @return Integer
     */
    function dayOfYear($date) {
        
    }
}
```

### swift
```swift
class Solution {
    func dayOfYear(_ date: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun dayOfYear(date: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int dayOfYear(String date) {
    
  }
}
```

### golang
```golang
func dayOfYear(date string) int {
    
}
```

### ruby
```ruby
# @param {String} date
# @return {Integer}
def day_of_year(date)
    
end
```

### scala
```scala
object Solution {
    def dayOfYear(date: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn day_of_year(date: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (day-of-year date)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec day_of_year(Date :: unicode:unicode_binary()) -> integer().
day_of_year(Date) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec day_of_year(date :: String.t) :: integer
  def day_of_year(date) do
    
  end
end
```
