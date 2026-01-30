# 60. Permutation Sequence

- Difficulty: Hard
- Topics: Math, Recursion
- Slug: permutation-sequence
- Problem ID: 60

## Description
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
Given n and k, return the kth permutation sequence.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, k = 3
Output: "213"
```

### Example 2
```text
Input: n = 4, k = 9
Output: "2314"
```

### Example 3
```text
Input: n = 3, k = 1
Output: "123"
```


## Constraints
- 1 <= n <= 9
- 1 <= k <= n!

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string getPermutation(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String getPermutation(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
```

### c
```c
char* getPermutation(int n, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string GetPermutation(int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
};
```

### typescript
```typescript
function getPermutation(n: number, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    function getPermutation($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func getPermutation(_ n: Int, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getPermutation(n: Int, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String getPermutation(int n, int k) {
    
  }
}
```

### golang
```golang
func getPermutation(n int, k int) string {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_permutation(n, k)
    
end
```

### scala
```scala
object Solution {
    def getPermutation(n: Int, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_permutation(n: i32, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (get-permutation n k)
  (-> exact-integer? exact-integer? string?)
  )
```

### erlang
```erlang
-spec get_permutation(N :: integer(), K :: integer()) -> unicode:unicode_binary().
get_permutation(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_permutation(n :: integer, k :: integer) :: String.t
  def get_permutation(n, k) do
    
  end
end
```
