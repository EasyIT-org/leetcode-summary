# 1185. Day of the Week

- Difficulty: Easy
- Topics: Math
- Slug: day-of-the-week
- Problem ID: 1289

## Description
Given a date, return the corresponding day of the week for that date.
The input is given as three integers representing the day, month and year respectively.
Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: day = 31, month = 8, year = 2019
Output: "Saturday"
```

### Example 2
```text
Input: day = 18, month = 7, year = 1999
Output: "Sunday"
```

### Example 3
```text
Input: day = 15, month = 8, year = 1993
Output: "Sunday"
```


## Constraints
- The given dates are valid dates between the years 1971 and 2100.

## Hints
- Sum up the number of days for the years before the given year.
- Handle the case of a leap year.
- Find the number of days for each month of the given year.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string dayOfTheWeek(int day, int month, int year) {
        
    }
};
```

### java
```java
class Solution {
    public String dayOfTheWeek(int day, int month, int year) {
        
    }
}
```

### python
```python
class Solution(object):
    def dayOfTheWeek(self, day, month, year):
        """
        :type day: int
        :type month: int
        :type year: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
```

### c
```c
char* dayOfTheWeek(int day, int month, int year) {
    
}
```

### csharp
```csharp
public class Solution {
    public string DayOfTheWeek(int day, int month, int year) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    
};
```

### typescript
```typescript
function dayOfTheWeek(day: number, month: number, year: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $day
     * @param Integer $month
     * @param Integer $year
     * @return String
     */
    function dayOfTheWeek($day, $month, $year) {
        
    }
}
```

### swift
```swift
class Solution {
    func dayOfTheWeek(_ day: Int, _ month: Int, _ year: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun dayOfTheWeek(day: Int, month: Int, year: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String dayOfTheWeek(int day, int month, int year) {
    
  }
}
```

### golang
```golang
func dayOfTheWeek(day int, month int, year int) string {
    
}
```

### ruby
```ruby
# @param {Integer} day
# @param {Integer} month
# @param {Integer} year
# @return {String}
def day_of_the_week(day, month, year)
    
end
```

### scala
```scala
object Solution {
    def dayOfTheWeek(day: Int, month: Int, year: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn day_of_the_week(day: i32, month: i32, year: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (day-of-the-week day month year)
  (-> exact-integer? exact-integer? exact-integer? string?)
  )
```

### erlang
```erlang
-spec day_of_the_week(Day :: integer(), Month :: integer(), Year :: integer()) -> unicode:unicode_binary().
day_of_the_week(Day, Month, Year) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec day_of_the_week(day :: integer, month :: integer, year :: integer) :: String.t
  def day_of_the_week(day, month, year) do
    
  end
end
```
