# 949. Largest Time for Given Digits

- Difficulty: Medium
- Topics: Array, String, Backtracking, Enumeration
- Slug: largest-time-for-given-digits
- Problem ID: 986

## Description
Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.
24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.
Return the latest 24-hour time in "HH:MM" format. If no valid time can be made, return an empty string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,3,4]
Output: "23:41"
Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
```

### Example 2
```text
Input: arr = [5,5,5,5]
Output: ""
Explanation: There are no valid 24-hour times as "55:55" is not valid.
```


## Constraints
- arr.length == 4
- 0 <= arr[i] <= 9

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string largestTimeFromDigits(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public String largestTimeFromDigits(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestTimeFromDigits(self, arr):
        """
        :type arr: List[int]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def largestTimeFromDigits(self, arr: List[int]) -> str:
```

### c
```c
char* largestTimeFromDigits(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LargestTimeFromDigits(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    
};
```

### typescript
```typescript
function largestTimeFromDigits(arr: number[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return String
     */
    function largestTimeFromDigits($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestTimeFromDigits(_ arr: [Int]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestTimeFromDigits(arr: IntArray): String {
        
    }
}
```

### dart
```dart
class Solution {
  String largestTimeFromDigits(List<int> arr) {
    
  }
}
```

### golang
```golang
func largestTimeFromDigits(arr []int) string {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {String}
def largest_time_from_digits(arr)
    
end
```

### scala
```scala
object Solution {
    def largestTimeFromDigits(arr: Array[Int]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_time_from_digits(arr: Vec<i32>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (largest-time-from-digits arr)
  (-> (listof exact-integer?) string?)
  )
```

### erlang
```erlang
-spec largest_time_from_digits(Arr :: [integer()]) -> unicode:unicode_binary().
largest_time_from_digits(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_time_from_digits(arr :: [integer]) :: String.t
  def largest_time_from_digits(arr) do
    
  end
end
```
