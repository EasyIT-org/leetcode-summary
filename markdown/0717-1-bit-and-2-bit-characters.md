# 717. 1-bit and 2-bit Characters

- Difficulty: Easy
- Topics: Array
- Slug: 1-bit-and-2-bit-characters
- Problem ID: 717

## Description
We have two special characters:
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.
```

### Example 2
```text
Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.
```


## Constraints
- 1 <= bits.length <= 1000
- bits[i] is either 0 or 1.

## Hints
- Keep track of where the next character starts.  At the end, you want to know if you started on the last bit.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        
    }
}
```

### python
```python
class Solution(object):
    def isOneBitCharacter(self, bits):
        """
        :type bits: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
```

### c
```c
bool isOneBitCharacter(int* bits, int bitsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsOneBitCharacter(int[] bits) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    
};
```

### typescript
```typescript
function isOneBitCharacter(bits: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $bits
     * @return Boolean
     */
    function isOneBitCharacter($bits) {
        
    }
}
```

### swift
```swift
class Solution {
    func isOneBitCharacter(_ bits: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isOneBitCharacter(bits: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isOneBitCharacter(List<int> bits) {
    
  }
}
```

### golang
```golang
func isOneBitCharacter(bits []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} bits
# @return {Boolean}
def is_one_bit_character(bits)
    
end
```

### scala
```scala
object Solution {
    def isOneBitCharacter(bits: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_one_bit_character(bits: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-one-bit-character bits)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_one_bit_character(Bits :: [integer()]) -> boolean().
is_one_bit_character(Bits) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_one_bit_character(bits :: [integer]) :: boolean
  def is_one_bit_character(bits) do
    
  end
end
```
