# 946. Validate Stack Sequences

- Difficulty: Medium
- Topics: Array, Stack, Simulation
- Slug: validate-stack-sequences
- Problem ID: 983

## Description
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

### Example 2
```text
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
```


## Constraints
- 1 <= pushed.length <= 1000
- 0 <= pushed[i] <= 1000
- All the elements of pushed are unique.
- popped.length == pushed.length
- popped is a permutation of pushed.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        
    }
};
```

### java
```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        
    }
}
```

### python
```python
class Solution(object):
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
```

### c
```c
bool validateStackSequences(int* pushed, int pushedSize, int* popped, int poppedSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ValidateStackSequences(int[] pushed, int[] popped) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    
};
```

### typescript
```typescript
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $pushed
     * @param Integer[] $popped
     * @return Boolean
     */
    function validateStackSequences($pushed, $popped) {
        
    }
}
```

### swift
```swift
class Solution {
    func validateStackSequences(_ pushed: [Int], _ popped: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validateStackSequences(pushed: IntArray, popped: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool validateStackSequences(List<int> pushed, List<int> popped) {
    
  }
}
```

### golang
```golang
func validateStackSequences(pushed []int, popped []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} pushed
# @param {Integer[]} popped
# @return {Boolean}
def validate_stack_sequences(pushed, popped)
    
end
```

### scala
```scala
object Solution {
    def validateStackSequences(pushed: Array[Int], popped: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn validate_stack_sequences(pushed: Vec<i32>, popped: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (validate-stack-sequences pushed popped)
  (-> (listof exact-integer?) (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec validate_stack_sequences(Pushed :: [integer()], Popped :: [integer()]) -> boolean().
validate_stack_sequences(Pushed, Popped) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec validate_stack_sequences(pushed :: [integer], popped :: [integer]) :: boolean
  def validate_stack_sequences(pushed, popped) do
    
  end
end
```
