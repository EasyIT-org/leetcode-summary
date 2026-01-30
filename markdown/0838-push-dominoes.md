# 838. Push Dominoes

- Difficulty: Medium
- Topics: Two Pointers, String, Dynamic Programming
- Slug: push-dominoes
- Problem ID: 868

## Description
There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.
You are given a string dominoes representing the initial state where:
Return a string representing the final state.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
```

### Example 2
```text
Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/05/18/domino.png


## Constraints
- n == dominoes.length
- 1 <= n <= 105
- dominoes[i] is either 'L', 'R', or '.'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string pushDominoes(string dominoes) {
        
    }
};
```

### java
```java
class Solution {
    public String pushDominoes(String dominoes) {
        
    }
}
```

### python
```python
class Solution(object):
    def pushDominoes(self, dominoes):
        """
        :type dominoes: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def pushDominoes(self, dominoes: str) -> str:
```

### c
```c
char* pushDominoes(char* dominoes) {
    
}
```

### csharp
```csharp
public class Solution {
    public string PushDominoes(string dominoes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    
};
```

### typescript
```typescript
function pushDominoes(dominoes: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $dominoes
     * @return String
     */
    function pushDominoes($dominoes) {
        
    }
}
```

### swift
```swift
class Solution {
    func pushDominoes(_ dominoes: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun pushDominoes(dominoes: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String pushDominoes(String dominoes) {
    
  }
}
```

### golang
```golang
func pushDominoes(dominoes string) string {
    
}
```

### ruby
```ruby
# @param {String} dominoes
# @return {String}
def push_dominoes(dominoes)
    
end
```

### scala
```scala
object Solution {
    def pushDominoes(dominoes: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn push_dominoes(dominoes: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (push-dominoes dominoes)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec push_dominoes(Dominoes :: unicode:unicode_binary()) -> unicode:unicode_binary().
push_dominoes(Dominoes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec push_dominoes(dominoes :: String.t) :: String.t
  def push_dominoes(dominoes) do
    
  end
end
```
