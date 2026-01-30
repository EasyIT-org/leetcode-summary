# 393. UTF-8 Validation

- Difficulty: Medium
- Topics: Array, Bit Manipulation
- Slug: utf-8-validation
- Problem ID: 393

## Description
Given an integer array data representing the data, return whether it is a valid UTF-8 encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters).
A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:
This is how the UTF-8 encoding would work:
x denotes a bit in the binary form of a byte that may be either 0 or 1.
Note: The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Number of Bytes   |        UTF-8 Octet Sequence
                       |              (binary)
   --------------------+-----------------------------------------
            1          |   0xxxxxxx
            2          |   110xxxxx 10xxxxxx
            3          |   1110xxxx 10xxxxxx 10xxxxxx
            4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

### Example 2
```text
Input: data = [197,130,1]
Output: true
Explanation: data represents the octet sequence: 11000101 10000010 00000001.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
```

### Example 3
```text
Input: data = [235,140,4]
Output: false
Explanation: data represented the octet sequence: 11101011 10001100 00000100.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.
```


## Constraints
- 1 <= data.length <= 2 * 104
- 0 <= data[i] <= 255

## Hints
- Read the data integer by integer. When you read it, process the least significant 8 bits of it.
- Assume the next encoding is 1-byte data. If it is not 1-byte data, read the next integer and assume it is 2-bytes data.
- Similarly, if it is not 2-bytes data, try 3-bytes then 4-bytes. If you read four integers and it still does not match any pattern, return false.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool validUtf8(vector<int>& data) {
        
    }
};
```

### java
```java
class Solution {
    public boolean validUtf8(int[] data) {
        
    }
}
```

### python
```python
class Solution(object):
    def validUtf8(self, data):
        """
        :type data: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def validUtf8(self, data: List[int]) -> bool:
```

### c
```c
bool validUtf8(int* data, int dataSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ValidUtf8(int[] data) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    
};
```

### typescript
```typescript
function validUtf8(data: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $data
     * @return Boolean
     */
    function validUtf8($data) {
        
    }
}
```

### swift
```swift
class Solution {
    func validUtf8(_ data: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validUtf8(data: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool validUtf8(List<int> data) {
    
  }
}
```

### golang
```golang
func validUtf8(data []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} data
# @return {Boolean}
def valid_utf8(data)
    
end
```

### scala
```scala
object Solution {
    def validUtf8(data: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn valid_utf8(data: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (valid-utf8 data)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec valid_utf8(Data :: [integer()]) -> boolean().
valid_utf8(Data) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec valid_utf8(data :: [integer]) :: boolean
  def valid_utf8(data) do
    
  end
end
```
