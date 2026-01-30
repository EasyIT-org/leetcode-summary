# 466. Count The Repetitions

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: count-the-repetitions
- Problem ID: 466

## Description
We define str = [s, n] as the string str which consists of the string s concatenated n times.
We define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1.
You are given two strings s1 and s2 and two integers n1 and n2. You have the two strings str1 = [s1, n1] and str2 = [s2, n2].
Return the maximum integer m such that str = [str2, m] can be obtained from str1.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
Output: 2
```

### Example 2
```text
Input: s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
Output: 1
```


## Constraints
- 1 <= s1.length, s2.length <= 100
- s1 and s2 consist of lowercase English letters.
- 1 <= n1, n2 <= 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int getMaxRepetitions(string s1, int n1, string s2, int n2) {
        
    }
};
```

### java
```java
class Solution {
    public int getMaxRepetitions(String s1, int n1, String s2, int n2) {
        
    }
}
```

### python
```python
class Solution(object):
    def getMaxRepetitions(self, s1, n1, s2, n2):
        """
        :type s1: str
        :type n1: int
        :type s2: str
        :type n2: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def getMaxRepetitions(self, s1: str, n1: int, s2: str, n2: int) -> int:
```

### c
```c
int getMaxRepetitions(char* s1, int n1, char* s2, int n2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int GetMaxRepetitions(string s1, int n1, string s2, int n2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    
};
```

### typescript
```typescript
function getMaxRepetitions(s1: string, n1: number, s2: string, n2: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param Integer $n1
     * @param String $s2
     * @param Integer $n2
     * @return Integer
     */
    function getMaxRepetitions($s1, $n1, $s2, $n2) {
        
    }
}
```

### swift
```swift
class Solution {
    func getMaxRepetitions(_ s1: String, _ n1: Int, _ s2: String, _ n2: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getMaxRepetitions(s1: String, n1: Int, s2: String, n2: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int getMaxRepetitions(String s1, int n1, String s2, int n2) {
    
  }
}
```

### golang
```golang
func getMaxRepetitions(s1 string, n1 int, s2 string, n2 int) int {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {Integer} n1
# @param {String} s2
# @param {Integer} n2
# @return {Integer}
def get_max_repetitions(s1, n1, s2, n2)
    
end
```

### scala
```scala
object Solution {
    def getMaxRepetitions(s1: String, n1: Int, s2: String, n2: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_max_repetitions(s1: String, n1: i32, s2: String, n2: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (get-max-repetitions s1 n1 s2 n2)
  (-> string? exact-integer? string? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec get_max_repetitions(S1 :: unicode:unicode_binary(), N1 :: integer(), S2 :: unicode:unicode_binary(), N2 :: integer()) -> integer().
get_max_repetitions(S1, N1, S2, N2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_max_repetitions(s1 :: String.t, n1 :: integer, s2 :: String.t, n2 :: integer) :: integer
  def get_max_repetitions(s1, n1, s2, n2) do
    
  end
end
```
